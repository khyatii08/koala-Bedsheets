import React, { useRef } from "react";
import Signup from "./signup";
import { ChevronLeft, ChevronRight } from "lucide-react";
function KoalaShowroom() {
    const showroomImages = [
        {
            image: "https://au.koala.com/cdn/shop/files/CAROUSEL_01.jpg?v=1764199227&width=360",
            title: "Get some face time that isn’t on screen",
        },
        {
            image: "https://au.koala.com/cdn/shop/files/CAROUSEL_02.jpg?v=1764199227&width=360",
            title: "Feel it for real: zip in and sink into softness",
        },
        {
            image: "https://au.koala.com/cdn/shop/files/CAROUSEL_03.jpg?v=1764199227&width=360",
            title: "Get hands on with fabric touch tests",
        },
        {
            image: "https://au.koala.com/cdn/shop/files/CAROUSEL_04.jpg?v=1764199227&width=360",
            title: "See the smarts behind our design",
        },
    ];
    const scrollRef = useRef(null);

    const products = [
        {
            name: "Paddo Sofa Bed",
            type: "Sofa Bed",
            price: "$3,090",
            image: "https://au.koala.com/cdn/shop/files/1200x758_1-_Tile_1_cb73a81b-c2d9-4b32-94f4-30fedce42183.jpg?v=1727394365&width=748"
        },
        {
            name: "Tamarama Modular Sofa",
            type: "Modular Sofa",
            price: "$4,100",
            image: "https://au.koala.com/cdn/shop/files/1200x758_BCorp_Tile_2_b4255088-aca9-4b46-927a-c904f81df535.jpg?v=1727394365&width=748"
        },
        {
            name: "Modern Sofa",
            type: "3 Seater",
            price: "$2,990",
            image: "https://au.koala.com/cdn/shop/files/about_us_koala_wwf_1.png?v=1732583871&width=748"
        },
        {
            name: "Koala Sofa Bed",
            type: "Sofa Bed",
            price: "$2,590",
            image: "https://au.koala.com/cdn/shop/files/1200x758_KSH_Tile_4.jpg?v=1727394365&width=748"
        },
        {
            name: "Paddo Armchair",
            type: "Armchair",
            price: "$1,490",
            image: "https://au.koala.com/cdn/shop/files/1200x758_FSC_Tile_5_a5fb08ae-376d-4396-acc9-db13e6c0df20.jpg?v=1727394365&width=748"
        },
        {
            name: "Koala Living Sofa",
            type: "2 Seater",
            price: "$2,290",
            image: "https://au.koala.com/cdn/shop/files/Koala_Donations_Program_v2.png?v=1744783876&width=748"
        },
        {
            name: "Everyday Sofa",
            type: "3 Seater",
            price: "$2,890",
            image: "https://au.koala.com/cdn/shop/files/1200x758_1-_Tile_1_cb73a81b-c2d9-4b32-94f4-30fedce42183.jpg?v=1727394365&width=748"
        },
        {
            name: "Comfort Sofa",
            type: "2 Seater",
            price: "$2,490",
            image: "https://au.koala.com/cdn/shop/files/1200x758_BCorp_Tile_2_b4255088-aca9-4b46-927a-c904f81df535.jpg?v=1727394365&width=748"
        },
        {
            name: "Cloud Sofa",
            type: "3 Seater",
            price: "$3,290",
            image: "https://au.koala.com/cdn/shop/files/about_us_koala_wwf_1.png?v=1732583871&width=748"
        },
        {
            name: "Relax Sofa",
            type: "2 Seater",
            price: "$2,790",
            image: "https://au.koala.com/cdn/shop/files/1200x758_KSH_Tile_4.jpg?v=1727394365&width=748"
        },
        {
            name: "Lounge Chair",
            type: "Chair",
            price: "$990",
            image: "https://au.koala.com/cdn/shop/files/1200x758_FSC_Tile_5_a5fb08ae-376d-4396-acc9-db13e6c0df20.jpg?v=1727394365&width=748"
        },
        {
            name: "Family Sofa",
            type: "4 Seater",
            price: "$3,590",
            image: "https://au.koala.com/cdn/shop/files/Koala_Donations_Program_v2.png?v=1744783876&width=748"
        },
        {
            name: "Classic Sofa",
            type: "3 Seater",
            price: "$2,690",
            image: "https://au.koala.com/cdn/shop/files/1200x758_1-_Tile_1_cb73a81b-c2d9-4b32-94f4-30fedce42183.jpg?v=1727394365&width=748"
        },
        {
            name: "Mini Sofa",
            type: "2 Seater",
            price: "$1,990",
            image: "https://au.koala.com/cdn/shop/files/1200x758_BCorp_Tile_2_b4255088-aca9-4b46-927a-c904f81df535.jpg?v=1727394365&width=748"
        },
        {
            name: "Studio Sofa",
            type: "Sofa Bed",
            price: "$2,390",
            image: "https://au.koala.com/cdn/shop/files/about_us_koala_wwf_1.png?v=1732583871&width=748"
        },
        {
            name: "Premium Sofa",
            type: "3 Seater",
            price: "$3,490",
            image: "https://au.koala.com/cdn/shop/files/1200x758_KSH_Tile_4.jpg?v=1727394365&width=748"
        },
        {
            name: "Cozy Armchair",
            type: "Armchair",
            price: "$1,290",
            image: "https://au.koala.com/cdn/shop/files/1200x758_FSC_Tile_5_a5fb08ae-376d-4396-acc9-db13e6c0df20.jpg?v=1727394365&width=748"
        },
        {
            name: "Modular Lounge",
            type: "Modular Sofa",
            price: "$3,990",
            image: "https://au.koala.com/cdn/shop/files/Koala_Donations_Program_v2.png?v=1744783876&width=748"
        }
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -700 : 700,
                behavior: "smooth"
            });
        }
    };


    return (
        <div className="min-h-screen bg-[#f5f6f3] text-[#171717]" >
            <section className="relative h-[300px] w-full overflow-hidden sm:h-[380px] md:h-[470px]">
                <img
                    src="https://au.koala.com/cdn/shop/files/BANNER.jpg?v=1764199099&width=1500"
                    alt="Koala Showroom Moore Park"
                    className="h-full w-full object-cover"
                />
            </section>

            <section className="mx-auto max-w-[1300px] px-5 py-10 md:py-12">
                <p className="mb-2 text-xs text-gray-600">
                    Feel it for real at Supa Centre, Moore Park in Sydney.
                </p>

                <h2 className="mb-7 text-3xl font-semibold sm:text-4xl">
                    See what we have in store
                </h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {showroomImages.map((item, index) => (
                        <div key={index} className="min-w-0">
                            <div className="h-[225px] overflow-hidden rounded-lg">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <h3 className="mt-3 text-sm font-semibold leading-5 text-black">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>

            </section>
            <section className="mx-auto max-w-[1300px] px-5 py-10 md:py-12">
                <div className="w-full overflow-hidden rounded-lg">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                        className="block h-auto w-full object-cover"
                    >
                        <source
                            src="https://au.koala.com/cdn/shop/videos/c/vp/9621506a21f144778e9d33a35cee8f4e/9621506a21f144778e9d33a35cee8f4e.HD-720p-2.1Mbps-63905223.mp4?v=0"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>


            <section className="mx-auto max-w-[1100px] px-5 py-8 text-center" >
                <p className="mb-3 text-sm text-gray-600">
                    You've seen us online. Schedule your visit.
                    Maybe even order a coffee.
                </p>

                <p className="mb-3 text-sm leading-6 text-gray-600">
                    Buy your couch, test your mattress, nap on our Koala Showroom.
                    <br />
                    Experience our products in person and find the perfect comfort
                    for your home.
                </p>

                <p className="text-sm leading-6 text-gray-600">
                    See it online, see it for real. That's the whole vibe of comfort.
                </p>
            </section >

            <section className="px-5 py-12 md:px-10 bg-white">

                <p className="mb-2 text-sm font-medium text-gray-500">
                    Koala Showroom
                </p>

                <div className="mb-7 flex items-center justify-between">
                    <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
                        On display now in store
                    </h2>

                    <div className="hidden gap-3 md:flex">
                        <button
                            onClick={() => scroll("left")}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
                        >
                            <ChevronLeft size={22} />
                        </button>

                        <button
                            onClick={() => scroll("right")}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
                        >
                            <ChevronRight size={22} />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory pb-5"
                >
                    <div className="flex w-max flex-nowrap gap-4">

                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="w-[280px] shrink-0 snap-start md:w-[320px]"
                            >

                                <div className="h-[250px] overflow-hidden rounded-xl bg-gray-100">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                <h3 className="mt-3 text-sm font-semibold text-gray-900">
                                    {product.name}
                                </h3>

                                <p className="mt-1 text-xs text-gray-500">
                                    {product.type}
                                </p>

                                <p className="mt-2 text-sm font-semibold text-gray-900">
                                    From {product.price}
                                </p>

                            </div>
                        ))}

                    </div>
                </div>

            </section>


            <section className="mx-auto mt-20 grid w-full max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">

                    <div className="group flex min-h-64 flex-col items-center justify-center rounded-2xl bg-[#ebede8] px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                    <img
                        src="https://au.koala.com/cdn/shop/files/Icon-Outline-truck_1_de6a4619-1808-460d-b0d6-6af40d94c277.svg?v=1729405838"
                        alt="Store details"
                        className="mb-6 h-11 w-11 object-contain"
                    />

                    <h3 className="text-lg font-semibold text-gray-900">
                        Store details
                    </h3>

                    <p className="mt-3 max-w-xs text-sm leading-6 text-gray-600">
                        Supa Centa Moore Park,
                        Shop GF08 Moore Park, 2a Todman Ave,
                        Kensington NSW 2033
                    </p>

                </div>
                <div className="group flex min-h-64 flex-col items-center justify-center rounded-2xl bg-[#ebede8] px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                    <img
                        src="https://au.koala.com/cdn/shop/files/email.png?v=1727058156"
                        alt="Email"
                        className="mb-6 h-11 w-11 object-contain"
                    />

                    <h3 className="text-lg font-semibold text-gray-900">
                        Send an enquiry
                    </h3>

                    <a
                        href="mailto:moorepark@koala.com"
                        className="mt-3 text-sm text-gray-600 transition-colors hover:text-black hover:underline"
                    >
                        moorepark@koala.com
                    </a>

                </div>

                <div className="group flex min-h-64 flex-col items-center justify-center rounded-2xl bg-[#ebede8] px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                    <img
                        src="https://au.koala.com/cdn/shop/files/chat.svg?v=1764199602"
                        alt="Chat"
                        className="mb-6 h-11 w-11 object-contain"
                    />

                    <h3 className="text-lg font-semibold text-gray-900">
                        Have a chat
                    </h3>

                    <a
                        href="tel:1800575337"
                        className="mt-3 text-sm text-gray-600 transition-colors hover:text-black hover:underline"
                    >
                        1800 575 337
                    </a>

                </div>

            </section>


            <section className="grid min-h-[480px] items-center gap-10 md:grid-cols-2 mt-10 ml-10 mr-10">
                <div className="py-10 ml-20">
                    <h1 className="max-w-xl text-5xl font-semibold leading-tight md:text-5xl">
                        Get up close and comfortable
                    </h1>

                    <p className="mt-5 max-w-lg text-base leading-7 text-gray-600">
                        Step inside and finally experience Koala in real life. It’s everything you’ve seen behind a screen, the sofas, the sofa beds, the mattresses, the colours, the fabrics and finishes, but now you can get up close and comfortable.                 </p>
                    <p className="mt-5 max-w-lg text-base leading-7 text-gray-600">Seriously, sit, flop, stretch out, even have a quick nap (we won’t make it weird, we promise).
                        Take your time, feel the comfort, and chat to our team for personalised advice.
                        Love what you try? Order it on the spot and still get to enjoy your full 120-night trial. Not quite right,
                        we’ll happily take it back.  </p>
                </div>

                <div>
                    <img
                        src="https://au.koala.com/cdn/shop/files/CARD_01.jpg?v=1764200067&width=1496"
                        alt=""
                        className="rounded-3xl"
                    />

                </div>
            </section>

            <section className="grid min-h-[480px] items-center gap-10 md:grid-cols-2 mt-10 ml-10 mr-10">
                <div>
                    <img
                        src="https://au.koala.com/cdn/shop/files/CARD_02.jpg?v=1764200066&width=1496"
                        alt=""
                        className="rounded-3xl"
                    />

                </div>

                <div className="py-10 ml-20">
                    <h1 className="max-w-xl text-5xl font-semibold leading-tight md:text-5xl">
                        Explore our innovation
                    </h1>

                    <p className="mt-5 max-w-lg text-base leading-7 text-gray-600">
                        While you’re sitting (or after your snooze) you can explore the innovative detail that makes Koala, well… Koala. From the comfort smarts you’ll find in our sofas and mattresses to the smart design that makes Koala easy to use and better to live with, it’s one thing to see it, it’s another to feel it for real.
                    </p>

                </div>
            </section>

            <section className="px-5 py-10 md:px-10">
                <p className="mb-2 text-sm font-medium text-gray-600">
                    Why Koala
                </p>

                <h1 className="mb-7 text-3xl font-semibold leading-tight text-gray-900 md:text-5xl">
                    For a cosy home, and a healthy planet.
                </h1>


                <div className="flex w-max flex-nowrap gap-5">

                    <div className="w-[500px]  md:w-[400px]">
                        <div className="h-[300px] overflow-hidden rounded-xs">
                            <img
                                src="https://au.koala.com/cdn/shop/files/Image_Placeholder_3-v2.jpg?v=1772766572&width=2500"
                                alt="1% for the Planet"
                                className="h-full w-full "
                            />
                        </div>
                        <h3 className="mt-2 text-xs font-bold text-gray-900">
                            Koala sleeping on a tree with green leaves, overlayed with a "Keep It Wild Koala" emblem in white.
                            Help us save the koala from extinction
                        </h3>
                        <p className="mt-1 text-xs leading-snug text-gray-600">
                            Your order helps us support koala and wildlife conservation efforts across Australia. To date, we have donated over $4.9 million towards these efforts.
                        </p>
                    </div>

                    <div className="w-[450px]  md:w-[400px]">
                        <div className="h-[300px] overflow-hidden rounded-xs">
                            <img
                                src="https://au.koala.com/cdn/shop/files/Image_Placeholder_3-1.jpg?v=1726643084&width=2500"
                                alt="1% for the Planet"
                                className="h-full w-full "
                            />
                        </div>
                        <h3 className="mt-2 text-xs font-bold text-gray-900">
                            Giving back to people and planet
                        </h3>
                        <p className="mt-1 text-xs leading-snug text-gray-600">
                            To date we have donated over $23 million in cash and product donations, which includes $10 million as part of our 1% for the Planet commitment  </p>
                    </div>

                    <div className="w-[500px]  md:w-[400px]">
                        <div className="h-[300px] overflow-hidden rounded-xs">
                            <img
                                src="https://au.koala.com/cdn/shop/files/Image_Placeholder_4.jpg?v=1726643084&width=748"
                                alt="1% for the Planet"
                                className="h-full w-full "
                            />
                        </div>
                        <h3 className="mt-2 text-xs font-bold text-gray-900">
                            We’re a Certified B Corporation
                        </h3>
                        <p className="mt-1 text-xs leading-snug text-gray-600">
                            We meet the highest standards for social and environmental impact so you can feel good choosing us.     </p>
                    </div>
                </div> </section>
            <Signup />




        </div >
    );
}

export default KoalaShowroom;