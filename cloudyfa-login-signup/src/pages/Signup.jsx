import React from 'react';
import AuthForm from '../components/AuthForm';
import PromoSection from '../components/PromoSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Signup = () => {
  return (
    <div>
      <Navbar />
      <PromoSection />
      <h2>Sign Up</h2>
      <AuthForm isSignup={true} />
      <Footer />
    </div>
  );
};

export default Signup;