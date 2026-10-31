
import React from "react";
import Signup from "./signup"

function Aboutus() {
    return (
        <div className=" text-black">
            <section className="group relative w-full h-full ">

                <img
                    src="https://au.koala.com/cdn/shop/files/AboutUs-Hero-02.png?v=1742533703&width=1500"
                    alt="Koala furniture"
                    className=""
                />
                <div className="absolute inset-0 bg-black/20"></div>


                <div className="absolute bottom-10 left-8 z-10 text-white md:left-12">
                    <h1 className="max-w-5xl text-4xl font-bold leading-tight md:text-7xl">
                        Innovating furniture for generations to come
                    </h1>

                    <p className="mt-4 max-w-3xl text-xl text-gray-200 md:text-xl">
                        Beautiful, flexible and sustainable products for the
                        changing needs of modern life
                    </p>
                </div>

            </section>
            <div className="ml-10 mr-10">
                <section className="mt-10">
                    <div>

                        <h2 className="text-black text-center p-5 text-4xl font-semibold">Celebrating 10 years of innovation</h2>

                        <p className="text-center p-3 text-lg text-gray-600">At the Treehouse in Sydney, Australia, the Global R&D Team at Koala have been busy marsupials. For a <br />decade they have been perfecting their approach to furniture design, creating beautiful, flexible and <br /> sustainable products that solve the needs of real people.</p>
                    </div>
                </section>

                <section className="grid min-h-[480px] items-center gap-10 md:grid-cols-2">

                    <div className="py-10 ml-10 mr-10">
                        <h1 className="max-w-xl text-4xl font-semibold leading-tight md:text-5xl">
                            In-house innovation
                        </h1>

                        <p className="mt-5 max-w-lg text-base leading-6 text-gray-600">
                            We design our products from the ground up, innovating to address real customer needs and redefining entire product categories. Our product design process starts with a problem or customer pain point, then with the customer's perspective at the forefront, we smash our brains together to discover novel, innovative solutions which balance form, functionality and sustainability. With an average of 1.5 years devoted to the design and development of each product, we ensure it's flawless when it reaches your home.
                        </p>
                    </div>

                    <div>
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="rounded-3xl"
                        >
                            <source
                                src="//au.koala.com/cdn/shop/videos/c/vp/c5b8b65f43ca49968b7194483b4a63df/c5b8b65f43ca49968b7194483b4a63df.SD-480p-1.5Mbps-44560347.mp4?v=0"
                                type="video/mp4"
                            />
                        </video>
                    </div>

                </section>

                <section className="grid min-h-[480px] items-center gap-10 md:grid-cols-2">

                    <div>
                        <img
                            src="https://au.koala.com/cdn/shop/files/Bangalow_Tool_Free_Stress_Free_USP_3_84c24869-6768-4f18-8282-ed990b0b9a53.jpg?v=1742530195&width=1496"
                            alt=""
                            className="rounded-4xl"
                        />

                    </div>

                    <div className="py-10 ml-20">
                        <h1 className="max-w-xl text-4xl font-semibold leading-tight md:text-5xl">
                            Engineered to move with the speed of life
                        </h1>

                        <p className="mt-5 max-w-lg text-base leading-7 text-gray-600">
                            Our modular, knockdown designs improve shipping efficiency and allow repeatable reassembly, addressing a key shortfall of traditional furniture.
                        </p>
                        <p className="mt-5 max-w-lg text-base leading-7 text-gray-600">We’re committed to producing products that contribute to a circular economy, with longevity, movability and replaceability baked into the design process. No matter where or how many times our customers move home, they will always be able to come home to their comfy Koala furniture.
                        </p>
                    </div>
                </section>


                <section className="grid min-h-[480px] items-center gap-10 md:grid-cols-2">

                    <div className="py-10 ml-10 mr-10">
                        <h1 className="max-w-xl text-4xl font-semibold leading-tight md:text-5xl">
                            Designed for real-life
                        </h1>

                        <p className="mt-5 max-w-lg text-base leading-6 text-gray-600">
                            Our products are designed to adapt to your life—whether it’s washing the covers, adjusting the firmness, replacing parts, or refreshing the look with new fabrics and colours.
                        </p>
                        <p className="mt-5 max-w-lg text-base leading-6 text-gray-600">Our Sydney-based Global R&D Team are constantly innovating our products, then testing and refining the fabrications, components and designs to deliver optimal performance for real people who live real lives. It’s okay to be clumsy with Koala.</p>
                    </div>

                    <div>
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="rounded-3xl"
                        >
                            <source
                                src="https://au.koala.com/cdn/shop/videos/c/vp/ec780a832694410b8fd3d6055e5bb6fe/ec780a832694410b8fd3d6055e5bb6fe.HD-1080p-2.5Mbps-44558191.mp4?v=0"
                                type="video/mp4"
                            />
                        </video>
                    </div>

                </section>


                <section className="grid min-h-[480px] items-center gap-10 md:grid-cols-2">

                    <div>
                        <img
                            src="//au.koala.com/cdn/shop/files/USP-3_1_-1KwG2zZGQ6uyM8NazQR3wA.webp?v=1742530810&width=1496"
                            alt=""
                            className="rounded-3xl"
                        />

                    </div>

                    <div className="py-10 ml-20">
                        <h1 className="max-w-xl text-4xl font-semibold leading-tight md:text-5xl">
                            For a better planet
                        </h1>

                        <p className="mt-5 max-w-lg text-base leading-7 text-gray-600">
                            Sustainability is the foundation of Koala, creating long-lasting products with sustainable materials, reducing waste with circularity, and donating millions to wildlife causes.
                        </p>
                        <p className="mt-5 max-w-lg text-base leading-7 text-gray-600">We select our materials based on what they cost the planet – not what they cost us. From using FSC®-certified timber to fabrics made from recycled and plant-derived materials, our goal is to influence the industry and change the way furniture is made for good.
                        </p>
                    </div>
                </section>
                <section className="px-5 py-10 md:px-10">
                    <p className="mb-2 text-sm font-medium text-gray-600">
                        Why Koala
                    </p>

                    <h1 className="mb-7 text-3xl font-semibold leading-tight text-gray-900 md:text-4xl">
                        Furniture that gives a.
                    </h1>

                    <div className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory pb-5">
                        <div className="flex w-max flex-nowrap gap-4">

                            <div className="w-[300px] shrink-0 snap-start md:w-[344px]">
                                <div className="h-[258px] overflow-hidden rounded-lg">
                                    <img
                                        src="https://au.koala.com/cdn/shop/files/1200x758_1-_Tile_1_cb73a81b-c2d9-4b32-94f4-30fedce42183.jpg?v=1727394365&width=748"
                                        alt="1% for the Planet"
                                        className="h-full w-full "
                                    />
                                </div>
                                <h3 className="mt-2 text-sm font-bold text-gray-900">
                                    1% for the Planet
                                </h3>
                                <p className="mt-1 text-xs leading-snug text-gray-600">
                                    1% for the Planet members contribute at least 1% of their
                                    revenue to environmental causes.
                                </p>
                            </div>


                            <div className="w-[300px] shrink-0 snap-start md:w-[344px]">
                                <div className="h-[258px] overflow-hidden rounded-lg">
                                    <img
                                        src="https://au.koala.com/cdn/shop/files/1200x758_BCorp_Tile_2_b4255088-aca9-4b46-927a-c904f81df535.jpg?v=1727394365&width=748"
                                        alt="B Corps Certified"
                                        className="h-full w-full"
                                    />
                                </div>
                                <h3 className="mt-2 text-sm font-bold text-gray-900">
                                    B Corps Certified
                                </h3>
                                <p className="mt-1 text-xs leading-snug text-gray-600">
                                    B Corps make decisions that have a positive impact across
                                    their workers, customers, suppliers, community and the
                                    environment.
                                </p>
                            </div>


                            <div className="w-[300px] shrink-0 snap-start md:w-[344px]">
                                <div className="h-[258px] overflow-hidden rounded-lg">
                                    <img
                                        src="https://au.koala.com/cdn/shop/files/about_us_koala_wwf_1.png?v=1732583871&width=748"
                                        alt="WWF Partnership"
                                        className="h-full w-full"
                                    />
                                </div>
                                <h3 className="mt-2 text-sm font-bold text-gray-900">
                                    WWF Partnership
                                </h3>
                                <p className="mt-1 text-xs leading-snug text-gray-600">
                                    We are partnering with WWF-Australia to double the number
                                    of koalas on the east coast of Australia by 2050.
                                </p>
                            </div>


                            <div className="w-[300px] shrink-0 snap-start md:w-[344px]">
                                <div className="h-[258px] overflow-hidden rounded-lg">
                                    <img
                                        src="https://au.koala.com/cdn/shop/files/1200x758_KSH_Tile_4.jpg?v=1727394365&width=748"
                                        alt="Koala Second Home"
                                        className="h-full w-full"
                                    />
                                </div>
                                <h3 className="mt-2 text-sm font-bold text-gray-900">
                                    Koala Second Home
                                </h3>
                                <p className="mt-1 text-xs leading-snug text-gray-600">
                                    At Koala Second Home we take back returns from our 120-day
                                    trial period and refurbish products to near-new condition.
                                    We then sell them at a huge saving off everyday retail prices!
                                </p>
                            </div>
                            <div className="w-[300px] shrink-0 snap-start md:w-[344px]">
                                <div className="h-[258px] overflow-hidden rounded-lg">
                                    <img
                                        src="https://au.koala.com/cdn/shop/files/1200x758_FSC_Tile_5_a5fb08ae-376d-4396-acc9-db13e6c0df20.jpg?v=1727394365&width=748"
                                        alt="FSC Certified Timber"
                                        className="h-full w-full"
                                    />
                                </div>
                                <h3 className="mt-2 text-sm font-bold text-gray-900">
                                    FSC®-certified Timber
                                </h3>
                                <p className="mt-1 text-xs leading-snug text-gray-600">
                                    The Forest Stewardship Council (FSC) promotes environmentally
                                    appropriate, socially beneficial and economically viable
                                    management of the world's forests. FSC® N003088.
                                </p>
                            </div>
                            <div className="w-[300px] shrink-0 snap-start md:w-[344px]">
                                <div className="h-[258px] overflow-hidden rounded-lg">
                                    <img
                                        src="https://au.koala.com/cdn/shop/files/Koala_Donations_Program_v2.png?v=1744783876&width=748"
                                        alt="Koala Donations Program"
                                        className="h-full w-full" />
                                </div>
                                <h3 className="mt-2 text-sm font-bold text-gray-900">
                                    Koala Donations Program
                                </h3>
                                <p className="mt-1 text-xs leading-snug text-gray-600">
                                    With a network of over 70 Australian charities, our Koala
                                    Donations Program works to support those in need.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
            <Signup />
        </div>
    );
}

export default Aboutus;

