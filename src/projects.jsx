import React from 'react';
import Card from './Card';
import chess from './images/chess.jpg';
import aviation_api from './images/aviation-api.jpg';
import flight_seat from './images/flight-seat.jpg';
import air_traffic from './images/air-traffic.jpg'; // Add this image to your images folder
import { motion } from 'framer-motion';

const Projects = () => {
  const cards = [
    {
      imageUrl: aviation_api,
      altText: 'Aviation API',
      title: 'Aviation Weather API',
      description: 'A cloud-native Node.js API that fetches real-time weather data for airports using ICAO codes. Dockerized, CI/CD with GitHub Actions, and deployed on Railway.',
      explore: 'https://github.com/VRAJPATEL-07/aviation-weather-api'
    },
    {
      imageUrl: flight_seat,
      altText: 'Flight Seat Reservation',
      title: 'Flight Seat Reservation System',
      description: 'Full-stack MERN app for reserving flight seats. Users can select flights, pick seats, and view bookings in real-time.',
      explore: 'https://github.com/VRAJPATEL-07/-FlightSeat-Reservation-System-'
    },
    {
      imageUrl: air_traffic,
      altText: 'Cloud ATC System',
      title: 'Cloud-Optimized Air Traffic Control System',
      description: 'A simulated air traffic control system designed for cloud environments. Uses real-time data and microservices architecture for scalable operations.',
      explore: 'https://github.com/VRAJPATEL-07/Cloud-Optimized-Air-Traffic-Control-System'
    },
    {
      imageUrl: chess,
      altText: 'Chess Game',
      title: 'Chess Game',
      description: 'The Chess Game is a Java-based application that utilizes Object-Oriented Programming (OOP) principles to create a fully functional chess game. The application features a graphical representation of the chessboard, allowing users to play against each other or an AI opponent.',
      explore: 'https://github.com/VRAJPATEL-07/Java-Mini-Project-Chess'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ margin: '-100px', once: true }}
      className="up_gap"
      id="project"
    >
      <h2 className="heading1 down_gap">Projects</h2>
      <div className="completely">
        <div className="grid">
          {cards.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              altText={card.altText}
              title={card.title}
              description={card.description}
              explore={card.explore}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
