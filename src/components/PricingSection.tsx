import Icon from "@/components/ui/icon";

const plans = [
  {
    name: "Инди",
    price: "49 000",
    description: "Для независимых режиссёров и малых студий",
    features: [
      "1 мультфильм в месяц",
      "До 60 минут",
      "4K рендеринг",
      "3 языка озвучки",
      "Базовая поддержка",
    ],
    cta: "Начать",
    highlighted: false,
  },
  {
    name: "Студия",
    price: "149 000",
    description: "Для продакшн-студий и серьёзных проектов",
    features: [
      "5 мультфильмов в месяц",
      "До 120 минут каждый",
      "8K рендеринг",
      "20+ языков озвучки",
      "Приоритетная поддержка",
      "Персональный менеджер",
    ],
    cta: "Выбрать Студию",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "По запросу",
    description: "Для крупных кинокомпаний и стриминговых платформ",
    features: [
      "Безлимитное производство",
      "Любая длительность",
      "Собственные модели ИИ",
      "Все языки мира",
      "SLA 99.9%",
      "Команда поддержки 24/7",
    ],
    cta: "Связаться",
    highlighted: false,
  },
];

const PricingSection = () => {
  const scrollToForm = () => {
    const el = document.getElementById("about");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="bg-[#050818] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm">
            <Icon name="Tag" size={14} />
            <span>Тарифы</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Прозрачные{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              цены
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Выберите план под ваши задачи. Все тарифы включают полный цикл производства.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 border transition-all ${
                plan.highlighted
                  ? "border-blue-500 bg-blue-600/10 ring-1 ring-blue-500/50 scale-105"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {plan.highlighted && (
                <div className="text-xs text-blue-300 font-semibold uppercase tracking-widest mb-4">
                  Популярный выбор
                </div>
              )}
              <h3 className="text-white text-2xl font-bold">{plan.name}</h3>
              <p className="text-gray-400 text-sm mt-1 mb-6">{plan.description}</p>
              <div className="mb-6">
                {plan.price === "По запросу" ? (
                  <span className="text-3xl font-bold text-white">По запросу</span>
                ) : (
                  <>
                    <span className="text-3xl font-bold text-white">₽{plan.price}</span>
                    <span className="text-gray-400 text-sm">/мес</span>
                  </>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <Icon name="Check" size={16} className="text-blue-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToForm}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-blue-600 text-white hover:bg-blue-500"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
