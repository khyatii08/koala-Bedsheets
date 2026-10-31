
function Header({ openMenu, setOpenMenu, setCurrentPage }) {
    const aboutLinks = [
        { label: "About Us", page: "about-us" },
        {
            label: "Koala Second Home",
            page: "koala-second-home",
        },
        {
            label: "Koala Showroom",
            page: "koala-showroom",
        },
    ];

    if (openMenu !== "About") return null;

    return (
        <div className="absolute left-0 top-full z-50 w-56 bg-white py-2 text-sm text-[#292b25] shadow-xl">
            {aboutLinks.map((item) => (
                <button
                    key={item.page}
                    type="button"
                    onClick={() => {
                        setCurrentPage(item.page);
                        setOpenMenu("");
                        window.history.pushState(
                            {},
                            "",
                            "/" + item.page
                        );
                    }}
                    className="block w-full px-5 py-3 text-left hover:bg-gray-100"
                >
                    {item.label}
                </button>
            ))}
        </div>
    );
}

export default Header;
