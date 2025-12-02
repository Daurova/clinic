// app/reviews/page.tsx
const reviews = [
  {
    id: 1,
    name: "Екатерина ",
    date: "15 ноября 2024",
    rating: 5,
    text: "Очень довольна результатом! Делала контурную пластику губ у Анны . Процедура прошла комфортно, результат естественный. Спасибо за профессиональный подход!",
    procedure: "Контурная пластика"
  },
  {
    id: 2,
    name: "Мария ",
    date: "10 ноября 2024",
    rating: 5,
    text: "Проходила курс лазерной эпиляции. Результат превзошел ожидания! Кожа гладкая, без раздражений. Специалисты внимательные, все объясняют. Рекомендую!",
    procedure: "Лазерная эпиляция"
  },
  {
    id: 3,
    name: "Анна ",
    date: "5 ноября 2024",
    rating: 4,
    text: "Делала RF-лифтинг. Эффект есть, кожа подтянулась. Процедура безболезненная. Единственное - хотелось бы более подробной консультации перед процедурой.",
    procedure: "RF-лифтинг"
  },
  {
    id: 4,
    name: "Ольга ",
    date: "1 ноября 2024",
    rating: 5,
    text: "Отличная клиника! Делала комплексное омоложение. Результат виден сразу, кожа сияет. Персонал вежливый, кабинеты чистые. Буду рекомендовать подругам!",
    procedure: "Комплексное омоложение"
  },
  {
    id: 5,
    name: "Ирина ",
    date: "28 октября 2024",
    rating: 5,
    text: "Лечила акне в этой клинике. За 3 месяца кожа полностью очистилась. Врач подобрала индивидуальную программу. Очень благодарна за помощь!",
    procedure: "Лечение акне"
  },
  {
    id: 6,
    name: "Светлана ",
    date: "25 октября 2024",
    rating: 5,
    text: "Подарили сертификат на день рождения. Сделала чистку лица и массаж. Процедуры понравились, кожа выглядит отлично. Обязательно вернусь!",
    procedure: "Чистка лица"
  },
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-500 to-slate-700 bg-clip-text text-transparent">
              ОТЗЫВЫ
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Мнения наших клиентов — лучшая рекомендация. 
            Мы ценим каждый отзыв и постоянно работаем над улучшением качества услуг.
          </p>
        </div>

        {/* Статистика */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">4.9</div>
              <div className="text-gray-600">Средняя оценка</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">250+</div>
              <div className="text-gray-600">Отзывов</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">98%</div>
              <div className="text-gray-600">Рекомендуют</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">95%</div>
              <div className="text-gray-600">Повторных обращений</div>
            </div>
          </div>
        </div>

        {/* Отзывы */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              {/* Заголовок отзыва */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="font-bold text-gray-800">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.date}</div>
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-lg ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                      ★
                    </span>
                  ))}
                </div>
              </div>

              {/* Процедура */}
              <div className="mb-4">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                  {review.procedure}
                </span>
              </div>

              {/* Текст отзыва */}
              <p className="text-gray-600 mb-6">{review.text}</p>

              {/* Ответ клиники (если есть) */}
              <div className="pt-4 border-t border-gray-100">
                <div className="text-sm text-gray-500 italic">
                  "Спасибо за ваш отзыв! Рады, что вы остались довольны результатом."
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка оставить отзыв
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center gap-6 bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-800">Оставьте свой отзыв</h3>
            <p className="text-gray-600 max-w-lg">
              Поделитесь своим опытом посещения нашей клиники. Ваше мнение важно для нас!
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-slate-600 to-slate-800 hover:from-amber-700 hover:to-amber-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Написать отзыв
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}