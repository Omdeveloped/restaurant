import { useState } from "react";
import "./App.css";
import burger from "./assets/CheeseBurger.jfif";
import pizza from "./assets/VegPizza.png";
import pasta from "./assets/PastaAlfredo.jfif";
import chicken from "./assets/GrilledChicken.jpg";
import chickenrice from "./assets/ChickenRice.webp";
import chickennoodles from "./assets/ChickenNoodles.jpg";
import meals from "./assets/Meals.jpg";

function Mesh() {
  // Initial menu items and their prices
  const menuItems = [
    {
      title: "Cheese Burger",
      image: burger,
      description: "A delicious cheeseburger with all the toppings!",
      price: 99.99,
    },
    {
      title: "Veg Pizza",
      image: pizza,
      description: "A tasty vegetarian pizza with fresh ingredients!",
      price: 55.99,
    },
    {
      title: "Pasta Alfredo",
      image: pasta,
      description: "A creamy pasta with Alfredo sauce and chicken.",
      price: 65.99,
    },
    {
      title: "Grilled Chicken",
      image: chicken,
      description: "Juicy grilled chicken served with seasoned vegetables.",
      price: 69.99,
    },
    {
      title: "Chicken Rice",
      image: chickenrice,
      description:
        "Succulent grilled chicken served on a bed of flavorful seasoned rice.",
      price: 89.99,
    },
    {
      title: "Chicken Noodles",
      image: chickennoodles,
      description:
        "Tender grilled chicken paired with savory, stir-fried noodles.",
      price: 89.99,
    },
    {
      title: "Meals",
      image: meals,
      description:
        "Delicious and satisfying meals, crafted with fresh ingredients and bold flavors.",
      price: 159.99,
    },
  ];

  // State to track the quantity of each item and the total price
  const [quantities, setQuantities] = useState(
    menuItems.reduce((acc, item) => {
      acc[item.title] = 0; // Initialize each item quantity to 0
      return acc;
    }, {})
  );

  // State to show if the order is placed
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  // Function to handle the change in quantity
  const handleQuantityChange = (title, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [title]: quantity,
    }));
  };

  // Calculate the total amount (fix the NaN issue by defaulting to 0)
  const totalAmount = menuItems.reduce(
    (total, item) => total + item.price * (quantities[item.title] || 0),
    0
  );

  // MenuCard Component (Receives the food item details and quantity)
  const MenuCard = (menus) => {
    return (
      <div className="menu-card">
        <img className="menu-img" src={menus.image} alt="image" />
        <h2 className="menu-title">{menus.title}</h2>
        <p className="menu-description">{menus.description}</p>
        <p className="menu-price">₹{menus.price}</p>
        <div className="quantity-selector">
          <input
            type="number"
            min="0"
            value={quantities[menus.title]}
            onChange={(e) =>
              handleQuantityChange(menus.title, parseInt(e.target.value) || 0)
            }
          />
          <span>Qty</span>
        </div>
      </div>
    );
  };

  // Handle the order click event
  const handleOrderClick = () => {
    // Display the confirmation message
    const orderMessage = `Your order has been placed successfully! Total: ₹${totalAmount.toFixed(
      2
    )}`;
    if (window.confirm(orderMessage)) {
      // Reset the quantities and set order status
      setQuantities(
        menuItems.reduce((acc, item) => {
          acc[item.title] = 0;
          return acc;
        }, {})
      );
      setIsOrderPlaced(true);
    }
  };

  return (
    <div className="App">
      <h1>Welcome to Our Restaurant</h1>
      <div className="menu">
        {menuItems.map((item) => (
          <MenuCard
            key={item.title}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
      <div className="total">
        <h2>Total Amount: ₹{totalAmount.toFixed(2)}</h2>
      </div>
      <div className="order-button">
        <button onClick={handleOrderClick} className="order-btn">
          Place Order
        </button>
      </div>
      {isOrderPlaced && <p>Your order has been placed successfully!</p>}
    </div>
  );
}

export default Mesh;
