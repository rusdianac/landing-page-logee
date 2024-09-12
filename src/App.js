import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import "./App.css";
import ImageSlider from "./components/ImageSlider";
import SliderComponent from "./components/SliderComponent";
import AnimatedSection from "./components/AnimatedSection";
import AnimasiBerjalan from "./components/AnimasiBerjalan";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Chatbot from "./components/ChatBot";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <StatsSection />
      <ImageSlider />
      <SliderComponent />
      <AnimatedSection />
      <AnimasiBerjalan />
      <Testimonial />
      <FAQ />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
