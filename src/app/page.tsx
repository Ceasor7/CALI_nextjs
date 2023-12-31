import Image from 'next/image';
import Header from './components/Header';
import Link from 'next/link'; // Import the Link component

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center px-5 md:py-5 text-center">
        <h1 className="text-2xl font-cali font-bold mb-2">CREATIVE ARTS LEADERSHIP INSTITUTE</h1>
        <h3 className="font-cali font-bold italic">Building a sustainable future for the arts</h3>
        <p className="my-4 font-cali mx-2 md:mx-12">
          Welcome to the Creative Arts Leadership Institute (CALI), a premier leadership development organization focused on empowering creative professionals to lead with vision, purpose, and impact. CALI is a non-profit organization that focuses on promoting arts management in the country. It provides research, training, education, and resources to empower individuals and organizations working in the arts sector. Their aim is to create a more vibrant and sustainable arts sector in Kenya by undertaking research and increasing access to resources, funding, and growth opportunities.
        </p>
       
        <Link href="/description">
          <button className="font-cali text-black font-bold py-2 px-4 rounded mt-4 border border-orange-200 animate-bounce">
           Learn more
          </button>
        </Link>
      </div>
    </main>
  );
}
