import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Ring Customizer</h3>
            <p className="mb-4 text-gray-300">
              Crafting exquisite jewelry since 1995. Each piece is handcrafted with precision and passion to celebrate your special moments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <FaPinterest size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Shop</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Custom Rings</a></li>
             
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Customer Service</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">My Account</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Order Tracking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Wishlist</a></li>
             
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MdLocationOn className="mt-1 mr-3 text-yellow-400" size={20} />
                <p className="text-gray-300">Sector 18 , Noida , UP, India</p>
              </div>
              <div className="flex items-center">
                <MdPhone className="mr-3 text-yellow-400" size={20} />
                <p className="text-gray-300">+1 (800) 123-4567</p>
              </div>
              <div className="flex items-center">
                <MdEmail className="mr-3 text-yellow-400" size={20} />
                <p className="text-gray-300">ring.Cutomizer@gmail.com</p>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-3 text-yellow-400">Newsletter</h4>
              <p className="text-gray-300 mb-3">Subscribe for updates and exclusive offers</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 w-full rounded-l focus:outline-none text-gray-800"
                />
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-r transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ring Cutomizer. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;