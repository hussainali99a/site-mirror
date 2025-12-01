-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create course categories table
CREATE TABLE public.course_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.course_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view categories"
  ON public.course_categories FOR SELECT
  USING (true);

-- Create courses table
CREATE TABLE public.courses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  category_id UUID REFERENCES public.course_categories(id),
  price DECIMAL(10,2) NOT NULL,
  original_price DECIMAL(10,2),
  duration TEXT,
  level TEXT,
  image_url TEXT,
  features TEXT[],
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view courses"
  ON public.courses FOR SELECT
  USING (true);

-- Create profiles table for user data
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT,
  phone TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- Create function to handle new user profiles
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', '')
  );
  RETURN NEW;
END;
$$;

-- Trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Create enrollments table
CREATE TABLE public.enrollments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE NOT NULL,
  enrolled_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'active',
  UNIQUE(user_id, course_id)
);

ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own enrollments"
  ON public.enrollments FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own enrollments"
  ON public.enrollments FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Create testimonials table
CREATE TABLE public.testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_name TEXT NOT NULL,
  course_name TEXT,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  review TEXT NOT NULL,
  image_url TEXT,
  achievement TEXT,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view testimonials"
  ON public.testimonials FOR SELECT
  USING (true);

-- Create contact submissions table
CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create contact submissions"
  ON public.contact_submissions FOR INSERT
  WITH CHECK (true);

-- Insert sample categories
INSERT INTO public.course_categories (name, slug, description) VALUES
  ('CA Foundation', 'ca-foundation', 'Foundation level courses for CA aspirants'),
  ('CA Intermediate', 'ca-intermediate', 'Intermediate level CA courses'),
  ('CA Final', 'ca-final', 'Final level CA courses'),
  ('Test Series', 'test-series', 'Mock tests and practice series');

-- Insert sample courses
INSERT INTO public.courses (title, description, category_id, price, original_price, duration, level, features, is_featured) VALUES
  (
    'CA Foundation Complete Course',
    'Comprehensive foundation course covering all subjects with detailed lectures and practice materials',
    (SELECT id FROM public.course_categories WHERE slug = 'ca-foundation'),
    15999.00,
    25999.00,
    '12 months',
    'Foundation',
    ARRAY['Live Classes', 'Recorded Lectures', 'Study Material', 'Test Series', 'Doubt Solving'],
    true
  ),
  (
    'CA Intermediate Group 1',
    'Complete preparation for CA Intermediate Group 1 with expert faculty',
    (SELECT id FROM public.course_categories WHERE slug = 'ca-intermediate'),
    24999.00,
    35999.00,
    '18 months',
    'Intermediate',
    ARRAY['Live Classes', 'Study Material', 'Mock Tests', '24x7 Support'],
    true
  ),
  (
    'CA Final Direct Tax',
    'In-depth coverage of Direct Tax for CA Final with practical cases',
    (SELECT id FROM public.course_categories WHERE slug = 'ca-final'),
    18999.00,
    28999.00,
    '8 months',
    'Final',
    ARRAY['Expert Faculty', 'Case Studies', 'Regular Updates', 'Practice Questions'],
    false
  );

-- Insert sample testimonials
INSERT INTO public.testimonials (student_name, course_name, rating, review, achievement, is_featured) VALUES
  (
    'Rajesh Kumar',
    'CA Foundation',
    5,
    'Excellent teaching methodology and study material. Cleared CA Foundation in first attempt with great marks!',
    'AIR 45 in CA Foundation',
    true
  ),
  (
    'Priya Sharma',
    'CA Intermediate',
    5,
    'The faculty is amazing and the doubt-solving sessions were very helpful. Highly recommend!',
    'Cleared both groups together',
    true
  );