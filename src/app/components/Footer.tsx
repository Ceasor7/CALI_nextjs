import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-black py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Creative age</p>
      </div>
    </footer>
  );
};

export default Footer;
