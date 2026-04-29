const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const serviceRoutes = require("./Routes/serviceRoute");
app.use("/api/services", serviceRoutes);

app.get("/", (req, res) => {
  res.json({ success: true, message: "Services Listing API is running 🚀" });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Something went wrong!" });
});

const seedServices = async () => {
    try{
  const Service = require("./models/Services");
  const count = await Service.countDocuments();
  if (count > 0) return;

  const services = [
    {
      title: "Web Development",
      slug: "web-development",
      description: "Custom, responsive web applications built with modern tech stacks.",
      details: "We craft fully responsive, SEO-optimized web applications using React, Next.js, Node.js, and MongoDB. From landing pages to complex platforms, our solutions are scalable, fast, and user-friendly.",
      icon: "🌐",
      image_url: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800",
      category: "Web",
      price: 999,
      status: "active",
    },
    {
      title: "AI Integration",
      slug: "ai-integration",
      description: "Embed powerful AI capabilities into your products and workflows.",
      details: "Leverage cutting-edge AI models including GPT-4, Claude, and custom ML pipelines to automate, predict, and enhance your business. We handle everything from prompt engineering to full AI product development.",
      icon: "🤖",
      image_url: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800",
      category: "AI",
      price: 1499,
      status: "active",
    },
    {
      title: "Mobile App Development",
      slug: "mobile-app-development",
      description: "Native and cross-platform apps for iOS and Android.",
      details: "Using React Native and Flutter, we build high-performance mobile apps that feel native on every platform. Our apps are tested, optimized, and published to both the App Store and Google Play.",
      icon: "📱",
      image_url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
      category: "Mobile",
      price: 1299,
      status: "active",
    },
    {
      title: "UI/UX Design",
      slug: "ui-ux-design",
      description: "Beautiful, intuitive interfaces designed for real users.",
      details: "Our design team creates stunning, user-centered interfaces using Figma. From wireframes to high-fidelity prototypes, we ensure every pixel serves a purpose and every interaction feels natural.",
      icon: "🎨",
      image_url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
      category: "Design",
      price: 799,
      status: "active",
    },
    {
      title: "Digital Marketing",
      slug: "digital-marketing",
      description: "Data-driven campaigns that grow your audience and revenue.",
      details: "From SEO and content marketing to paid ads and social media, our marketing experts craft strategies that convert. We use analytics-first approaches to maximize your ROI.",
      icon: "📈",
      image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      category: "Marketing",
      price: 599,
      status: "active",
    },
    {
      title: "Cloud & DevOps",
      slug: "cloud-devops",
      description: "Scalable cloud infrastructure and CI/CD pipelines.",
      details: "We deploy, monitor, and maintain your applications on AWS, GCP, or Azure. Our DevOps engineers set up robust CI/CD pipelines, containerized environments with Docker/Kubernetes, and 24/7 monitoring.",
      icon: "☁️",
      image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      category: "Web",
      price: 1199,
      status: "active",
    },
  ];

  await Service.insertMany(services);
  console.log("✅ Database seeded with sample services");
}catch (error) {
    console.error("❌ SEED ERROR:", error);   
  }
};

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB Connected");
    await seedServices();
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
  console.error("❌ Error after DB connection:", err);
}); 