import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import HeroImage from '../images/Hero.jpg'; // Import the Hero image

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Madhav Tech Labs Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Madhav Tech Labs</h3>
            <p className="text-gray-400 mb-4">Transforming businesses with innovative tech solutions.</p>
            <div className="flex space-x-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-105">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['Services', 'Portfolio', 'Process', 'Team', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-2 text-purple-500" />
                <a href="mailto:info@madhavtechlabs.com" className="text-gray-400 hover:text-white transition-colors">
                  info@madhavtechlabs.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="w-5 h-5 mr-2 text-purple-500" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="w-5 h-5 mr-2 text-purple-500" />
                <span className="text-gray-400">123 Tech Street, Digital City</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
              />
              <button
                type="submit"
                className="bg-purple-500 text-white px-4 py-2 rounded-r-md hover:bg-purple-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {currentYear} Madhav Tech Labs. All rights reserved.</p>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${HeroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
    </footer>
  );
}
