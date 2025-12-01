import { useEffect, useState } from "react";

const stats = [
  { value: 6, label: "Times", sublabel: "AIR 1" },
  { value: 52, suffix: "K+", label: "Cleared CA" },
  { value: 430, suffix: "+", label: "All India Ranks" },
  { value: 200, suffix: "K+", label: "Class Students" },
  { value: 800, suffix: "K+", label: "Books Dispatched" },
  { value: 780, suffix: "K+", label: "Online Community" },
];

const StatsSection = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timers = stats.map((stat, index) => {
      let currentStep = 0;
      return setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const currentValue = Math.floor(stat.value * progress);
        
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = currentValue;
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timers[index]);
        }
      }, interval);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <section className="bg-stats py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 animate-in fade-in zoom-in duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary">
                {counts[index]}{stat.suffix || ""}
              </div>
              {stat.label && (
                <div className="text-sm md:text-base font-semibold text-foreground">
                  {stat.label}
                </div>
              )}
              {stat.sublabel && (
                <div className="text-xs md:text-sm text-muted-foreground">
                  {stat.sublabel}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
