'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  };

  return (
    <div className="flex gap-8">
      <div className="text-black p-11" style={{ flexBasis: '25%' }}>
        <p className="font-bold font-cali">P.O Box 19533 - 00100</p>
        <p className="font-bold font-cali">Nairobi, Kenya</p>
        <p className="font-bold font-cali">cali@cali.institute</p>
      </div>
      <div className="p-9" style={{ flexBasis: '75%' }}>
        <h2 className="text-3xl font-cali font-semibold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-black font-cali font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-12 border rounded-md px-3 font-cali py-2 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-black font-cali font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6} // Increase the number of rows for a larger input area
              className="w-full h-56 border rounded-md font-cali px-3 py-2 text-black"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-400 hover:bg-orange-600 text-white font-cali font-bold py-2 px-4 rounded "
          >
            Send email
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
