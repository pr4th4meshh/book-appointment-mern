"use client"
import AboutSection from "@/components/landing-sections/about"
import ArticlesSection from "@/components/landing-sections/articles"
import BookAppointmentSection from "@/components/landing-sections/book-appointment"
import HeroSection from "@/components/landing-sections/hero"
import TestimonialsSection from "@/components/landing-sections/testimonials"

export default function Home() {
  return (
    <>
      {/*Landing Page */}
      <HeroSection />
      <AboutSection />
      <BookAppointmentSection />
      <TestimonialsSection />
      <ArticlesSection />
    </>
  )
}
