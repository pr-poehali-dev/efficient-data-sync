import { useState } from "react";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const [form, setForm] = useState({ name: "", email: "", idea: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="about" className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* About text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm">
              <Icon name="Info" size={14} />
              <span>О нас</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Мы меняем индустрию{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                анимации
              </span>
            </h2>
            <p className="mt-6 text-gray-400 leading-relaxed">
              CineAI — платформа нового поколения для создания полнометражных 3D мультфильмов с помощью генеративного искусственного интеллекта. Мы верим, что каждая история заслуживает воплощения.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Наша команда объединила передовые модели генерации видео, 3D-рендеринга и синтеза речи в единый производственный конвейер.
            </p>
            <div className="flex gap-8 mt-10">
              {[
                { value: "50+", label: "Мультфильмов создано" },
                { value: "12", label: "Стран-партнёров" },
                { value: "2023", label: "Год основания" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <Icon name="CheckCircle" size={32} className="text-blue-400" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Заявка отправлена!</h3>
                <p className="text-gray-400">Мы свяжемся с вами в течение 24 часов.</p>
              </div>
            ) : (
              <>
                <h3 className="text-white text-xl font-bold mb-2">Начать проект</h3>
                <p className="text-gray-400 text-sm mb-6">Оставьте заявку — мы расскажем, как воплотить вашу идею</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-400 mb-1 block">Ваше имя</label>
                    <input
                      type="text"
                      required
                      placeholder="Иван Иванов"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-1 block">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="ivan@studio.ru"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-1 block">Ваша идея</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Опишите мультфильм, который хотите создать..."
                      value={form.idea}
                      onChange={(e) => setForm({ ...form, idea: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors flex items-center justify-center gap-2"
                  >
                    Отправить заявку
                    <Icon name="ArrowRight" size={18} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
