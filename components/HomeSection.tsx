
export default function HomeSection() {
    return (
        <section id="home" className="snap-start h-screen bg-cover bg-center bg-no-repeat md:bg-[url(../assets/wallpaper_1.jpg)] bg-[url(../assets/phone_1.jpg)]">
                <div className="flex flex-col h-full items-center justify-center text-center ">
                    <h1 className="text-5xl md:text-[80px] font-bebas p-1 text-softwhite text-shadow-cas1">Territory Build Rearise</h1>
                    <p className="md:text-xl text-lg font-barlowc p-1 text-gray-200 text-shadow-palelavender">From HTTPS. CSS. JS. TailwindCSS.</p>
                    <p className="md:text-xl text-lg font-barlowc p-1 text-gray-200 text-shadow-palelavender">Upgrade into Nextjs. Tailwindcss. Motion.</p>
                </div>
        </section>
    );

}