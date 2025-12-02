// app/prices/page.tsx
const priceCategories = [
  {
    category: "Инъекционная косметология",
    services: [
      { name: "Контурная пластика губ", price: "15 000 ₽" },
      { name: "Контурная пластика скул", price: "25 000 ₽" },
      { name: "Ботокс (1 зона)", price: "8 500 ₽" },
      { name: "Диспорт (1 зона)", price: "9 000 ₽" },
      { name: "Мезотерапия лица", price: "5 000 ₽" },
      { name: "Биоревитализация", price: "7 500 ₽" },
    ]
  },
  {
    category: "Аппаратная косметология",
    services: [
      { name: "Лазерная эпиляция (подмышки)", price: "3 500 ₽" },
      { name: "Лазерная эпиляция (ноги полностью)", price: "12 000 ₽" },
      { name: "RF-лифтинг лица", price: "12 000 ₽" },
      { name: "Ультразвуковая чистка лица", price: "6 000 ₽" },
      { name: "Фототерапия", price: "8 000 ₽" },
      { name: "Криолиполиз", price: "15 000 ₽" },
    ]
  },
  {
    category: "Эстетические процедуры",
    services: [
      { name: "Комплексная чистка лица", price: "6 000 ₽" },
      { name: "Химический пилинг", price: "7 500 ₽" },
      { name: "Альгинатная маска", price: "2 500 ₽" },
      { name: "Массаж лица", price: "3 000 ₽" },
      { name: "Уходовая программа", price: "от 5 000 ₽" },
      { name: "Пилинг Джесснера", price: "10 000 ₽" },
    ]
  },
];

export default function PricesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-500 to-slate-700 bg-clip-text text-transparent">
              ЦЕНЫ
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Прозрачное ценообразование без скрытых платежей. 
            Точную стоимость процедуры вы можете узнать на консультации.
          </p>
        </div>

        {/* Цены по категориям */}
        <div className="space-y-8">
          {priceCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-200 to-gray-300 px-6 py-4">
                <h3 className="text-xl font-bold text-gray-800">{category.category}</h3>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                      <div className="text-gray-700">{service.name}</div>
                      <div className="font-bold text-gray-900">{service.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Примечание о ценах */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-8 border border-blue-100">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Уточнение стоимости</h3>
              <p className="text-gray-600 mb-6">
                Окончательная цена процедуры определяется на консультации с косметологом 
                и зависит от индивидуальных особенностей, объема работы и используемых препаратов.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Первая консультация — бесплатно</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Рассрочка на процедуры</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Скидки на комплекс процедур</span>
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center">
                <div className="text-5xl mb-4">💰</div>
                <div className="text-2xl font-bold text-gray-800 mb-2">Рассрочка</div>
                <div className="text-gray-600">до 12 месяцев</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}