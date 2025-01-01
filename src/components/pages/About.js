import React from "react";
import HeroSectionAbout from "../HeroSectionAbout";
import Footer from "../Footer";
import CardsAbout from "../CardsAbout";

const About = () => {
  return (
    <div>
      <HeroSectionAbout />
      <div className="bg-gradient-to-b from-green-100 to-blue-100 py-10">
        {/* Our Story Section */}
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-green-800 mb-4">Our Story</h1>
            <p className="text-lg text-blue-800 leading-relaxed mb-4">
              Welcome to Sadar Biotech Private Limited, a trusted global brand.
              Through our humble beginnings, we were established in 2017 with a
              commitment towards transforming agriculture through innovation,
              reliability, and sustainability. Over the years, we have grown
              into a globally trusted name, symbolizing excellence in enhancing
              and safeguarding agricultural produce.
            </p>
            <p className="text-lg text-blue-800 leading-relaxed">
              Our offering was not only limited to the development of
              agriculture, we soon started addressing the gaps in the
              pharmaceutical sector. We have started our pharma journey by
              manufacturing high-quality APIs and intermediates. We are
              committed towards cultivating the trust that we have built over
              the years and provide some cutting-edge scientific solutions in
              the pharmaceutical sector.
            </p>
          </div>
          <div>
            <img
              src="/images/building-img.jpeg"
              alt="Our Story"
              className=" w-screen rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
      <CardsAbout/>

      {/* Grid Sections */}
      <div className="bg-white py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Vision and Mission */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-green-200 transition-all duration-300">
            <h2 className="text-xl font-bold text-green-800 mb-4">
              Our Vision & Mission
            </h2>
            <p className="text-blue-800 leading-relaxed">
              At Sadar Biotech, we envision a world where agriculture flourishes
              with the support of cutting-edge scientific solutions.
            </p>
          </div>

          {/* Product Specialization */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-green-200 transition-all duration-300">
            <h2 className="text-xl font-bold text-green-800 mb-4">
              Product Specialization
            </h2>
            <p className="text-blue-800 leading-relaxed">
              We specialize in the production and distribution of pesticides,
              herbicides, fungicides, and surfactants.
            </p>
          </div>

          {/* Global Presence */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-green-200 transition-all duration-300">
            <h2 className="text-xl font-bold text-green-800 mb-4">
              Global Presence
            </h2>
            <p className="text-blue-800 leading-relaxed">
              We have expanded our reach across continents, including Russia,
              CIS countries, European markets, and the United States.
            </p>
          </div>

          {/* Pharmaceutical Excellence */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-green-200 transition-all duration-300">
            <h2 className="text-xl font-bold text-green-800 mb-4">
              Pharmaceutical Excellence
            </h2>
            <p className="text-blue-800 leading-relaxed">
              We produce high-quality APIs and adhere to stringent quality
              control standards.
            </p>
          </div>

          {/* Sustainability */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-green-200 transition-all duration-300">
            <h2 className="text-xl font-bold text-green-800 mb-4">
              Commitment To Sustainability
            </h2>
            <p className="text-blue-800 leading-relaxed">
              Sadar Biotech actively pursues eco-friendly formulations and
              processes for agricultural sustainability.
            </p>
          </div>

          {/* Environmental Stewardship */}
          <div className="bg-green-100 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-green-200 transition-all duration-300">
            <h2 className="text-xl font-bold text-green-800 mb-4">
              Environmental Stewardship
            </h2>
            <p className="text-blue-800 leading-relaxed">
              We aim to harmonize progress with preservation, ensuring a
              sustainable future.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
