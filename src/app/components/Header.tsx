import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <>
      <header>
        <div className="flex flex-col md:flex-row items-center p-5 relative">
          <div
            className="
        absolute
        top-0
        left-0
        w-full
        h-96
        bg-gradient-to-br
        from-orange-300
        to-[#880808]
        rounded-md
        filter
        blur-3xl
        opacity-50
        -z-50
        "
          />
          <Link href="/" legacyBehavior>
            <a>
              <Image
                src="/images/logof.png"
                alt="Logo"
                width={300}
                height={100}
                className="w-44 md:w-56 pb-10 md:pb-0 object-contain cursor-pointer"
              />
            </a>
          </Link>
          <div className="flex items-center space-x-4 flex-1 justify-end w-full">
            <Link href="/description">
              <span className="cursor-pointer text-black">Description</span>
            </Link>
            <Link href="/programs">
              <span className="cursor-pointer text-black">Programs</span>
            </Link>
            <Link href="/contact">
              <span className="cursor-pointer text-black">Contact Us</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
