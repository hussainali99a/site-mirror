import { Phone, Youtube, Send, MessageCircle, Linkedin, Instagram } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-header text-white py-2 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <a href="tel:7742554277" className="text-sm hover:text-primary transition-colors">
            7742554277
          </a>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4 text-sm">
            <a href="/about" className="hover:text-primary transition-colors">About Us</a>
            <a href="/contact" className="hover:text-primary transition-colors">Contact Us</a>
          </div>
          
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-primary transition-colors" aria-label="YouTube">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="Telegram">
              <Send className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="WhatsApp">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
