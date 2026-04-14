import ThemeToggle from "./components/ThemeToggle";
import Card from "./components/Card";
import "./App.css";
import biryani from "./assets/biryani.jfif"
import burger from "./assets/beef-burger.jpg"
import vegPasta from "./assets/veg-pasta.jpg"
import chocolateCake from "./assets/chocolate-cake.jfif"
import salad from "./assets/salad.jpg"
import bbqPizza from "./assets/bbq-pizza.png"
import brownie from "./assets/brownie.jpg"
import chapliKabab from "./assets/chapliKaba.jpg"
import { CookingPot } from "lucide-react";


const recipes = [
  {
    id: 1,
    title: "Chicken Biryani",
    image: biryani,
    description:
      "A flavorful and aromatic rice dish made with tender chicken, spices, and basmati rice.",
    buttonText: "View Recipe",
  },
  {
    id: 2,
    title: "Beef Burger",
    image: burger,
    description:
      "Juicy grilled beef patty layered with cheese, lettuce, and special sauce in a soft bun.",
    buttonText: "View Recipe",
  },
  {
    id: 3,
    title: "Vegetable Pasta",
    image: vegPasta,
    description:
      "Healthy pasta loaded with fresh vegetables and a light creamy tomato sauce.",
    buttonText: "View Recipe",
  },
  {
    id: 4,
    title: "Chocolate Cake",
    image: chocolateCake,
    description:
      "Rich, moist chocolate cake topped with smooth chocolate ganache.",
    buttonText: "View Recipe",
  },
  {
    id: 5,
    title: "Caesar Salad",
    image: salad,
    description:
      "Crisp lettuce tossed with creamy Caesar dressing, croutons, and parmesan cheese.",
    buttonText: "View Recipe",
  },
  {
    id: 6,
    title: "BBQ Pizza",
    image: bbqPizza,
    description:
      "A smoky BBQ pizza topped with grilled chicken, melted cheese, onions, and tangy bbq sauce.",
    buttonText: "View Recipe",
  },
  {
    id: 7,
    title: "Brownies",
    image: brownie,
    description:
      "Soft, fudgy chocolate brownies with a rich cocoa flavor and a slightly crispy top layer.",
    buttonText: "View Recipe",
  },
  {
    id: 8,
    title: "Chapli Kabab",
    image: chapliKabab,
    description:
      "A spicy, flavorful minced meat kebab made with herbs, chilies, and traditional spices.",
    buttonText: "View Recipe",
  },
];

function App() {
  const cards = recipes.map((data, index) => (
    <Card
      key={index}
      image={data.image}
      title={data.title}
      description={data.description}
      buttonText={data.buttonText}
    />
  ));

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-brand">
          <CookingPot size={24} strokeWidth={2.5} />
          <h1>Recipe Book</h1>
        </div>
        <ThemeToggle />
      </nav>

      <main className="content">
        <div className="cards-grid">
          {cards}
        </div>
      </main>
    </div>
  );
}

export default App;