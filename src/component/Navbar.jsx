
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
    Search,
    Sparkles,
    UserRound,
    ShoppingCart,
    ChevronDown,
} from "lucide-react";

const messages = [
    "World class warranty, up to 10 years",
    "Try it properly with our 120 day trial • Learn more",
    "Free delivery on mattresses",
];

const countries = [
    { name: "Australia", flag: "🇦🇺", currency: "AUD $" },
    { name: "United States", flag: "🇺🇸", currency: "USD $" },
    { name: "Japan", flag: "🇯🇵", currency: "JPY ¥" },
];

const menus = {
    About: [
        "About Us",
        "Koala Second Home",
        "Koala Showroom",
    ],

    "Living Room": [
        "Sofa Beds",
        "Sofas",
        "Ottomans",
        "Bundles",
        "Bookshelves",
        "Coffee & Side Tables",
        "Armchairs",
        "Homewares",
        "Sofa Sections",
        "Sofa Covers",
    ],

    Bedroom: [
        "Mattresses",
        "Bed Bases",
        "Bundles",
        "Pillows",
        "Kids",
        "Bedside Tables",
        "Mattress Protectors",
        "Duvets",
    ],

    "Spare Room": [
        "Sofa Beds",
        "Mattresses",
        "Bed Bases",
        "Armchairs",
        "Bookshelves",
        "Coffee & Side Tables",
        "Bedside Tables",
    ],

    Outdoor: [
        "Outdoor Lounge Sets",
        "Outdoor Dining Sets",
        "Outdoor Lounge Chairs",
        "Outdoor Coffee Tables",
        "Outdoor Dining Tables",
        "Outdoor Dining Seating",
    ],

    Offers: [],

    PANTONE: [
        "Koala Sofa Bed 4th Gen",
        "Torquay Modular Sofa",
        "Wanda Sofa Bed",
        "Beach Bum Throw",
        "Beach Bum Cushion",
    ],

    Bluey: [
        "Playtime Collection",
        "Koala x Bluey Playtime Sofa Bed",
        "Koala x Bluey Snoozytime Mattress",
        "Koala x Bluey Snoozytime Bed Base",
        "Koala x Bluey Snoozytime Pillow",
        "Koala x Bluey Playtime Ottoman",
        "Koala x Bluey Snuggletime Throw",
        "Koala x Bluey Snuggletime Cushion",
        "Koala x Bluey Playtime Covers",
    ],
};

