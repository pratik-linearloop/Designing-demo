import Community from "../components/homeComponents/communityFeatures";
import GetDemo from "../components/homeComponents/DemoCallToAction";
import BusinessSection from "../components/homeComponents/BusinessSection";
import Marketing from "../components/homeComponents/marketing";
import ClientSection from "../components/homeComponents/clientSection";
import PixelGradeSection from "../components/homeComponents/pixelGradeSection";
import SiteFooter from "../components/homeComponents/siteFooter";
import HeroCarousel from "../components/homeComponents/HeroCarousel";
import CustomerTestimonials from "../components/homeComponents/customerTestimonials";

export default function Home() {
  return (
    <>
      <HeroCarousel/>
      <ClientSection />
      <Community />
      <PixelGradeSection />
      <BusinessSection />
      <SiteFooter />
      <CustomerTestimonials/>
      <Marketing />
      <GetDemo />
    </>
  );
}
