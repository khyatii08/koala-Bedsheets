
import { Link, useParams } from "react-router-dom";

import {
    CalendarCheck,
    Wrench,
    ShieldCheck,
    Smartphone,
} from "lucide-react";


const benefits = [
    { name: "120 Night Trial", Icon: CalendarCheck },
    { name: "Easy Assembly", Icon: Wrench },
    { name: "Warranty", Icon: ShieldCheck },
    { name: "Fast Delivery", Icon: Smartphone },
];
const livingRoomItems = [
    {
        name: "Sofa Beds",
        path: "sofa-beds",
        image: "https://au.koala.com/cdn/shop/collections/KSB_4G_OB_Q_12_6371ab10-99f0-4ced-a487-6ec3129ed3ea.png?v=1757981879&width=500",
    },
    {
        name: "Sofas",
        path: "sofas",
        image: "https://au.koala.com/cdn/shop/collections/TAM_WC_2S_R_01_PRODUCT.webp?v=1779235328&width=500",
    },
    {
        name: "Ottomans",
        path: "ottomans",
        image: "https://au.koala.com/cdn/shop/collections/ByronSB_3rdG_Ottoman_BlushSunset_3_1bff66ed-4c0a-49d5-871e-fe604c6689c5.png?v=1743474738&width=500",
    },
    {
        name: "Bundles",
        path: "bundles",
        image: "https://au.koala.com/cdn/shop/collections/KoalaSB_4G_Ottoman_ForestDawn_Queen.png?v=1759298946&width=500",
    },
    {
        name: "Bookshelves",
        path: "bookshelves",
        image: "https://au.koala.com/cdn/shop/collections/2716e936a2eec1f41bb0afd8f978e802.png?v=1727418508&width=500",
    },
    {
        name: "Coffee & Side Tables",
        path: "coffee-and-side-tables",
        image: "https://au.koala.com/cdn/shop/collections/coffee_table.png?v=1727418664&width=500",
    },
    {
        name: "Armchairs",
        path: "armchairs",
        image: "https://au.koala.com/cdn/shop/collections/bfa60f1787bbaab0c566e5e801a4ce80.png?v=1741828592&width=500",
    },
    {
        name: "Homewares",
        path: "homewares",
        image: "https://au.koala.com/cdn/shop/collections/9._Copy_of_KENKOA0049_2022_DD_SoftHomewares_Studio_Cushion_BeachBum_SurfersParadise_ForEtch_9219_R1-28QVx7HXwue2lJAKXXfo57.webp?v=1746164533&width=500",
    },
    {
        name: "Sofa Sections",
        path: "sofa-sections",
        image: "https://au.koala.com/cdn/shop/collections/8c19d14e86a86c19ce403b84ad12819c_d621ef82-9feb-4107-a708-0c5c8581212e.png?v=1727418138&width=500",
    },
    {
        name: "Sofa Covers",
        path: "sofa-covers",
        image: "https://au.koala.com/cdn/shop/collections/c60ff5ca7c8f773f34fea3f25e0f0048_bbb33ab0-ee83-4276-8b33-2584a14bba2e.png?v=1760917811&width=500",
    },
];

function LivingRoom() {
    const { category } = useParams();

    const selectedItem = livingRoomItems.find(
        (item) => item.path === category
    );

    return (
        <div className="min-h-screen overflow-hidden bg-[#f8f8f4] px-5 py-10 md:px-12">

            <section className="relative left-1/2 mb-0 h-[220px] w-screen -translate-x-1/2 overflow-hidden bg-stone-300 sm:h-[260px] md:h-[300px] lg:h-[340px]">

                <img
                    src="https://au.koala.com/cdn/shop/files/livingroom-lg.png?v=1776407546&width=1500"
                    alt="Living room sofa"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-5 z-10 px-5 md:px-10">

                    <div className="mb-6 inline-flex rounded-full bg-black/30 px-4 py-2 text-sm text-white">
                        <Link to="/">Home</Link>
                        <span className="mx-2">/</span>
                        <span>Living Room</span>
                    </div>

                    <h1 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                        Living Room
                    </h1>

                    <div className="flex max-w-max flex-wrap items-center gap-x-5 gap-y-2 rounded-xl bg-[#f8f8f4] px-4 py-2 text-xs font-medium text-[#383a32] md:rounded-full md:text-sm">

                        {benefits.map(({ name, Icon }) => (
                            <div key={name} className="flex items-center gap-2 whitespace-nowrap">
                                <Icon size={18} strokeWidth={1.7} />
                                <span>{name}</span>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <section className="pt-10">

                <h1 className="mb-3 text-3xl font-bold text-[#292b25] md:text-4xl">
                    {selectedItem ? selectedItem.name : "Living Room"}
                </h1>

                <p className="mb-8 text-sm text-gray-600">
                    Discover our Living Room collection.
                </p>


                <div className="living-room-scroll flex w-full gap-4 overflow-x-auto scroll-smooth pb-5">

                    <Link
                        to="/living-room"
                        className="w-[168px] shrink-0 text-left sm:w-[190px] md:w-[210px]"
                    >
                        <div
                            className={`overflow-hidden rounded-xl border-2 transition ${!category
                                ? "border-[#69745b]"
                                : "border-transparent"
                                }`}
                        >
                            <img
                                src="https://au.koala.com/cdn/shop/collections/TAM_WC_2S_R_01_PRODUCT.webp?v=1779235328&width=500"
                                alt="All Living Room"
                                className="h-[125px] w-full object-cover transition-transform duration-300 hover:scale-105 sm:h-[145px]"
                            />
                        </div>

                        <p className="mt-3 text-sm font-medium text-[#292b25]">
                            All Living Room
                        </p>
                    </Link>


                    {livingRoomItems.map((item) => (
                        <Link
                            key={item.path}
                            to={`/living-room/${item.path}`}
                            className="w-[168px] shrink-0 text-left sm:w-[190px] md:w-[210px]"
                        >
                            <div
                                className={`overflow-hidden rounded-xl border-2 transition ${category === item.path
                                    ? "border-[#69745b]"
                                    : "border-transparent"
                                    }`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    loading="lazy"
                                    className="h-[125px] w-full object-cover transition-transform duration-300 hover:scale-105 sm:h-[145px]"
                                />
                            </div>

                            <p className="mt-3 text-sm font-medium text-[#292b25]">
                                {item.name}
                            </p>
                        </Link>
                    ))}

                </div>


                <div className="mt-2 h-[4px] w-full overflow-hidden rounded-full bg-[#e9ebe5]">
                    <div className="h-full w-[45%] rounded-full bg-[#69745b]" />
                </div>

            </section>

        </div>
    );
}

export default LivingRoom;
