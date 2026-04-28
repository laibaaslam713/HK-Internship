const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

if (!fs.existsSync('./uploads')) fs.mkdirSync('./uploads');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './uploads/'),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, 'about-' + uniqueSuffix + path.extname(file.originalname));
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, 
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|gif|webp/;
    const ext = allowed.test(path.extname(file.originalname).toLowerCase());
    const mime = allowed.test(file.mimetype);
    if (ext && mime) return cb(null, true);
    cb(new Error('Only image files are allowed'));
  },
});

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/cms_about';
mongoose
  .connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB error:', err));

const aboutSchema = new mongoose.Schema(
  {
    company_name: { type: String, required: [true, 'Company name is required'], trim: true },
    description:  { type: String, required: [true, 'Description is required'],  trim: true },
    mission:      { type: String, required: [true, 'Mission is required'],       trim: true },
    vision:       { type: String, required: [true, 'Vision is required'],        trim: true },
    image_url:    { type: String, default: '' },
    updated_at:   { type: Date,   default: Date.now },
  },
  { timestamps: false }
);

const About = mongoose.model('About', aboutSchema);

const historySchema = new mongoose.Schema({
  company_name: String,
  description:  String,
  mission:      String,
  vision:       String,
  image_url:    String,
  saved_at:     { type: Date, default: Date.now },
});
const AboutHistory = mongoose.model('AboutHistory', historySchema);


app.get('/about', async (req, res) => {
  try {
    let about = await About.findOne();
    if (!about) {
      about = await About.create({
        company_name: 'Acme Corporation',
        description:  'We are a forward-thinking company dedicated to building the future through innovation, integrity, and impact.',
        mission:      'To empower businesses and individuals with cutting-edge solutions that drive meaningful change.',
        vision:       'A world where technology bridges gaps, creates opportunities, and uplifts every community.',
        image_url:    '',
      });
    }
    res.json({ success: true, data: about });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.put('/about', async (req, res) => {
  try {
    const { company_name, description, mission, vision, image_url } = req.body;

    const errors = {};
    if (!company_name?.trim()) errors.company_name = 'Company name is required';
    if (!description?.trim())  errors.description  = 'Description is required';
    if (!mission?.trim())      errors.mission      = 'Mission is required';
    if (!vision?.trim())       errors.vision       = 'Vision is required';

    if (Object.keys(errors).length > 0) {
      return res.status(422).json({ success: false, errors });
    }

    const existing = await About.findOne();
    if (existing) {
      await AboutHistory.create({
        company_name: existing.company_name,
        description:  existing.description,
        mission:      existing.mission,
        vision:       existing.vision,
        image_url:    existing.image_url,
      });
    }

    const updated = await About.findOneAndUpdate(
      {},
      { company_name, description, mission, vision, image_url, updated_at: new Date() },
      { new: true, upsert: true, runValidators: true }
    );

    res.json({ success: true, data: updated, message: 'About page updated successfully' });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const errors = {};
      Object.keys(err.errors).forEach((k) => (errors[k] = err.errors[k].message));
      return res.status(422).json({ success: false, errors });
    }
    res.status(500).json({ success: false, message: err.message });
  }
});

app.post('/about/upload', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ success: false, message: 'No file uploaded' });
  const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
  res.json({ success: true, image_url: imageUrl });
});

app.get('/about/history', async (req, res) => {
  try {
    const history = await AboutHistory.find().sort({ saved_at: -1 }).limit(10);
    res.json({ success: true, data: history });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.post('/about/restore/:id', async (req, res) => {
  try {
    const version = await AboutHistory.findById(req.params.id);
    if (!version) return res.status(404).json({ success: false, message: 'Version not found' });

    const updated = await About.findOneAndUpdate(
      {},
      {
        company_name: version.company_name,
        description:  version.description,
        mission:      version.mission,
        vision:       version.vision,
        image_url:    version.image_url,
        updated_at:   new Date(),
      },
      { new: true, upsert: true }
    );

    res.json({ success: true, data: updated, message: 'Version restored successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
