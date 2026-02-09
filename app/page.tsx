import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import MediaPage from "@/components/MediaPage";

export default function page() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
        <HomeSection/>
        <AboutSection/>
        <ContactSection/>
        <MediaPage/>
    </div>
  )
}
