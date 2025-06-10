
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import ProductCarousel from '@/components/ProductCarousel';
import MedicineCategories from '@/components/MedicineCategories';
import MedicinesDisplay from '@/components/MedicinesDisplay';
import MedicineRequestForm from '@/components/MedicineRequestForm';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />
      <ProductCarousel />
      <MedicineCategories />
      <MedicinesDisplay />
      <MedicineRequestForm />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
