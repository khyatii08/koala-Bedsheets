
function Footer() {
    const columns = [
        {
            title: "Help",
            links: [
                "Request delivery change",
                "Contact & FAQs",
                "Finance options",
                "My Account",
            ],
        },
        {
            title: "About",
            links: [
                "About us",
                "Our impact",
                "Innovation",
                "Koala Second Home",
                "Koala Showroom",
                "Careers",
                "Investors",
                "press@koala.com",
            ],
        },
        {
            title: "Resources",
            links: [
                "Delivery",
                "Koala reviews",
                "120 day trial",
                "Warranty",
                "Treetops blog",
                "Refer a friend",
                "Compare Koala",
                "Student discount",
            ],
        },
        {
            title: "Shop",
            links: [
                "Mattresses",
                "Sofa Beds",
                "Sofas",
                "Bedroom",
                "Living Room",
                "Outdoor",
                "Koala x Bluey Playtime Collection",
            ],
        },
    ];

    return (
        <footer className="bg-[#626652] px-6 py-12 text-white md:px-11">

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1fr_1fr_1fr] lg:gap-8">

                <div>
                    <h1 className="text-5xl font-bold tracking-tight">
                        koala<span className="align-top text-xs">®</span>
                    </h1>

                    <p className="mt-5 max-w-md text-sm leading-5">
                        In the spirit of reconciliation, Koala acknowledges
                        the Traditional Custodians of Country throughout
                        Australia and their connections to land, sea and
                        community.
                    </p>

                    <p className="mt-4 max-w-md text-sm leading-5">
                        We pay our respect to their Elders past and present
                        and extend that respect to all Aboriginal and Torres
                        Strait Islander peoples today.
                    </p>

                    <div className="mt-6 flex items-center gap-5">
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-sm font-bold text-[#626652]"
                        >
                            f
                        </a>

                        <a
                            href="#"
                            aria-label="Instagram"
                            className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-[#626652]"
                        >
                            ins
                        </a>
                    </div>
                    <div> <img
                        src="https://au.koala.com/cdn/shop/files/Logos_2x_cee11df5-97df-4abf-a21f-620f675e45b7.png?v=1787714167&width=456   "
                        alt=""
                        className=""
                    />
                    </div>
                </div>
                {columns.map((column) => (
                    <div key={column.title}>
                        <h3 className="mb-5 font-semibold">
                            {column.title}
                        </h3>

                        <ul className="space-y-4">
                            {column.links.map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-sm transition-opacity duration-200 hover:opacity-70"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>

            <div className="mt-16 border-y border-white/40 py-6">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                    <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-xs">
                        <span>© 2026 Koala</span>

                        <a href="#" className="hover:underline">
                            Privacy Policy
                        </a>

                        <a href="#" className="hover:underline">
                            Website Terms
                        </a>

                        <a href="#" className="hover:underline">
                            Terms of Service
                        </a>

                        <a href="#" className="hover:underline">
                            Promotion Terms
                        </a>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
                        <span className="rounded bg-white px-2 py-1 text-blue-700">
                            PayPal
                        </span>

                        <span className="rounded bg-white px-2 py-1 text-blue-800">
                            VISA
                        </span>

                        <span className="rounded bg-white px-2 py-1 text-red-600">
                            MC
                        </span>

                        <span className="rounded bg-white px-2 py-1 text-blue-500">
                            AMEX
                        </span>

                        <span className="rounded bg-white px-2 py-1 text-gray-700">
                            G Pay
                        </span>
                    </div>

                </div>
            </div>

        </footer>
    );
}

export default Footer;
