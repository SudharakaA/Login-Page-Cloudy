import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PromoSection from '../components/PromoSection';
import Features from '../components/Features';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Your Dashboard</h1>
      <PromoSection />
      <Features />
      <Footer />
    </div>
  );
};

export default Dashboard;