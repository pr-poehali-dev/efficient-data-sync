import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "MessageSquare",
    title: "Опишите сюжет текстом",
    description: "Просто напишите идею — ИИ сам создаст сценарий, персонажей, локации и раскадровку.",
  },
  {
    icon: "Wand2",
    title: "Автоматическая анимация",
    description: "Нейросеть генерирует движения, мимику и сцены без участия аниматора.",
  },
  {
    icon: "Volume2",
    title: "Голоса и музыка",
    description: "ИИ озвучивает персонажей, подбирает саундтрек и звуковые эффекты.",
  },
  {
    icon: "Film",
    title: "Готовый фильм на выходе",
    description: "Получите полнометражный 3D мультфильм в 4K для кинотеатра или стриминга.",
  },
  {
    icon: "Globe",
    title: "Любой язык",
    description: "Мультиязычная озвучка и субтитры — выходите на мировой рынок.",
  },
  {
    icon: "Zap",
    title: "В 10 раз быстрее студии",
    description: "Производство полнометражного мультфильма за недели, а не годы.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-[#050818] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm">
            <Icon name="Sparkles" size={14} />
            <span>Возможности платформы</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Всё для создания{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              шедевра
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Полный цикл производства 3D анимации — от идеи до финальных титров
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/8 hover:border-blue-500/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/15 flex items-center justify-center mb-4 group-hover:bg-blue-500/25 transition-colors">
                <Icon name={f.icon} size={22} className="text-blue-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
