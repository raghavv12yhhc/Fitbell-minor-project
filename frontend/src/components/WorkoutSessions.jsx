import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSIONS</h1>
        <p>
          Unlock your full potential with our expertly designed workout sessions. Whether you're a beginner or an advanced athlete, we have tailored programs to suit your needs. Our top sessions focus on improving strength, endurance, flexibility, and overall fitness, ensuring you reach your fitness goals faster and with lasting results.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Get ready for our exclusive boot camps designed to challenge you and push your limits. These high-intensity sessions combine strength training, cardio, and functional exercises to burn fat, build muscle, and increase endurance. Join our expert trainers for an immersive, motivational experience that will take your fitness journey to the next level.
        </p>
        <div className="bootcamps">
          <div>
            <h4>High-Intensity Full Body Burn</h4>
            <p>
              This bootcamp focuses on high-intensity interval training (HIIT), combining explosive movements with short rest periods to maximize calorie burn and increase muscle endurance. Perfect for those who want fast results and a challenge!
            </p>
          </div>
          <div>
            <h4>Strength & Conditioning Bootcamp</h4>
            <p>
              Focus on building strength and power with this bootcamp designed for muscle growth and endurance. With compound exercises and functional movements, you'll gain a strong, lean physique.
            </p>
          </div>
          <div>
            <h4>Cardio Blast Bootcamp</h4>
            <p>
              This bootcamp is all about boosting your cardiovascular health while shedding fat. Expect a mix of running, cycling, and bodyweight exercises designed to improve stamina and endurance.
            </p>
          </div>
          <div>
            <h4>Flexibility & Mobility Bootcamp</h4>
            <p>
              Designed for those looking to improve their flexibility and range of motion, this bootcamp includes yoga and dynamic stretches that help reduce muscle tightness, improve posture, and prevent injuries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
