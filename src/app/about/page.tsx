// app/about/page.tsx
export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-500 to-slate-700 bg-clip-text text-transparent">
              О НАС
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Pinova Center — это премиальная косметологическая клиника, где встречаются 
            передовые технологии и индивидуальный подход к каждому клиенту.
          </p>
        </div>

        {/* Контент */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Наша философия</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Мы верим, что настоящая красота — это гармония внешнего вида и внутреннего состояния. 
                Наша миссия — помочь каждому клиенту раскрыть свою естественную красоту, 
                используя безопасные и эффективные методики.
              </p>
              <p>
                В Pinova Center работают только сертифицированные специалисты с медицинским образованием, 
                которые регулярно повышают квалификацию и следят за новейшими тенденциями в косметологии.
              </p>
              <p>
                Мы используем оборудование премиум-класса от ведущих мировых производителей 
                и только сертифицированные препараты, что гарантирует безопасность и качество процедур.
              </p>
            </div>

            {/* Преимущества */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl mb-2">10+</div>
                <div className="text-sm text-gray-600">Лет на рынке</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl mb-2">5000+</div>
                <div className="text-sm text-gray-600">Довольных клиентов</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl mb-2">50+</div>
                <div className="text-sm text-gray-600">Процедур в арсенале</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl mb-2">15+</div>
                <div className="text-sm text-gray-600">Сертифицированных специалистов</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Наши принципы</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Индивидуальный подход к каждому клиенту</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Только безопасные и проверенные методики</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Конфиденциальность и комфорт</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Постоянное обучение специалистов</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">Гарантия результата</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}