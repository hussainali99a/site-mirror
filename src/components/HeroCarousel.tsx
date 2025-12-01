import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: heroBanner,
      title: "Just surrender unto ME,",
      subtitle: "I will deliver you!",
      reference: "Krishna BG 18 (66)"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-gradient-to-r from-primary/10 to-primary/5">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="grid md:grid-cols-2 gap-8 items-center w-full">
              <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                    Best Place to
                  </h1>
                  <h2 className="text-5xl md:text-7xl font-bold">
                    <span className="text-foreground">Ace Your</span>{" "}
                    <span className="text-primary">CA</span>
                  </h2>
                  <p className="text-xl md:text-2xl text-muted-foreground italic">
                    "{slide.title}"
                  </p>
                  <p className="text-xl md:text-2xl text-muted-foreground italic">
                    {slide.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground">- {slide.reference}</p>
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg">
                  Get Started
                </Button>
              </div>
              
              <div className="relative h-[400px] md:h-[500px] animate-in fade-in slide-in-from-right duration-700">
                <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3"></div>
                <img
                  src={slide.image}
                  alt="Hero Banner"
                  className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>
    </div>
  );
};

export default HeroCarousel;
