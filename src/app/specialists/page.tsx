// app/specialists/page.tsx
import Image from "next/image";
const specialists = [
  {
    id: 1,
    name: "Анна ",
    position: "Врач-косметолог",
    experience: "12 лет",
    specialization: ["Контурная пластика", "Ботокс", "Нитевой лифтинг"],
    image: "/images/doctor1.jpg",
    description: "Сертифицированный специалист по инъекционным методикам"
  },
  {
    id: 2,
    name: "Мария ",
    position: "Дерматокосметолог",
    experience: "8 лет",
    specialization: ["Лечение акне", "Пилинги", "Лазерные процедуры"],
    image: "/images/doctor2.jpg",
    description: "Эксперт в области аппаратной косметологии"
  },
  {
    id: 3,
    name: "Елена ",
    position: "Косметолог-эстетист",
    experience: "6 лет",
    specialization: ["Уходовые процедуры", "Массаж лица", "Чистки"],
    image: "/images/doctor3.jpg",
    description: "Специалист по уходовым программам"
  },
  {
    id: 4,
    name: "Ольга ",
    position: "Трихолог",
    experience: "10 лет",
    specialization: ["Лечение волос", "Плазмотерапия", "Мезотерапия"],
    image: "/images/doctor4.jpg",
    description: "Эксперт в области здоровья волос и кожи головы"
  },
];

export default function SpecialistsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-500 to-slate-700 bg-clip-text text-transparent">
              СПЕЦИАЛИСТЫ
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Наша команда — это опытные профессионалы с медицинским образованием, 
            которые регулярно повышают квалификацию и следят за новейшими тенденциями в косметологии.
          </p>
        </div>

        {/* Сетка специалистов */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialists.map((specialist) => (
            <div key={specialist.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300">
              {/* Фото специалиста */}
              <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  < Image src ={specialist.image} fill className="object-contain" alt = "фото доктора"></Image>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700">
                  Опыт: {specialist.experience}
                </div>
              </div>

              {/* Информация */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{specialist.name}</h3>
                <div className="text-blue-600 font-medium mb-3">{specialist.position}</div>
                <p className="text-gray-600 text-sm mb-4">{specialist.description}</p>
                
                {/* Специализации */}
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-2">Специализация:</div>
                  <div className="flex flex-wrap gap-2">
                    {specialist.specialization.map((spec, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Кнопка записи */}
                <button className="w-full py-2 bg-gradient-to-r from-slate-600 to-slate-800 hover:from-amber-700 hover:to-amber-800 text-white font-medium rounded-lg transition-all duration-300">
                  Записаться
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Почему выбирают наших специалистов?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-4">🎓</div>
              <div className="font-bold text-gray-800 mb-2">Высшее образование</div>
              <div className="text-gray-600 text-sm">Все врачи имеют медицинское образование</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-4">📚</div>
              <div className="font-bold text-gray-800 mb-2">Регулярное обучение</div>
              <div className="text-gray-600 text-sm">Ежегодные курсы повышения квалификации</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-4">💎</div>
              <div className="font-bold text-gray-800 mb-2">Индивидуальный подход</div>
              <div className="text-gray-600 text-sm">Персональная программа для каждого клиента</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}