import {CardGrid} from "@/components/CardGrid";
import {CodeXml, Disc, Droplets, FolderGit, Globe, Wifi, Wind} from "lucide-react";

export default function AboutSection() {
  return (
    <section id="aboutus" className="snap-start min-h-screen pt-16 overflow-y-auto bg-cover bg-center bg-no-repeat md:bg-[url(../assets/wallpaper_2.jpg)] bg-[url(../assets/phone_2.jpg)]">
        <div className="flex items-center justify-center w-full">
            <div className="pt-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2.5 mx-2 items-stretch">
                <CardGrid title="What Can I Offer for you">
                    <p>“Today you boot up with fresh potential, tomorrow you auto-update into a stronger version of yourself, and forever you run as an infinite system that never stops scaling.”</p>
                </CardGrid>
                <CardGrid
                    title="Building Websites 101"
                    descriptionIcons={[<CodeXml size={45}/>, <Globe size={45}/>, <Wifi size={45}/>]}>
                    <p>“Building your first website? Relax — the internet isn’t as scary as it looks. Skip the chaos and start here.”</p>
                </CardGrid>
                <CardGrid
                    title="The Work Showcase"
                    descriptionIcons={[<Wind size={45}/>, <FolderGit size={45}/>, <Droplets size={45}/>]}>
                    <p>“Curious about my previous builds? Dive into the Project Dashboard and explore what I’ve made.”</p>
                </CardGrid>
                <CardGrid
                    title="Create Addons & Experimental Builds"
                    href="https://github.com/KanasakiTechnologics/Create-Assembly-Recipes.git">
                    <p>“Need Addons without the cheesy vibes? Explore my GitHub for every Create-Mod addon I’ve built — plus a few experimental projects fresh from the lab.”</p>
                </CardGrid>
                <CardGrid
                    title="Tune In & Unwind"
                    href="/media"
                    openInNewTab
                    descriptionIcons={[<Disc size={45} />]}>
                    <p>“Bored? Hit play and vibe — my curated playlist is ready for your sing-along session.”</p>
                </CardGrid>
                <CardGrid title="What Can I Offer for you">
                    <p>“Today you boot up with fresh potential, tomorrow you auto-update into a stronger version of yourself, and forever you run as an infinite system that never stops scaling.”</p>
                </CardGrid>
            </div>
        </div>
    </section>
  );
}
