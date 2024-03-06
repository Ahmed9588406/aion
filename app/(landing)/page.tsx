import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'
import { HiMail, HiSparkles } from "react-icons/hi";
import { IoShareSocialSharp } from "react-icons/io5";


function LandingPage() {
  return (
    <div className='flex flex-col items-center'>
      <main>
      <Hero />
      <Features />
      </main>
    </div>
  )
}

export default LandingPage


const Hero = () => {
  return (
    <div className="mx-4 mb-14 mt-6 flex flex-1 flex-col items-center text-center sm:mb-12 md:mb-32 md:mt-20">
      <h1 className="max-w-5xl text-2xl font-bold sm:text-4xl md:text-6xl">
        Convert Content Into Customers With{" "}
        <span className="bg-gradient-to-r from-red-400 to-purple-600 bg-clip-text text-transparent">
          {" "}
          AI Companions{" "}
        </span>
      </h1>

      <p className="sm:text-md mt-5 max-w-2xl text-sm text-gray-600  md:text-xl">
        Aion helps creators turn regular content into interactive AI
        experiences, effortlessly capturing leads, and nurturing them towards
        your digital products.
      </p>
      <div className="mt-3 flex max-w-4xl flex-col flex-wrap items-center justify-around sm:w-full sm:flex-row">
        <Link href="/lead-magnets">
          <Button variant="default" className="md:text-xl">
            Create Your First AI Companion
          </Button>
        </Link>
      </div>
    </div>
  );
};
const Features = () => {
  return (
    <div className="relative z-10 flex flex-col justify-center space-y-10 px-8 pb-12 pt-8 sm:py-12 md:flex-row md:space-x-10 md:space-y-0 md:py-20 lg:py-28 2xl:py-32">
      <div className="absolute inset-0 z-0 -skew-y-6 transform bg-gradient-to-r from-purple-100 to-purple-50" />
      <div className="relative z-10 flex flex-col justify-center space-y-10 md:flex-row md:space-x-10 md:space-y-0">
        <FeatureCard
          title="Unique AI Companions"
          description="Beyond ebooks and videos, offer dynamic AI solutions that speak directly to your audience's needs."
          icon={<HiSparkles className="h-16 w-16" />}
        />
        <FeatureCard
          title="Effortless Email Capture"
          description="Let AI chatbots do all the hard work and capture leads for you, turning interactions into opportunities effortlessly."
          icon={<HiMail className="h-16 w-16" />}
        />
        <FeatureCard
          title="Easy Integration with Social Media"
          description="Make your posts work for you; effortlessly share interactive content and boost your lead generation."
          icon={<IoShareSocialSharp className="h-16 w-16" />}
        />
      </div>
    </div>
  );
};

const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: JSX.Element;
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-purple-200 bg-white p-8 text-center">
      <div className="mb-4 rounded-full bg-purple-500 p-4 text-white">
        {icon}
      </div>
      <h2 className="mt-4 text-xl font-light text-purple-500">{title}</h2>
      <p className="mt-2 italic text-gray-600">{description}</p>
    </div>
  );
};