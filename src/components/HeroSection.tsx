import { FC, useState } from "react";

const images = [
  {
    url: "/hero1.png",
    title: "Mobil Vinçler",
    desc: "Her arazi koşuluna uygun yüksek mobilite.",
  },
  {
    url: "/hero2.png",
    title: "Kule Vinç Sistemleri",
    desc: "Şehirleşen dünyanın dev projelerine güç katıyoruz.",
  },
  {
    url: "/hero3.png",
    title: "Teleskopik Bomlar",
    desc: "Hassas mühendislik ile maksimum erişim kapasitesi.",
  },
  {
    url: "/hero4.png",
    title: "Liman Vinçleri",
    desc: "Deniz ticaretinin ağır yükleri bizimle güvende.",
  },
  {
    url: "/hero5.png",
    title: "Teknik Servis",
    desc: "7/24 kesintisiz saha ve bakım desteği.",
  },
];

const HeroSection: FC = () => {
  // Başlangıçta ilk kartın geniş olması için index 0
  const [active, setActive] = useState(0);

  return (
      <div className="bg-[#e3edf6] dark:bg-slate-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 h-[600px]">
            {images.map((img, idx) => (
                <div
                    key={idx}
                    onClick={() => setActive(idx)}
                    className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-in-out shadow-2xl ${
                        active === idx
                            ? "flex-[4] md:flex-[5]" // Aktif kart daha geniş
                            : "flex-1"               // Diğerleri dar
                    }`}
                >
                  {/* Arka Plan Görseli */}
                  <img
                      src={img.url}
                      alt={img.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />

                  {/* Karartma Katmanı (Yazıların okunması için) */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
                      active === idx ? "opacity-100" : "opacity-40"
                  }`} />

                  {/* Metin İçeriği */}
                  <div className={`absolute bottom-8 left-6 right-6 transition-all duration-500 transform ${
                      active === idx
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                  }`}>
                    <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
                      {img.title}
                    </h2>
                    <p className="text-gray-200 text-sm md:text-base font-light italic border-l-2 border-orange-500 pl-4">
                      {img.desc}
                    </p>
                  </div>

                  {/* Dikey Başlık (Kart darkken görünür) */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 transition-opacity duration-300 whitespace-nowrap ${
                      active === idx ? "opacity-0" : "opacity-100"
                  }`}>
                <span className="text-white/50 font-bold tracking-widest uppercase text-xs md:text-sm">
                   {img.title}
                </span>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default HeroSection;