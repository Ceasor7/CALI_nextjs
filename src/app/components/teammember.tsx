import Image from 'next/image';
import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 m-4">
      <div className="relative">
      <Image src="/images/user.svg" width={100} height={150} alt={`${name}'s Picture`} className="w-36 h-36 rounded-full mx-auto" />
      </div>
      <h1 className="text-xl font-semibold mt-4">{name}</h1>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

export default TeamMember;
