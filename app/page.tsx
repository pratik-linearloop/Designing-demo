import BannerSlider from "./_components/homeComponents/bannerSlider";
import Community from "./_components/homeComponents/community";
import Customers from "./_components/homeComponents/customers";
import GetDemo from "./_components/homeComponents/getDemo";
import HelpingBusiness from "./_components/homeComponents/helpingBusiness";
import Marketing from "./_components/homeComponents/marketing";
import OurClients from "./_components/homeComponents/ourClients";
import PixelGrade from "./_components/homeComponents/pixelGrade";
import SiteFooter from "./_components/homeComponents/siteFooter";

export default function Home() {
  return (
    <>
      <BannerSlider />
      <OurClients />
      <Community />
      <PixelGrade />
      <HelpingBusiness />
      <SiteFooter />
      <Customers />
      <Marketing />
      <GetDemo />
    </>
  );
}
