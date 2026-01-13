import { ShieldCheck, Truck, Headphones, Cog } from "lucide-react";

const features = [
    {
        title: "Yüksek Güvenlik",
        desc: "Ağır yük kaldırma operasyonlarında uluslararası emniyet standartları.",
        icon: <ShieldCheck className="w-10 h-10 text-orange-500" />,
    },
    {
        title: "Hızlı Kurulum",
        desc: "Modüler sistemlerimizle sahada en hızlı kurulum ve operasyon süreci.",
        icon: <Truck className="w-10 h-10 text-orange-500" />,
    },
    {
        title: "Uzman Servis",
        desc: "Vinç mekaniği ve hidroliği konusunda uzman teknik destek ekibi.",
        icon: <Headphones className="w-10 h-10 text-orange-500" />,
    },
    {
        title: "Yedek Parça",
        desc: "Tüm vinç grupları için geniş stok ve anında parça tedariği.",
        icon: <Cog className="w-10 h-10 text-orange-500" />,
    },
];

export default function Features() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4">
                {/* grid-cols-1'den masaüstünde grid-cols-4'e geçiş yaptık */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="group flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-2"
                        >
                            <div className="mb-6 p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm group-hover:shadow-orange-500/20 group-hover:scale-110 transition-all duration-300 border border-gray-100 dark:border-slate-700">
                                {f.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 dark:text-white tracking-tight">
                                {f.title}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}