const categoryImages = {
    "Living Room": [
        "https://au.koala.com/cdn/shop/collections/KSB_4G_OB_Q_12_6371ab10-99f0-4ced-a487-6ec3129ed3ea.png?v=1757981879&width=144",
        "https://au.koala.com/cdn/shop/collections/TAM_WC_2S_R_01_PRODUCT.webp?v=1779235328&width=3840",
        "https://au.koala.com/cdn/shop/collections/ByronSB_3rdG_Ottoman_BlushSunset_3_1bff66ed-4c0a-49d5-871e-fe604c6689c5.png?v=1743474738&width=144",
        "https://au.koala.com/cdn/shop/collections/KoalaSB_4G_Ottoman_ForestDawn_Queen.png?v=1759298946&width=144",
        "https://au.koala.com/cdn/shop/collections/2716e936a2eec1f41bb0afd8f978e802.png?v=1727418508&width=3840",
        "https://au.koala.com/cdn/shop/collections/coffee_table.png?v=1727418664&width=3840",
        "https://au.koala.com/cdn/shop/collections/bfa60f1787bbaab0c566e5e801a4ce80.png?v=1741828592&width=1920",
        "https://au.koala.com/cdn/shop/collections/9._Copy_of_KENKOA0049_2022_DD_SoftHomewares_Studio_Cushion_BeachBum_SurfersParadise_ForEtch_9219_R1-28QVx7HXwue2lJAKXXfo57.webp?v=1746164533&width=144",
        "https://au.koala.com/cdn/shop/collections/8c19d14e86a86c19ce403b84ad12819c_d621ef82-9feb-4107-a708-0c5c8581212e.png?v=1727418138&width=1920",
        "https://au.koala.com/cdn/shop/collections/c60ff5ca7c8f773f34fea3f25e0f0048_bbb33ab0-ee83-4276-8b33-2584a14bba2e.png?v=1760917811&width=1921",
    ],

    Bedroom: [
        "https://au.koala.com/cdn/shop/collections/Collections_Header.png?v=1783299984&width=2048",
        "https://au.koala.com/cdn/shop/collections/Kirribilli_Bed_Base_Queen_10_1.webp?v=1727055189&width=3840",
        "https://au.koala.com/cdn/shop/collections/KP_KB_BUNDLE_Q_01_PRODUCT_147f370d-58bc-403e-8955-07cc949b6e48.webp?v=1789625850&width=144",
        "https://au.koala.com/cdn/shop/collections/Pillow2G_Carousel_10_a536ba93-00a7-41fb-8781-585326e256ae-removebg-preview.png?v=1791759255&width=144",
        "https://au.koala.com/cdn/shop/collections/119b9239bdbbebbe0e2cad70a251e78e.png?v=1727417795&width=1920",
        "https://au.koala.com/cdn/shop/files/e3ebe3004e7cf22d8ad59e834dcf084b.png?v=1725498266&width=3840",
        "https://au.koala.com/cdn/shop/collections/protector.png?v=1727417882&width=144",
        "https://au.koala.com/cdn/shop/collections/8215438cc5a02988bff0ac91a9378639_7e68ef1a-fe8c-4386-87f0-84a1b0739112.png?v=1741827014&width=144",
    ],

    "Spare Room": [
        "https://au.koala.com/cdn/shop/collections/3c60ca59f534d0e816dc3ef0fef01f6797cd2559.png?v=1788741077&width=500",
        "https://au.koala.com/cdn/shop/collections/Collections_Header.png?v=1783299984&width=2048",
        "https://au.koala.com/cdn/shop/collections/Kirribilli_Bed_Base_Queen_10_1.webp?v=1727055189&width=3840",
        "https://au.koala.com/cdn/shop/collections/bfa60f1787bbaab0c566e5e801a4ce80.png?v=1741828592&width=1920",
        "https://au.koala.com/cdn/shop/collections/2716e936a2eec1f41bb0afd8f978e802.png?v=1727418508&width=3840",
        "https://au.koala.com/cdn/shop/collections/coffee_table.png?v=1727418664&width=3840",
        "https://au.koala.com/cdn/shop/files/e3ebe3004e7cf22d8ad59e834dcf084b.png?v=1725498266&width=3840",
    ],

    Outdoor: [
        "https://au.koala.com/cdn/shop/files/041d07346266ec3f6edf1a4ee7de14c2.png?v=1725501870&width=1920",
        "https://au.koala.com/cdn/shop/files/fa13a7cda679550c50817a11d7446ed5.png?v=1725501756&width=1920",
        "https://au.koala.com/cdn/shop/files/5345895de78485128e31b5c5b46db2f8.png?v=1725501810&width=1920",
        "https://au.koala.com/cdn/shop/files/3fe2d629835e65c8e142b4131861db11.png?v=1725501616&width=1920",
        "https://au.koala.com/cdn/shop/files/66f21938eeec496633b6eda3f524a7e5.png?v=1725501760&width=1920",
        "https://au.koala.com/cdn/shop/files/e45601cf76481eb8e2b784ddc541d070.png?v=1725501645&width=1920",
    ],

    PANTONE: [
        "https://au.koala.com/cdn/shop/files/KSB_4G_Pantone_OB_K_5.webp?v=1783297119&width=3840",
        "https://au.koala.com/cdn/shop/files/TMS_PANTONE_2S_R_6.webp?v=1783304158&width=3840",
        "https://au.koala.com/cdn/shop/files/Wanda_AU-UK_Pantone_7.webp?v=1783311327&width=3840",
        "https://au.koala.com/cdn/shop/files/PANTONE_THROW_4_79c0a611-f05a-4bdf-a4e2-1df6a44db4a7.webp?v=1783910622&width=1920",
        "https://au.koala.com/cdn/shop/files/PANTONE_CUSHION_4.webp?v=1782797866&width=3840",
    ],

    Bluey: [
        "https://au.koala.com/cdn/shop/collections/KSB_BLUEY_K_Q_1.png?v=1760472410&width=527",
        "https://au.koala.com/cdn/shop/files/KSB_BLUEY_P_Q_1.png?v=1759895204&width=1920",
        "https://au.koala.com/cdn/shop/files/BLUEY_MATT_F_8.webp?v=1792109473&width=3840",
        "https://au.koala.com/cdn/shop/files/BLUEY_BED_NOGUARD_F_1.png?v=1760659298&width=1920",
        "https://au.koala.com/cdn/shop/files/BLUEY_PILLOW_FQ_3.webp?v=1792109761&width=3840",
        "https://au.koala.com/cdn/shop/files/KSB_BLUEY_O_TC_4.webp?v=1792109815&width=3840",
        "https://au.koala.com/cdn/shop/files/BLUEY_THROW_GREENIE_4.webp?v=1792109871&width=3840",
        "https://au.koala.com/cdn/shop/files/BLUEY_CUSHION_GREENIE_1.webp?v=1792109925&width=3840",
        "https://au.koala.com/cdn/shop/files/BLUEY_OTTOCOV_P_5.png?v=1760914415&width=1920",
    ],
};

