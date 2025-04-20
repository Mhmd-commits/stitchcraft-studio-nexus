
import MainLayout from "@/components/layout/MainLayout";
import HeroSlider from "@/components/home/HeroSlider";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import CustomizeSection from "@/components/home/CustomizeSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import CTASection from "@/components/home/CTASection";
import NewsletterSection from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <MainLayout>
      <HeroSlider />
      <FeaturedCollections />
      <CustomizeSection />
      <TestimonialSection />
      <CTASection />
      <NewsletterSection />
    </MainLayout>
  );
};

export default Index;
