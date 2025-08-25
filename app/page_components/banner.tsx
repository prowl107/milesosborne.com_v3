import { getProfile, urlFor } from "@/sanity-utils";
import Link from "next/link";
const profile = await getProfile();
const profilePic = profile.picture;
import { Menu, X } from "lucide-react";

export default function banner() {
  return (
    <div>
      {/* Header */}
    <header id="header" className="bg-white shadow-md">
      <div className="inner flex flex-col md:flex-row items-center justify-between px-4 py-3 md:py-5">
        
        {/* Avatar + Title */}
        <div className="flex items-center gap-4">
          <span className="image avatar w-14 h-14">
            <img
              src={urlFor(profilePic).url()}
              alt="Hey it's me"
              className="rounded-full"
            />
          </span>
          <h1 className="text-lg font-bold">
            Hi, I&apos;m Miles
            <p className="text-sm font-normal leading-snug">
              Embedded Software Engineer
              <br />and sometimes a rocket scientist on the weekend
            </p>
          </h1>
        </div>

      {/* Mobile nav */}
      <details className="w-full mt-4">
        <summary className="flex items-center justify-between cursor-pointer px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200">
          <span>Menu</span>
          <Menu size={20} />
        </summary>
        <nav className="mt-2" id="nav">
          <ul className="flex flex-col gap-3 text-center">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#featured">Recent Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="./Resume.pdf">Resume</a></li>
          </ul>
        </nav>
      </details>
        
      {/* Desktop nav */}
      <nav className="desktop-nav" id="nav">
        <ul className="flex gap-6">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#featured">Recent Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="./Resume.pdf">Resume</a></li>
        </ul>
      </nav>

      </div>
    </header>
    </div>
  );
}
