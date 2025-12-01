import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import courseImage from "@/assets/course-1.jpg";

const courses = [
  {
    id: 1,
    title: "BOTH GROUP Sure Success Combo",
    category: "CA Final",
    discount: "Extra ₹ 3000 Off",
    originalPrice: "₹ 45,000",
    discountedPrice: "₹ 38,000",
    image: courseImage,
  },
  {
    id: 2,
    title: "GROUP 1 Complete Course",
    category: "CA Final",
    discount: "Extra ₹ 2000 Off",
    originalPrice: "₹ 28,000",
    discountedPrice: "₹ 23,000",
    image: courseImage,
  },
  {
    id: 3,
    title: "GROUP 2 Complete Course",
    category: "CA Inter",
    discount: "Extra ₹ 2000 Off",
    originalPrice: "₹ 25,000",
    discountedPrice: "₹ 20,000",
    image: courseImage,
  },
];

const CoursesSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "CA Final", "CMA Final", "CA Inter"];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Explore Our Courses
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter ? "bg-primary hover:bg-primary/90" : ""}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {course.discount}
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="text-sm text-primary font-semibold">{course.category}</div>
                <h3 className="text-xl font-bold text-foreground">{course.title}</h3>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-primary">{course.discountedPrice}</span>
                  <span className="text-lg text-muted-foreground line-through">{course.originalPrice}</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
