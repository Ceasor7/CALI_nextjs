/* eslint-disable react/no-unescaped-entities */
// pages/index.js
import Image from 'next/image';
import React from 'react';

const Description = () => {

  const svgImagePath = '/images/telescope.svg';
  const svgImagePath1 = '/images/darts.svg';

  return (
    <div className="flex flex-col p-9">
      <div className="p-8 mb-4 rounded-lg shadow-md flex items-center">
        <div className="flex flex-col">
        <h1 className="text-2xl font-cali font-bold mb-2">Mission</h1>
        <p className="text-black font-cali">CALI's mission is to support and empower individuals and organizations working in the arts sector by providing research, training, education, and resources to help build their capacity and effectiveness. We believe that a vibrant and sustainable arts sector is essential to Kenya's social and economic development, and we are committed to helping the sector thrive.
        </p>
      </div>
      <div className="mr-4">
          <Image src={svgImagePath1} width={500} height={300} alt="Vision Icon" />
        </div>
      </div>
      

      <div className="p-8 mb-4 rounded-lg shadow-md flex items-center">
        <div className="mr-4">
          <Image src={svgImagePath} width={500} height={300} alt="Vision Icon" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold font-cali mb-2">Vision</h1>
          <p className="text-black font-cali">CALI's vision is to create a dynamic and inclusive arts sector that promotes creativity, cultural diversity, and social and economic development. We envision a future in which the arts are valued and supported as a vital component of Kenyan society, and in which individuals and organizations working in the arts sector have the skills, resources, and support they need to achieve their full potential.</p>
        </div>
      </div>
      <div className="p-8 mb-4 rounded-lg shadow-md">
      <h1 className="flex justify-center items-center text-2xl font-cali font-semibold mb-4">Core Values</h1>
      <ul className="list-disc p-4 font-cali grid grid-cols-3 gap-4">
        <li> Integrity</li>
        <li> Excellence</li>
        <li> Collaboration</li>
        <li> Innovation</li>
        <li> Respect</li>
        <li> Diversity</li>
      </ul>
      <p className="mt-4 font-cali">
      We strive for excellence in all aspects of our work, encouraging and supporting creative thinking and innovation. We promote diversity, equity, and inclusion in the arts, creating a welcoming and inclusive environment for all participants in our programs and initiatives. CALI believes in the power of collaboration and partnership to achieve common goals, taking responsibility for their actions and decisions and working transparently and accountability. Finally, we recognize the importance of sustainability in the arts sector and promote practices that ensure the long-term viability and resilience of the arts in Kenya.

      </p>
      </div>
      
    </div>
  );
};

export default Description;
