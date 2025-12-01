import { Button } from "@/components/ui/button";
import foundersImage from "@/assets/founders.jpg";

const JourneySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Journey
          </h2>
          <div className="w-24 h-1 bg-primary"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              <span className="font-bold text-primary">Agarwal Brothers</span> made history by securing{" "}
              <span className="font-bold">AIR 1 in the CA</span> Final exams, setting remarkable milestones
              at the young age of 21. Their excellence in academics was evident from the beginning, as they were
              also rank holders in CA Foundation and CA Inter.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              <span className="font-bold">CA Atul Agarwal</span>, a Gold Medalist in Audit, DT and Costing, achieved an outstanding score of 618 marks
              (77.25%) in the CA Final. Following in his footsteps, <span className="font-bold">CA Ajay Agarwal</span> topped the May 2019 CA Final with
              a record-breaking 653 marks (82%), ever highest in ICAI's history till date. He was also a Gold Medalist
              and demonstrated exceptional proficiency in Advanced Auditing, Direct Tax, and International Taxation.
            </p>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              About Us
            </Button>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl transform -rotate-3"></div>
            <img
              src={foundersImage}
              alt="Agarwal Brothers - CA Toppers"
              className="relative z-10 w-full rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl z-20">
              <div className="text-3xl font-bold">AIR 1</div>
              <div className="text-sm">CA Final</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
