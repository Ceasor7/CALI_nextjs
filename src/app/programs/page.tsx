/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import TeamMember from '../components/teammember';

const teamMembers = [
  {
    name: 'Kevin Kimani Kahuro',
    role: 'Chief Executive Officer',
    image: '/kevin-kimani.jpg',
  },
  {
    name: 'Dr. Emmanuel Shikuku',
    role: 'Head of Research and Training',
    image: '/Emmanuel shikuku.jpg',
  },
  {
    name: 'Faith Mwende',
    role: 'Legal and advocacy',
    image: '/Faith-mwende.jpg',
  },
  {
    name: 'Reigner Njoroge',
    role: 'Admin & Research Officer',
    image: '/reigner-njoroge.jpg',
  },
];


function Programs() {
  return (
    <div className="container mx-auto px-4 py-8">
  <h1 className="flex justify-center text-2xl font-semibold mb-4">Programs</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-4">
    <p className="p-4 rounded shadow-lg">
      1. CALI's research program aims to support evidence-based decision-making and contribute to the knowledge and understanding of the arts sector in Kenya.
    </p>
    <p className="p-4 rounded shadow-lg">
      2. CALI's training workshops focus on building skills in areas such as arts management, fundraising, marketing and audience development, financial management, and strategic planning.
    </p>
    <p className="p-4 rounded shadow-lg">
      3. CALI's leadership development programs aim to help emerging and established arts leaders build their skills and knowledge, deepen their understanding of the arts sector, and develop networks and connections with other arts professionals.
    </p>
    <p className="p-4 rounded shadow-lg">
      4. CALI's mentorship and coaching programs pair emerging arts leaders with experienced mentors in the arts sector, providing one-on-one guidance and support to help emerging arts leaders develop their skills, build their networks, and navigate the challenges of working in the arts sector.
    </p>
    <div className="col-span-1 md:col-span-2 sm:col-span-1 flex justify-center">
      <p className="p-4 border rounded shadow-lg">
        5. CALI's advocacy and awareness-raising initiatives aim to raise public awareness of the importance of the arts and culture in Kenya, advocate for policies and funding that support the arts, and build partnerships and collaborations across sectors to support the growth and development of the arts sector.
      </p>
    </div>
  </div>
  <div className="p-4">
    <h1 className="flex justify-center text-2xl font-semibold mb-4">Our Team</h1>
    <div className="flex flex-wrap justify-center">
      {teamMembers.map((member, index) => (
        <TeamMember key={index} {...member} />
      ))}
    </div>
    <p className="mt-4">
      Thank you for considering CALI as your partner in creative arts leadership development. We look forward to working with you to help you achieve your leadership goals and make a positive impact on the world.
    </p>
  </div>
</div>

  );
}

export default Programs;
