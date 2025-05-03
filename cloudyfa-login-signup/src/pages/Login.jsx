import React from 'react';
import AuthForm from '../components/AuthForm';
import PromoSection from '../components/PromoSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <div>
      <Navbar />
      <PromoSection />
      <div className="login-container">
        <h2>Login to Your Account</h2>
        <AuthForm isLogin={true} />
      </div>
      <Footer />
    </div>
  );
};

export default Login;