import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Team from "./components/Team";
import Testimonials from "./components/Testimonial";
import Blog from "./components/Blog";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Timeline from "./components/Timeline";
import SuccessStories from "./components/SuccessStories";
import FAQ from "./components/FAQ";
import StructuredData from "./components/StructuredData";
import Chatbot from "./components/Chatbot";
import WebsiteGuide from "./components/WebsiteGuide";
import ContactPage from "./components/Contact-us"; // Contact Us Page
import DetailedServices from "./components/DetailedServices"; // Services Page

// Lazy load InteractiveBackground for performance optimization
const InteractiveBackground = React.lazy(() =>
  import("./components/InteractiveBackground")
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading effect
    setTimeout(() => setIsLoading(false), 2500);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Routes>
          {/* Default Loading Page */}
          <Route path="/" element={<LoadingScreen />} />

          {/* Main App Route */}
          <Route
            path="/main"
            element={
              <div className="relative min-h-screen bg-black text-white overflow-hidden">
                <StructuredData />
                <Suspense fallback={<LoadingScreen />}>
                  <InteractiveBackground />
                </Suspense>
                <Header />
                <main>
                  <Hero />
                  <Services />
                  <Portfolio />
                  <Process />
                  <Timeline />
                  <Team />
                  <SuccessStories />
                  <Testimonials />
                  <Blog />
                  <FAQ />
                  <ContactCTA />
                </main>
                <Footer />
                <Chatbot />
                <WebsiteGuide />
              </div>
            }
          />

          {/* Contact Us Page */}
          <Route
            path="/contact-us"
            element={
              <div className="relative min-h-screen bg-black text-white">
                <Header />
                <ContactPage />
                <Footer />
              </div>
            }
          />

          {/* Detailed Services Page */}
          <Route
            path="/detailed-services"
            element={
              <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 text-gray-900">
                <Header />
                <DetailedServices />
                <Footer />
              </div>
            }
          />
        </Routes>
      )}
    </Router>
  );
}

export default App;
