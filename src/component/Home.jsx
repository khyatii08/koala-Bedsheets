import { useState } from "react";

function Home() {
    const categories = [
        {
            name: "Living room",
            image: "https://au.koala.com/cdn/shop/files/category-living.webp?v=1782734672&width=1440",
        },
        {
            name: "Bedroom",
            image: "https://au.koala.com/cdn/shop/files/category-bedroom.webp?v=1782734691&width=1440",
        },
        {
            name: "Spare room",
            image: "https://au.koala.com/cdn/shop/files/10ad13e61626fe44f3fb6c11202e6c0871eba56f_1.jpg?v=1788500449&width=1440",
        },
        {
            name: "Outdoor",
            image: "https://au.koala.com/cdn/shop/files/category-outdoor.webp?v=1782734721&width=1440",
        },
        {
            name: "Koala & Pantone",
            image: "https://au.koala.com/cdn/shop/files/koala-x-pantone.webp?v=1783652588&width=1440",
        },
        {
            name: "Koala x Bluey",
            image: "https://au.koala.com/cdn/shop/files/category-koala-x-bluey.webp?v=1782734737&width=1440",
        },
    ];

    const nmcards = [
        {
            name: "Trial products for 120 days",
            subtitle: "Try it properly in your own home.",
            image: "https://au.koala.com/cdn/shop/files/feature-2-mobile.webp?v=1782735179&width=720",
        }, {
            name: "Washable, replaceable covers",
            subtitle: "Keep it clean and change your style.",
            image: "https://au.koala.com/cdn/shop/files/feature-1-desktop.webp?v=1782735089&width=720",
        },
        {
            name: "Kid & pet friendly",
            subtitle: "Made for real life and everyday comfort.",
            image: "//au.koala.com/cdn/shop/files/feature-3-mobile.webp?v=1782735297&width=1080",
        },
        {
            name: "Simple tool-free assembly",
            subtitle: "Easy setup without complicated tools.",
            image: "https://au.koala.com/cdn/shop/files/feature-4-desktop.webp?v=1782735400&width=720",
        },
    ];
    const [activeCard, setActiveCard] = useState(0);

    return (
        <div className="bg-[#f5f5f0] text-black">
            <section className="relative mx-2 h-[75vh] min-h-[480px] overflow-hidden rounded-t-3xl">

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source
                        src="//au.koala.com/cdn/shop/videos/c/vp/bcc243f2b40a4431819ea2477e17829d/bcc243f2b40a4431819ea2477e17829d.HD-1080p-7.2Mbps-98865187.mp4?v=0"
                        type="video/mp4"
                    />
                </video>

                <div className="absolute inset-0 bg-black/20"></div>

                <div className="absolute bottom-10 left-8 text-white md:left-12">

                    <h1 className="text-4xl font-semibold leading-tight md:text-8xl">
                        Well-rounded in every sence
                    </h1>

                    <p className="mt-4 text-xl md:text-2xl text-gray-300">
                        Torquay pairs generous,sink-in confort with plush curves and a modular design that adapts to your space.
                    </p>

                    <button className="mt-7 h-[52px] w-52 rounded-full bg-white text-base font-semibold text-gray-500 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-gray-200 hover:shadow-xl active:scale-95">
                        Shop Now
                    </button>

                </div>
            </section>
            <section className="bg-[#f5f6f3] px-6 py-14 md:px-12">

                <h2 className="mb-8 text-center text-3xl font-semibold md:text-4xl">
                    Furniture loved by millions around the world
                </h2>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

                    {categories.map((item) => (
                        <div
                            key={item.name}
                            className="group relative h-64 overflow-hidden rounded-3xl"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                }}
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                            <h3 className="absolute bottom-5 left-4 text-lg font-semibold text-white">
                                {item.name}
                            </h3>

                        </div>
                    ))}

                </div>
            </section>


            <section className="relative mx-2 mt-2 h-[85vh] min-h-[520px] overflow-hidden rounded-3xl">

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source
                        src="//au.koala.com/cdn/shop/videos/c/vp/89cb37935fab4751bb3c543bb099ad55/89cb37935fab4751bb3c543bb099ad55.HD-720p-4.5Mbps-96501959.mp4?v=0"
                        type="video/mp4"
                    />
                </video>

                <div className="absolute inset-0 bg-black/20"></div>

                <div className="absolute bottom-10 left-8 text-white md:left-12">

                    <h2 className="max-w-none whitespace-nowrap text-4xl font-semibold leading-tight md:text-6xl">
                        Innovators of the modern sofa bed
                    </h2>

                    <p className="mt-4 max-w-md text-sm md:text-base">
                        Effortlessly flip from sofa to bed in seconds with
                        our innovative FlipBed™ design.
                    </p>

                    <button className="mt-7 w-56 rounded-full bg-white px-10 py-4 text-base font-semibold text-gray-500 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-gray-200 hover:shadow-xl active:scale-95">
                        Explore Sofa Beds
                    </button>

                </div>
            </section>
            <section className="bg-[#f5f5f0] px-6 py-14 md:px-12">

                <h2 className="mb-8 text-center text-3xl font-semibold leading-tight md:text-4xl lg:text-4xl">
                    Forward-thinking designs, rewriting the rules for modern homes
                </h2>


                <div className="flex h-[500px] gap-4 md:h-[520px]">

                    {nmcards.map((item, index) => (
                        <div
                            key={item.name}
                            onClick={() => setActiveCard(index)}
                            className={`group relative min-w-0 cursor-pointer overflow-hidden rounded-2xl transition-all duration-700 ${activeCard === index ? "flex-[3]" : "flex-[1]"
                                }`}
                        >

                            <img
                                src={item.image.startsWith("//") ? `https:${item.image}` : item.image}
                                alt={item.name}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 p-4 text-white md:p-6">

                                <h3 className="text-lg font-semibold leading-tight md:text-2xl">
                                    {item.name}
                                </h3>

                                {activeCard === index && (
                                    <p className="mt-3 text-sm text-white/90">
                                        {item.subtitle}
                                    </p>
                                )}

                            </div>

                        </div>
                    ))}

                </div>
            </section>
            <section className="relative mx-2 mt-2 h-[85vh] min-h-[520px] overflow-hidden rounded-3xl">

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source
                        src="https://au.koala.com/cdn/shop/videos/c/vp/e2afc05c3a9b45d69d868c25fcfaf255/e2afc05c3a9b45d69d868c25fcfaf255.HD-720p-2.1Mbps-66638761.mp4?v=0"
                        type="video/mp4"
                    />
                </video>

                <div className="absolute inset-0 bg-black/20"></div>

                <div className="absolute bottom-10 left-8 text-white md:left-12">

                    <h2 className="max-w-none whitespace-nowrap text-4xl font-semibold leading-tight md:text-6xl">
                        Innovators of the modern sofa bed
                    </h2>

                    <p className="mt-4 max-w-md text-sm md:text-base">
                        Effortlessly flip from sofa to bed in seconds with
                        our innovative FlipBed™ design.
                    </p>

                    <button className="mt-7 w-56 rounded-full bg-white px-10 py-4 text-base font-semibold text-gray-500 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-gray-200 hover:shadow-xl active:scale-95">
                        Explore Sofa Beds
                    </button>

                </div>
            </section>



            <section className="bg-[#f5f5f0] px-3 py-12">
                <div className="rounded-[28px] bg-[#6d705b] px-6 py-12 text-white md:px-11 md:py-14">

                    <h2 className="mb-7 text-3xl font-semibold tracking-tight md:text-4xl">
                        Cosy home, and a healthy planet
                    </h2>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                        <div className="group relative h-[310px] overflow-hidden rounded-[28px]">
                            <img
                                src="https://au.koala.com/cdn/shop/files/koala_43b9447c-1416-4e17-8db3-7b7c52998d74.png?v=1778481713&width=1920"
                                alt="Koala in nature"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            <h3 className="absolute bottom-7 left-6 right-5 text-2xl font-semibold leading-tight">
                                Help us save the koala from extinction
                            </h3>
                        </div>

                        <div className="group relative h-[310px] overflow-hidden rounded-[28px]">
                            <img
                                src="https://au.koala.com/cdn/shop/files/for-the-planet.png?v=1778481750&width=1920"
                                alt="Sunlight over mountains"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            <h3 className="absolute bottom-7 left-6 right-5 text-2xl font-semibold leading-tight">
                                Proud members of 1% For The Planet
                            </h3>
                        </div>

                        <div className="group relative h-[310px] overflow-hidden rounded-[28px]">
                            <img
                                src="https://au.koala.com/cdn/shop/files/b-corp.png?v=1778481792&width=1920"
                                alt="Green forest"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            <h3 className="absolute bottom-7 left-6 right-5 text-2xl font-semibold leading-tight">
                                We're a Certified B Corporation
                            </h3>
                        </div>

                    </div>
                </div>
            </section>

        </div >
    );
}

export default Home;
