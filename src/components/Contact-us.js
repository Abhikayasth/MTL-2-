import React from 'react';
import { Helmet } from 'react-helmet';

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-black-900 via-blue-800 to-blue min-h-screen text-white px-6 py-12">
      <Helmet>
        <title>Contact Us | MadhavTech Labs</title>
        <meta name="description" content="Get in touch with MadhavTech Labs for innovative digital solutions and website development services. Contact us via phone, email, or WhatsApp." />
        <meta name="keywords" content="Contact, MadhavTech Labs, website development, digital solutions, phone, email, WhatsApp, Vadodara, Gujarat" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.madhavtechlabs.com/contact" />
      </Helmet>

      {/* Page Title */}
      <h1 className="text-4xl font-extrabold pt-14 mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 animate-fade-in">
        Contact Us
      </h1>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form Section */}
        <div className="bg-gradient-to-tr from-teal-400 to-blue-500 p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-6 text-black underline decoration-pink-500 decoration-4">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-2sm text-black font-medium mb-2">
                What's Your Name?
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-4 rounded-lg bg-gradient-to-r from-blue-800 to-blue-800 text-white placeholder-gray-300 focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your name"
                required
                aria-label="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-2sm text-black font-medium mb-2">
                What's Your Email?
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-4 rounded-lg bg-gradient-to-r from-blue-800 to-blue-800 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
                required
                aria-label="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-2sm text-black font-medium mb-2">
                Write Your Message Here
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full p-4 rounded-lg bg-gradient-to-r from-blue-800 to-blue-800 text-white placeholder-gray-300 focus:ring-2 focus:ring-green-500"
                placeholder="Write your message here"
                required
                aria-label="Enter your message"
              ></textarea>
            </div>
          </form>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-4 mt-6">
            <a
              href="tel:+91 9173337926"
              className="bg-green-600 hover:bg-orage-600 text-black py-3 px-6 rounded-lg text-center font-semibold shadow-md hover:shadow-lg transform transition duration-300"
              aria-label="Call us"
            >
              Call Us
            </a>
            <a
              href="https://wa.me/9173337926"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-500 hover:bg-purple-400 text-black py-3 px-6 rounded-lg text-center font-semibold shadow-md hover:shadow-lg transform transition duration-300"
              aria-label="WhatsApp message"
            >
              WhatsApp Message
            </a>
            <a
              href="mailto:wwatgr0280@gmail.com"
              className="bg-pink-500 hover:bg-pink-400 text-black py-3 px-6 rounded-lg text-center font-semibold shadow-md hover:shadow-lg transform transition duration-300"
              aria-label="Send us an email"
            >
              Send Email
            </a>
          </div>
        </div>

        {/* Contact Details Section */}
        <div className="space-y-8">
          {/* Office Location */}
          <div className="bg-gradient-to-br from-teal-400 to-blue-700 p-6 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105">
            <h2 className="text-2xl text-black font-semibold mb-4 underline decoration-pink-500 decoration-4">
              Our Office Is On Online Platform But We stay In,,
            </h2>
            <p className="mb-2 text-black">Main City,</p>
            <p className="mb-2 text-black">Vadodara, Gujarat 390001</p>
            <p className="text-black">India</p>

            {/* Embedded Map */}
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.619372003333!2d73.17665471523707!3d22.30715164888364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc76a3ed8dc05%3A0x95b3a81fc4623c91!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1625763938395!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg shadow-md"
                title="Our office location on Google Maps"
              ></iframe>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-teal-400 to-blue-800 p-6 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105">
            <h2 className="text-2xl text-black font-semibold mb-4 underline decoration-purple-500 decoration-4">
              Get in Touch
            </h2>
            <p className="mb-2 text-black">Phone: +91 9173337926</p>
            <p className="text-black">Email: wwatgr0280@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
