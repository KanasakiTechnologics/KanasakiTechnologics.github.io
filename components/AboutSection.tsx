import {CardGrid} from "@/components/CardGrid";

export default function AboutSection() {
  return (
    <section id="aboutus" className="min-h-screen pt-16 bg-cover bg-center bg-no-repeat bg-[url(../assets/wallpaper_2.jpg)]">
        <div className="flex items-center justify-center w-full h-full">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 mx-2">
                <CardGrid title="What Can I Offer for you">
                    <p>“Today you boot up with fresh potential, tomorrow you auto-update into a stronger version of yourself, and forever you run as an infinite system that never stops scaling.”</p>
                </CardGrid>
                <CardGrid title="What Can I Offer for you">
                    <p>“Today you boot up with fresh potential, tomorrow you auto-update into a stronger version of yourself, and forever you run as an infinite system that never stops scaling.”</p>
                </CardGrid>
                <CardGrid title="What Can I Offer for you">
                    <p>“Today you boot up with fresh potential, tomorrow you auto-update into a stronger version of yourself, and forever you run as an infinite system that never stops scaling.”</p>
                </CardGrid>
                <CardGrid title="What Can I Offer for you">
                    <p>“Today you boot up with fresh potential, tomorrow you auto-update into a stronger version of yourself, and forever you run as an infinite system that never stops scaling.”</p>
                </CardGrid>
                <CardGrid title="What Can I Offer for you">
                    <p>“Today you boot up with fresh potential, tomorrow you auto-update into a stronger version of yourself, and forever you run as an infinite system that never stops scaling.”</p>
                </CardGrid>
                <CardGrid title="What Can I Offer for you">
                    <p>“Today you boot up with fresh potential, tomorrow you auto-update into a stronger version of yourself, and forever you run as an infinite system that never stops scaling.”</p>
                </CardGrid>
            </div>
        </div>
    </section>
  );
}
