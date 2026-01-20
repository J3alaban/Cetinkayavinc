import { FC, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navbar: FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark");
    };

    return (
        <div className="py-4 bg-white dark:bg-slate-800 top-0 sticky z-10 shadow-lg">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-3xl font-bold dark:text-white">
                    ÇETİNKAYA KALDIRMA VE TAŞIMA ÇÖZÜMLERİ
                </div>

                <div className="flex gap-6 items-center dark:text-white">
                    <div onClick={toggleTheme} className="cursor-pointer">
                        {isDarkMode ? <MdOutlineLightMode size={26} /> : <MdOutlineDarkMode size={26} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;