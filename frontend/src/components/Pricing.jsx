import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "plans.jpg",
      title: "FREE PLAN",
      price: 0,
      length: 1,
      features: [
        "Access to Basic Fitness Articles",
        "Weekly Fitness Tips",
        "Basic Access to Community",
        "Email Support"
      ]
    },
    {
      imgUrl: "basic.jpg",
      title: "BASIC PLAN",
      price: 1999,
      length: 1,
      features: [
        "Access to Online Fitness Classes",
        "Personalized Meal Plans",
        "Weekly Fitness Tips",
        "Access to Workout Resources"
      ]
    },
    {
      imgUrl: "premium.jpg",
      title: "PREMIUM PLAN",
      price: 4999,
      length: 3,
      features: [
        "Access to Gym Facilities",
        "Personal Training Sessions",
        "Exclusive Weekly Workshops",
        "Priority Support",
        "Online Fitness Classes"
      ]
    },
    {
      imgUrl: "ultimate.jpg",
      title: "ULTIMATE PLAN",
      price: 9999,
      length: 12,
      features: [
        "All Access Gym Facilities",
        "Unlimited Personal Training",
        "Customized Fitness Plans",
        "24/7 Expert Support",
        "Exclusive Workshops & Events",
        "Priority Booking for Classes"
      ]
    },
  ];

  return (
    <section className="pricing">
      {/* Inline CSS */}
      <style>
        {`
          .pricing {
            background-color: #1e1e1e;
            color: white;
            padding: 50px 20px;
            text-align: center;
            font-family: "Arial", sans-serif;
          }

          .pricing-header h1 {
            font-size: 2.5rem;
            color: rgb(255, 0, 0);
            margin-bottom: 10px;
          }

          .pricing-header p {
            font-size: 1.2rem;
            color: #ccc;
            margin-bottom: 40px;
          }

          .pricing-cards {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 30px;
            margin: 0 auto;
            max-width: 1200px;
          }

          .pricing-card {
            background-color: #2c2c2c;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .pricing-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
          }

          .card-header {
            position: relative;
            padding: 20px;
            background-color: #3c3c3c;
            border-radius: 10px 10px 0 0;
          }

          .card-img {
            width: 100%;
            height: 180px;
            object-fit: cover;
            border-radius: 10px;
          }

          .card-title h2 {
            font-size: 1.8rem;
            color: rgb(255, 0, 0);
            margin: 15px 0;
          }

          .card-title h3 {
            font-size: 1.5rem;
            color: #fff;
          }

          .card-title p {
            font-size: 1rem;
            color: #bbb;
          }

          .card-details ul {
            list-style: none;
            padding: 20px;
            text-align: left;
          }

          .card-details li {
            font-size: 1rem;
            color: #ccc;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
          }

          .card-details li svg {
            margin-right: 10px;
            color: rgb(255, 0, 0);
          }

          .card-footer {
            padding: 20px;
          }

          .join-btn {
            display: inline-block;
            padding: 12px 25px;
            background-color: rgb(255, 0, 0);
            color: white;
            font-size: 1.2rem;
            border-radius: 5px;
            text-decoration: none;
            transition: background-color 0.3s ease, transform 0.3s ease;
          }

          .join-btn:hover {
            background-color: #ff6161;
            transform: scale(1.05);
          }

          @media (max-width: 768px) {
            .pricing-header h1 {
              font-size: 2rem;
            }

            .pricing-header p {
              font-size: 1rem;
            }

            .card-title h2 {
              font-size: 1.5rem;
            }

            .card-title h3 {
              font-size: 1.3rem;
            }

            .card-details li {
              font-size: 0.9rem;
            }

            .join-btn {
              font-size: 1rem;
              padding: 10px 20px;
            }
          }
        `}
      </style>

      <div className="pricing-header">
        <h1>Fitbell Plans</h1>
        <p>Choose the perfect plan that matches your fitness goals.</p>
      </div>

      <div className="pricing-cards">
        {pricing.map((element) => {
          return (
            <div className="pricing-card" key={element.title}>
              <div className="card-header">
                <img src={element.imgUrl} alt={element.title} className="card-img" />
                <div className="card-title">
                  <h2>{element.title}</h2>
                  <h3>Rs {element.price === 0 ? "Free" : element.price}</h3>
                  <p>For {element.length} Month{element.length > 1 ? 's' : ''}</p>
                </div>
              </div>

              <div className="card-details">
                <ul>
                  {element.features.map((feature, index) => (
                    <li key={index}>
                      <Check /> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-footer">
                <Link to={"/"} className="join-btn">{element.price === 0 ? "Get Started" : "Join Now"}</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
