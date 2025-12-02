// app/services/page.tsx
import Card from '@/entities/components/card/Card';

const services = [
  {
    id: 1,
    title: "Контурная пластика",
    description: "Коррекция и увеличение объема губ, скул, подбородка с помощью филлеров премиум-класса",
    price: "от 15 000 ₽",
    duration: "30-45 мин",
    badge: "ПОПУЛЯРНО"
  },
  {
    id: 2,
    title: "Ботокс и диспорт",
    description: "Инъекции для разглаживания морщин и коррекции мимических заломов",
    price: "от 8 500 ₽",
    duration: "20-30 мин",
    badge: "ХИТ"
  },
  {
    id: 3,
    title: "Лазерная эпиляция",
    description: "Удаление волос навсегда на любых зонах с использованием современного лазера",
    price: "от 3 500 ₽",
    duration: "15-60 мин",
    badge: "СКИДКА"
  },
  {
    id: 4,
    title: "Чистка лица",
    description: "Профессиональная чистка лица с ультразвуком и механической обработкой",
    price: "от 6 000 ₽",
    duration: "1 час 15 мин",
    badge: ""
  },
  {
    id: 5,
    title: "Химический пилинг",
    description: "Глубокое обновление кожи, устранение пигментации и постакне",
    price: "от 7 500 ₽",
    duration: "40-60 мин",
    badge: "НОВИНКА"
  },
  {
    id: 6,
    title: "Мезотерапия",
    description: "Введение витаминных коктейлей и гиалуроновой кислоты для омоложения",
    price: "от 5 000 ₽",
    duration: "30-40 мин",
    badge: ""
  },
  {
    id: 7,
    title: "RF-лифтинг",
    description: "Радиочастотный лифтинг для подтяжки кожи и сокращения морщин",
    price: "от 12 000 ₽",
    duration: "45-60 мин",
    badge: "ПРЕМИУМ"
  },
  {
    id: 8,
    title: "Плазмотерапия",
    description: "Омоложение с использованием собственной плазмы пациента (PRP-терапия)",
    price: "от 9 000 ₽",
    duration: "30-45 мин",
    badge: ""
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-500 to-slate-700 bg-clip-text text-transparent">
              УСЛУГИ
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Полный спектр косметологических услуг для вашей красоты и здоровья. 
            Мы предлагаем современные и безопасные процедуры, которые подарят вам уверенность в себе.
          </p>
        </div>

        {/* Категории услуг */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {['Все услуги', 'Инъекционная', 'Аппаратная', 'Эстетическая', 'Анти-эйдж', 'Уходовая'].map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:bg-gray-50 transition-colors duration-300 font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Сетка услуг */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              title={service.title}
              description={service.description}
              price={service.price}
              duration={service.duration}
              badge={service.badge}
              photo = {''}
            />
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-8 border border-blue-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Не можете выбрать услугу?</h3>
              <p className="text-gray-600 mb-6">
                Запишитесь на бесплатную консультацию к нашему косметологу. 
                Специалист проведет диагностику кожи и подберет индивидуальную программу процедур.
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-slate-600 to-slate-800 hover:from-amber-700 hover:to-amber-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                Бесплатная консультация
              </button>
            </div>
            <div className="text-right">
              <div className="inline-flex items-center gap-3 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="text-5xl">👩‍⚕️</div>
                <div className="text-left">
                  <div className="font-bold text-gray-800">Профессиональная консультация</div>
                  <div className="text-sm text-gray-600">30 минут бесплатно</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}