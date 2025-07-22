import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TextileFeaturesSection from "@/components/home/TextileFeaturesSection";
import BOMCalculator from "@/components/home/BOMCalculator";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <BOMCalculator />
      <TextileFeaturesSection />
    </Layout>
  );
};

export default Index;