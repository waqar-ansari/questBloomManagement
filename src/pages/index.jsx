import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Blogs from "@/components/homes/home-1/Blogs";
import Brands from "@/components/homes/home-1/Brands";
import CaseStudies from "@/components/homes/home-1/CaseStudies";
import Contact from "@/components/common/Contact";
import Faqs from "@/components/common/Faqs";
import Hero from "@/components/homes/home-1/Hero";
import Process from "@/components/homes/home-1/Process";
import Services from "@/components/common/Services";
import Testimonials from "@/components/common/Testimonials";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Quest Management Services",
  description: "Quest Management Services",
};
export default function HomePage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />

      <Hero />
      <div className="main-content style-1 position-relative z-5">
        <Brands />
        <Services />
        <Process />
        {/* <CaseStudies /> */}
        {/* <Testimonials /> */}
        <Blogs />
        <Faqs />
        <Contact />
      </div>
      <Footer1 />
    </>
  );
}
