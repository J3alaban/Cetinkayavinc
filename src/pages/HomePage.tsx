import { FC } from "react";
import HeroSection from "../components/HeroSection";
import Banner from "../components/Banner";
import Features from "../components/Features";
import FooterTop from "../components/FooterTop"; // Yeni bileşeni import ettik

const HomePage: FC = () => {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-800 transition-colors duration-300">
            <HeroSection />

            <Features />

            <section className="container mx-auto px-4 my-16">
                <Banner />
            </section>

            {/* Temiz ve düzenli Blog/FooterTop alanı */}
            <FooterTop />

        </main>
    );
};

export default HomePage;