const aboutLinks = [
    { name: "About Us", to: "/about-us" },
    { name: "Koala Second Home", to: "/koala-second-home" },
    { name: "Koala Showroom", to: "/koala-showroom" },
];

function Navbar() {
    const [openMenu, setOpenMenu] = useState("");
    const [openCountry, setOpenCountry] = useState(false);

    const [selectedCountry, setSelectedCountry] = useState({
        name: "Australia",
        flag: "🇦🇺",
        currency: "AUD $",
    });

    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % messages.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const menuItems = Object.keys(menus).filter(
        (menu) => menu !== "About"
    );

    const getPath = (item, menu) => {
        const slug = item
            .toLowerCase()
            .replaceAll("&", "and")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "");

        if (menu === "Living Room") {
            return `/living-room/${slug}`;
        }

        return `/${slug}`;
    };

    return (
        <header
            className="relative z-50 bg-[#f8f8f4] text-[#242820]"
            onMouseLeave={() => {
                setOpenMenu("");
                setOpenCountry(false);
            }}
        >
            {/* Announcement Bar */}
            <div className="flex h-10 items-center justify-between bg-[#626652] px-6 text-xs text-white md:px-8">
                <button
                    type="button"
                    onMouseEnter={() => {
                        setOpenCountry(false);
                        setOpenMenu("About");
                    }}
                    onClick={() =>
                        setOpenMenu(openMenu === "About" ? "" : "About")
                    }
                    className="flex items-center gap-1 hover:opacity-75"
                    aria-expanded={openMenu === "About"}
                >
                    About
                    <ChevronDown size={15} />
                </button>

                <button
                    type="button"
                    onClick={() =>
                        setMessageIndex((prev) => (prev + 1) % messages.length)
                    }
                    className="hidden text-center hover:underline sm:block"
                >
                    {messages[messageIndex]}
                </button>

                <div className="relative flex items-center gap-3">
                    <a href="#" className="hover:underline">
                        FAQs
                    </a>

                    <a
                        href="#"
                        className="hidden hover:underline sm:block"
                    >
                        Manage my orders
                    </a>

                    <button
                        type="button"
                        onMouseEnter={() => {
                            setOpenMenu("");
                            setOpenCountry(true);
                        }}
                        onClick={() => setOpenCountry((prev) => !prev)}
                        className="flex items-center gap-1 hover:opacity-80"
                        aria-label="Choose country and currency"
                        aria-expanded={openCountry}
                    >
                        <span>{selectedCountry.flag}</span>
                        <ChevronDown
                            size={13}
                            className={`transition-transform duration-200 ${openCountry ? "rotate-180" : ""
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="flex min-h-[76px] items-center justify-between gap-5 border-b border-black/5 px-5 md:px-8">
                <Link
                    to="/"
                    className="shrink-0"
                    onClick={() => setOpenMenu("")}
                >
                    <span className="text-4xl font-bold tracking-tight text-[#69745b]">
                        koala<span className="align-top text-xs">®</span>
                    </span>
                </Link>

                <div className="flex items-center gap-4 lg:gap-6">
                    {menuItems.map((menu) => (
                        <button
                            type="button"
                            key={menu}
                            onMouseEnter={() => {
                                setOpenCountry(false);
                                setOpenMenu(menu === "Offers" ? "" : menu);
                            }}
                            onClick={() => {
                                if (menu !== "Offers") {
                                    setOpenMenu(
                                        openMenu === menu ? "" : menu
                                    );
                                } else {
                                    setOpenMenu("");
                                }
                            }}
                            className={`group relative flex items-center gap-1 whitespace-nowrap py-3 text-sm transition-colors duration-200 ${menu === "Bluey"
                                ? "text-lg font-black text-[#607ba8]"
                                : menu === "PANTONE"
                                    ? "text-xs font-extrabold tracking-wide"
                                    : "font-semibold hover:text-[#69745b]"
                                }`}
                        >
                            {menu}

                            {menu !== "Offers" && (
                                <ChevronDown
                                    size={13}
                                    className={`transition-transform duration-300 ${openMenu === menu ? "rotate-180" : ""
                                        }`}
                                />
                            )}

                            <span
                                className={`absolute bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#69745b] transition-transform duration-300 ease-out group-hover:scale-x-100 ${openMenu === menu ? "scale-x-100" : ""
                                    }`}
                            />
                        </button>
                    ))}
                </div>

                <div className="flex shrink-0 items-center gap-4">
                    <button type="button" aria-label="Search">
                        <Search size={21} strokeWidth={1.7} />
                    </button>

                    <button type="button" aria-label="Offers">
                        <Sparkles size={21} strokeWidth={1.7} />
                    </button>

                    <button type="button" aria-label="Account">
                        <UserRound size={21} strokeWidth={1.7} />
                    </button>

                    <button type="button" aria-label="Shopping cart">
                        <ShoppingCart size={21} strokeWidth={1.7} />
                    </button>
                </div>
            </nav>

            {openMenu === "About" && (
                <div
                    className="absolute left-8 top-10 z-[110] w-56 overflow-hidden rounded-lg border border-[#e2e2dc] bg-white py-2 shadow-lg"
                    onMouseEnter={() => setOpenMenu("About")}
                >
                    {aboutLinks.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            onClick={() => setOpenMenu("")}
                            className="block px-4 py-4 text-sm transition-colors hover:bg-[#f5f5f0] hover:text-[#69745b]"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}

            {openMenu !== "" &&
                openMenu !== "About" &&
                menus[openMenu] && (
                    <div
                        className="absolute left-0 top-full z-[100] w-full border-t border-gray-200 bg-white p-6 shadow-lg"
                        onMouseEnter={() => setOpenMenu(openMenu)}
                    >
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                            {menus[openMenu].map((item, index) => (
                                <Link
                                    key={`${openMenu}-${item}-${index}`}
                                    to={getPath(item, openMenu)}
                                    onClick={() => setOpenMenu("")}
                                    className="text-sm font-medium text-[#292b25] transition-colors hover:text-[#69745b]"
                                >
                                    {categoryImages[openMenu]?.[index] && (
                                        <img
                                            src={categoryImages[openMenu][index]}
                                            alt={item}
                                            className="mb-2 h-28 w-full rounded-lg object-cover"
                                        />
                                    )}

                                    <span>{item}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

            {openCountry && (
                <div
                    className="absolute right-8 top-10 z-[120] w-80 overflow-hidden rounded-lg border border-gray-200 bg-white text-sm text-[#242820] shadow-xl"
                    onMouseEnter={() => setOpenCountry(true)}
                >
                    {countries.map((country) => (
                        <button
                            type="button"
                            key={country.name}
                            onClick={() => {
                                setSelectedCountry(country);
                                setOpenCountry(false);
                            }}
                            className={`flex w-full items-center justify-between px-4 py-4 text-left transition-colors hover:bg-[#f5f5f0] ${selectedCountry.name === country.name
                                ? "bg-[#f0f0e9]"
                                : ""
                                }`}
                        >
                            <span className="flex items-center gap-3">
                                <span>{country.flag}</span>
                                <span>{country.name}</span>
                            </span>

                            <span>{country.currency}</span>
                        </button>
                    ))}
                </div>
            )}
        </header>
    );
}

export default Navbar;
