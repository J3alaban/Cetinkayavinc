import { FC } from "react";

const blogPosts = [
    {
        id: 1,
        title: "Periyodik Kontrol",
        category: "Teknik Servis",
        date: "2024",
        image: "/blog-1.jpg",
        description: "Vinçlerin güvenli çalışması için 3 aylık periyotlarla hidrolik sızdırmazlık ve bom çatlak kontrolleri yapılmalıdır."
    },
    {
        id: 2,
        title: "Yük Kapasitesi",
        category: "Güvenlik",
        date: "2024",
        image: "/blog-2.jpg",
        description: "Rüzgar hızı ve zemin eğimi, kaldırma kapasitesini doğrudan etkiler. Güvenliğiniz için yük çizelgelerine sadık kalın."
    },
    {
        id: 3,
        title: "Operatör Eğitimi",
        category: "Eğitim",
        date: "2024",
        image: "/blog-3.jpg",
        description: "Sertifikalı operatör kullanımı, şantiye kazalarını %80 oranında azaltır. Ekipman ömrünü uzatan en büyük faktör eğitimdir."
    }
];

const FooterTop: FC = () => {
    return (
        <section className="container mx-auto px-4 my-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div className="max-w-xl">
                    <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Teknik Rehber</span>
                    <h2 className="text-4xl font-extrabold mt-2 dark:text-white">Bilgilendirme Paneli</h2>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {blogPosts.map((post) => (
                    <article key={post.id} className="flex flex-col h-full bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-700 shadow-sm transition-all duration-300">
                        <div className="relative overflow-hidden h-60">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover bg-gray-200 dark:bg-slate-600"
                                onError={(e) => {(e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600?text=Vinç+Görseli'}}
                            />
                            <div className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase">{post.category}</div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center text-[10px] text-gray-400 mb-3 font-medium uppercase tracking-tighter">
                                <span>{post.date} Güncel Veri</span>
                                <span className="mx-2 text-orange-500">•</span>
                                <span>Teknik Doküman</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 dark:text-white">{post.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 italic">
                                {post.description}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default FooterTop;;