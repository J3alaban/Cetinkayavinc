import { FC, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navbar: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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

                <div className="hidden sm:flex gap-6 items-center dark:text-white">

                    <div onClick={toggleTheme} className="cursor-pointer">
                        {isDarkMode ? <MdOutlineLightMode size={26} /> : <MdOutlineDarkMode size={26} />}
                    </div>
                </div>

                <button
                    className="sm:hidden text-3xl dark:text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>
            </div>

            {isMenuOpen && (
                <div className="sm:hidden bg-white dark:bg-slate-800 flex flex-col items-center gap-6 py-6 dark:text-white">
                    <a href="#home" onClick={() => setIsMenuOpen(false)}>Anasayfa</a>
                    <a href="#about" onClick={() => setIsMenuOpen(false)}>Hakkımızda</a>
                    <a href="#blog" onClick={() => setIsMenuOpen(false)}>Blog</a>
                    <div onClick={toggleTheme}>
                        {isDarkMode ? "Aydınlık Mod" : "Karanlık Mod"}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;