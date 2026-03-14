import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-[#050818] to-blue-950 flex flex-col">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(30,64,175,0.35),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(109,40,217,0.15),transparent_60%)]"></div>

      {/* Hero image background */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://cdn.poehali.dev/projects/802b2680-f764-4197-a31e-6452255041c1/files/7e694283-2cc7-4772-ae0a-edce100fe586.jpg"
          alt="AI 3D Movie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      </div>

      {/* Navigation */}
      <header className="relative z-10 px-6 py-4 mx-auto w-full max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-white text-2xl font-bold tracking-tight">
              <span className="text-blue-400">Cine</span>AI
            </Link>
            <nav className="hidden ml-12 space-x-8 md:flex">
              {["Возможности", "Примеры", "Цены", "Партнёрам", "О нас"].map((item, index) => (
                <Link
                  key={item}
                  to={`/${["features", "gallery", "pricing", "partners", "about"][index]}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="px-4 py-2 text-white hover:text-gray-200 transition-colors text-sm">
              Войти
            </Link>
            <Link
              to="/demo"
              className="px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors text-sm font-medium"
            >
              Запросить демо
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col flex-1 items-center justify-center px-6 py-12 mx-auto text-center max-w-7xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm">
          <Icon name="Sparkles" size={14} />
          <span>Генеративный ИИ нового поколения</span>
        </div>

        <h1 className="max-w-4xl mx-auto text-4xl font-bold text-white md:text-5xl lg:text-7xl leading-tight">
          Создавайте{" "}
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            полнометражные
          </span>{" "}
          3D мультфильмы с помощью ИИ
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-300 leading-relaxed">
          Опишите историю — получите готовый 3D мультфильм.
          <br />
          Без студии, без огромного бюджета. Только ваша идея и наш ИИ.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-10 mb-10">
          {[
            { value: "10x", label: "быстрее студийного производства" },
            { value: "4K", label: "качество рендеринга" },
            { value: "∞", label: "уникальных сцен и персонажей" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-400 mt-1 max-w-[120px]">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col mt-2 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Link
            to="/demo"
            className="flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-gray-900 bg-white rounded-lg hover:bg-gray-100 transition-colors"
          >
            Создать мультфильм
            <Icon name="ArrowRight" size={18} />
          </Link>
          <Link
            to="/gallery"
            className="flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium text-white bg-white/10 border border-white/20 rounded-lg hover:bg-white/15 transition-colors backdrop-blur-sm"
          >
            <Icon name="Play" size={18} />
            Смотреть примеры
          </Link>
        </div>

        {/* Partners Section */}
        <div className="w-full mt-24">
          <p className="mb-8 text-gray-400 text-sm">
            Нам доверяют <span className="text-white">анимационные студии</span>, кинопродюсеры и
            независимые режиссёры по всему миру
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {["DreamWorks", "StudioMax", "AnimaPro", "CineForge", "PixelDream"].map((name) => (
              <div key={name} className="text-gray-500 hover:text-gray-300 transition-colors font-bold text-lg tracking-wide">
                {name}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
