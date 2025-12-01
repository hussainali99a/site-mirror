import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import courseImage from "@/assets/course-1.jpg";

interface Course {
  id: string;
  title: string;
  description: string | null;
  price: number;
  original_price: number | null;
  duration: string | null;
  level: string | null;
  image_url: string | null;
  features: string[] | null;
  is_featured: boolean | null;
}

const CoursesSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCourses(data || []);
    } catch (error: any) {
      toast({
        title: "Error loading courses",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const calculateDiscount = (price: number, originalPrice: number | null) => {
    if (!originalPrice) return null;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  const filters = ["All", "Foundation", "Intermediate", "Final"];

  if (loading) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Loading courses...</p>
        </div>
      </section>
    );
  }

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
          {courses
            .filter(course => activeFilter === "All" || course.level === activeFilter)
            .map((course) => {
              const discount = calculateDiscount(course.price, course.original_price);
              return (
                <Card
                  key={course.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative">
                    <img
                      src={course.image_url || courseImage}
                      alt={course.title}
                      className="w-full h-64 object-cover"
                    />
                    {discount && (
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {discount}% OFF
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="text-sm text-primary font-semibold">{course.level}</div>
                    <h3 className="text-xl font-bold text-foreground">{course.title}</h3>
                    {course.description && (
                      <p className="text-sm text-muted-foreground line-clamp-2">{course.description}</p>
                    )}
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-primary">₹{course.price.toLocaleString()}</span>
                      {course.original_price && (
                        <span className="text-lg text-muted-foreground line-through">
                          ₹{course.original_price.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
