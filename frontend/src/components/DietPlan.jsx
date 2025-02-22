import React from "react";
import { useNavigate } from "react-router-dom"; // Using useNavigate instead of useHistory

const DietPlan = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Vegetarian meal plan for the week
  const vegPlan = [
    {
      day: "Monday",
      meals: [
        { time: "7:00 AM", meal: "Oatmeal with almond milk and fresh fruits" },
        { time: "10:00 AM", meal: "Handful of mixed nuts and green tea" },
        { time: "1:00 PM", meal: "Quinoa salad with chickpeas, cucumber, and lemon dressing" },
        { time: "4:00 PM", meal: "Greek yogurt with honey and berries" },
        { time: "7:00 PM", meal: "Grilled tofu with steamed broccoli and brown rice" },
      ],
    },
    {
      day: "Tuesday",
      meals: [
        { time: "7:00 AM", meal: "Smoothie with spinach, banana, and chia seeds" },
        { time: "10:00 AM", meal: "Carrot sticks with hummus" },
        { time: "1:00 PM", meal: "Lentil soup with whole-grain bread" },
        { time: "4:00 PM", meal: "Roasted peanuts and a cup of herbal tea" },
        { time: "7:00 PM", meal: "Vegetable stir-fry with soba noodles" },
      ],
    },
    {
      day: "Wednesday",
      meals: [
        { time: "7:00 AM", meal: "Avocado toast with a side of mixed berries" },
        { time: "10:00 AM", meal: "Trail mix with dried fruits and seeds" },
        { time: "1:00 PM", meal: "Vegetable wrap with hummus and fresh greens" },
        { time: "4:00 PM", meal: "Cucumber slices with guacamole" },
        { time: "7:00 PM", meal: "Spinach and mushroom pasta with a side of roasted vegetables" },
      ],
    },
    {
      day: "Thursday",
      meals: [
        { time: "7:00 AM", meal: "Chia pudding with coconut milk and mango slices" },
        { time: "10:00 AM", meal: "Celery sticks with peanut butter" },
        { time: "1:00 PM", meal: "Vegetable curry with basmati rice" },
        { time: "4:00 PM", meal: "Fruit smoothie bowl topped with granola" },
        { time: "7:00 PM", meal: "Stuffed bell peppers with quinoa and black beans" },
      ],
    },
    {
      day: "Friday",
      meals: [
        { time: "7:00 AM", meal: "Buckwheat pancakes with maple syrup and banana slices" },
        { time: "10:00 AM", meal: "Roasted chickpeas" },
        { time: "1:00 PM", meal: "Grilled vegetable and pesto sandwich on whole-grain bread" },
        { time: "4:00 PM", meal: "Apple slices with almond butter" },
        { time: "7:00 PM", meal: "Vegetable lasagna with a side of garlic bread" },
      ],
    },
    {
      day: "Saturday",
      meals: [
        { time: "7:00 AM", meal: "Tofu scramble with spinach and whole-grain toast" },
        { time: "10:00 AM", meal: "Fresh fruit salad" },
        { time: "1:00 PM", meal: "Vegetable sushi rolls with miso soup" },
        { time: "4:00 PM", meal: "Rice cakes with avocado spread" },
        { time: "7:00 PM", meal: "Thai vegetable curry with jasmine rice" },
      ],
    },
    {
      day: "Sunday",
      meals: [
        { time: "7:00 AM", meal: "Smoothie with kale, pineapple, and flaxseeds" },
        { time: "10:00 AM", meal: "Banana with a handful of walnuts" },
        { time: "1:00 PM", meal: "Grilled vegetable platter with couscous" },
        { time: "4:00 PM", meal: "Homemade granola bar" },
        { time: "7:00 PM", meal: "Mushroom risotto with a side of mixed greens" },
    ],
  },
];

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: "100%",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    padding: "10px",
    color: "white",
    borderRadius: "5px",
  },
  backButton: {
    backgroundColor: "#fff",
    color: "#4CAF50",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  backButtonHover: {
    backgroundColor: "#e0e0e0",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
  },
  mealPlan: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  h2: {
    fontSize: "28px",
    color: "#333",
  },
  h3: {
    fontSize: "22px",
    color: "#555",
    marginTop: "15px",
  },
  ul: {
    listStyleType: "none",
    padding: 0,
  },
  li: {
    marginBottom: "10px",
    padding: "5px",
    borderBottom: "1px solid #ddd",
  },
  strong: {
    fontWeight: "bold",
  },
};

return (
  <div style={styles.container}>
    <header style={styles.header}>
      <button
        style={styles.backButton}
        onClick={() => navigate("/options")}
      >
        Back
      </button>
      <h1 style={styles.title}>FITBELL</h1>
    </header>

    <div style={styles.mealPlan}>
      <h2 style={styles.h2}>Meal Plan for the Week</h2>
      {vegPlan.map((dayPlan, dayIndex) => (
        <div key={dayIndex}>
          <h3 style={styles.h3}>{dayPlan.day}</h3>
          <ul style={styles.ul}>
            {dayPlan.meals.map((meal, index) => (
              <li key={index} style={styles.li}>
                <strong style={styles.strong}>{meal.time}</strong>: {meal.meal}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);
};

export default DietPlan;