import React from 'react';

const Footer = () => {
  return (
    <footer className="text-black py-4 relative">
      <div className="container mx-auto text-center">
        <div
          className="
            absolute
            top-0
            left-0
            w-full
            h-full 
            bg-gradient-to-br
            from-green-700
            to-[#7CFC00]
            rounded-md
            filter
            blur-3xl
            opacity-50
          "
        />
        <p className="font-cali font-bold">&copy; {new Date().getFullYear()} Creative age</p>
      </div>
    </footer>
  );
};

export default Footer;
