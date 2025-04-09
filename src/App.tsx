import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CountdownTimer from './components/CountdownTimer';
import EventRoadmap from './components/EventRoadmap';
import EventDetails from './components/EventDetails';
import TeamsGrid from './components/TeamsGrid';
import Footer from './components/Footer';
import FloatingGameElements from './components/FloatingGameElements';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      <Navbar />
      <FloatingGameElements />
      <section id="hero">
        <Hero />
      </section>
      <section id="schedule">
        <CountdownTimer />
        <EventRoadmap />
      </section>
      <section id="about">
        <EventDetails />
      </section>
      <section id="teams">
        <TeamsGrid />
      </section>
      <Footer />
    </div>
  );
}

export default App;