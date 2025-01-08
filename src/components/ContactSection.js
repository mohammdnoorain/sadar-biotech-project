import React from 'react';

const ContactSection = () => {
  return (
    <div className="bg-white  flex items-center justify-center ">
      <div className="container  mx-auto p-6 shadow-lg border border-gray-200 ">
        {/* Outer Wrapper */}
        <div className="flex flex-col md:flex-row">
          {/* Left Div - Contact Details */}
          <div className="w-full md:w-1/2 p-6 bg-gray-50">
            <h2 className="text-2xl font-bold mb-4 text-gray-800  hover:text-green-500 transition-colors duration-300">Contact Us</h2>
            <div className="space-y-6 text-gray-700">
              <p className="transition-transform duration-300 hover:translate-x-2">
                <span className="font-semibold text-green-500">Email:</span> info@sadarbiotech.com
              </p>
              <p className="transition-transform duration-300 hover:translate-x-2">
                <span className="font-semibold text-green-500">Phone:</span> +91 9226077649
              </p>
              <p className="transition-transform duration-300 hover:translate-x-2">
                <span className="font-semibold text-green-500">Registered office:</span>
                Sy. No. 136/11, Gauravaddo, Calangute, North Goa 403516
              </p>
              <p className="transition-transform duration-300 hover:translate-x-2">
                <span className="font-semibold text-green-500">Admin office:</span>
                Above Puma Store, Floor 2, Chogm Road, Porvorim, North Goa 403521
              </p>
           
            </div>
          </div>

          {/* Right Div - Map */}
          <div className="w-full md:w-1/2 relative p-6">
  {/* Map */}
  <div className="w-full h-64 bg-gray-200 relative z-10">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509368!2d144.95373631531212!3d-37.81720997975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775c6d43b77c7e!2sVictoria%20Market!5e0!3m2!1sen!2sau!4v1678192862191!5m2!1sen!2sau"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      title="Google Map"
    ></iframe>
  </div>

  {/* Green Div */}
  <div className="absolute bg-green-500 w-2/3 h-[300px] top-0 right-[1%] shadow-md z-0">
    {/* Green div with sharp corners */}
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default ContactSection;
