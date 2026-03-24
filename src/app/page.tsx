"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ProductStack from "@/components/product-stack";
import CoachM8Showcase from "@/components/coach-m8-showcase";
import HowItWorks from "@/components/how-it-works";
import ComingSoon from "@/components/coming-soon";
import SocialProof from "@/components/social-proof";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />
      <Hero />
      <ProductStack />
      <CoachM8Showcase />
      <HowItWorks />
      <ComingSoon />
      <SocialProof />
      <ContactForm />
      <Footer />
    </main>
  );
}
