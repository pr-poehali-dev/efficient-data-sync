import Icon from "@/components/ui/icon";

const examples = [
  {
    title: "Космическая одиссея",
    genre: "Фантастика",
    duration: "1 ч 32 мин",
    img: "https://cdn.poehali.dev/projects/802b2680-f764-4197-a31e-6452255041c1/files/7e694283-2cc7-4772-ae0a-edce100fe586.jpg",
  },
  {
    title: "Волшебный лес",
    genre: "Сказка",
    duration: "1 ч 18 мин",
    img: "https://cdn.poehali.dev/projects/802b2680-f764-4197-a31e-6452255041c1/files/7e694283-2cc7-4772-ae0a-edce100fe586.jpg",
  },
  {
    title: "Герои подземелья",
    genre: "Приключения",
    duration: "1 ч 45 мин",
    img: "https://cdn.poehali.dev/projects/802b2680-f764-4197-a31e-6452255041c1/files/7e694283-2cc7-4772-ae0a-edce100fe586.jpg",
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm">
            <Icon name="Film" size={14} />
            <span>Примеры работ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Созданные нашим{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              ИИ
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Полнометражные мультфильмы, сгенерированные с нуля за несколько недель
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {examples.map((ex) => (
            <div key={ex.title} className="group rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-blue-500/40 transition-all cursor-pointer">
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={ex.img}
                  alt={ex.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <Icon name="Play" size={24} className="text-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold">{ex.title}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-blue-400">{ex.genre}</span>
                  <span className="text-xs text-gray-500">{ex.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
