import { Phone, Mail, MapPin, Youtube, Send, MessageCircle, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-header text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Agarwal Brothers</h3>
            <p className="text-sm text-gray-300">
              Leading CA education platform founded by AIR 1 toppers. We provide world-class coaching for CA, CMA aspirants.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Send className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/courses" className="hover:text-primary transition-colors">Courses</a></li>
              <li><a href="/test-series" className="hover:text-primary transition-colors">Test Series</a></li>
              <li><a href="/books" className="hover:text-primary transition-colors">Books</a></li>
              <li><a href="/resources" className="hover:text-primary transition-colors">Free Resources</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Courses</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/ca-final" className="hover:text-primary transition-colors">CA Final</a></li>
              <li><a href="/ca-inter" className="hover:text-primary transition-colors">CA Inter</a></li>
              <li><a href="/cma-final" className="hover:text-primary transition-colors">CMA Final</a></li>
              <li><a href="/foundation" className="hover:text-primary transition-colors">CA Foundation</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="tel:7742554277" className="hover:text-primary transition-colors">
                  7742554277
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="mailto:info@air1ca.com" className="hover:text-primary transition-colors">
                  info@air1ca.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-gray-300">New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Agarwal Brothers Educations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
