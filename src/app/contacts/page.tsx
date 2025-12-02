// app/contacts/page.tsx
export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-500 to-slate-700 bg-clip-text text-transparent">
              КОНТАКТЫ
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Мы всегда рады вам! Запишитесь на консультацию или задайте интересующие вопросы.
          </p>
        </div>

        {/* Контактная информация */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Левая часть - контакты */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Контактная информация</h3>
              
              <div className="space-y-6">
                {/* Адрес */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 mb-1">Адрес</div>
                    <div className="text-gray-600">г. Владикавказ, ул. Александра Козаева, д. 10</div>
                    <div className="text-gray-500 text-sm mt-1">БЦ &quot;Название&quot;, 2 этаж</div>
                  </div>
                </div>

                {/* Телефон */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 mb-1">Телефон</div>
                    <div className="text-2xl font-bold text-gray-900 hover:text-amber-700 transition-colors duration-300">
                      +7 (928) 928-51-10
                    </div>
                    <div className="text-gray-500 text-sm mt-1">Ежедневно с 9:00 до 21:00</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 mb-1">Email</div>
                    <div className="text-gray-600">info@pinovacenter.ru</div>
                    <div className="text-gray-500 text-sm mt-1">Ответим в течение 24 часов</div>
                  </div>
                </div>

                {/* Социальные сети */}
                <div className="pt-6 border-t border-gray-100">
                  <div className="font-bold text-gray-800 mb-4">Мы в соцсетях</div>
                  <div className="flex gap-4">
                    {['Instagram', 'Telegram', 'VK', 'WhatsApp'].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 rounded-lg transition-colors duration-300 font-medium"
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Правая часть - форма и расписание */}
          <div className="space-y-8">
            {/* Форма записи
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Записаться на консультацию</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Имя *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Телефон *</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Услуга</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition">
                    <option value="">Выберите услугу</option>
                    <option value="consultation">Консультация</option>
                    <option value="botox">Ботокс</option>
                    <option value="laser">Лазерная эпиляция</option>
                    <option value="contour">Контурная пластика</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Сообщение</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Ваш вопрос или пожелание"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-slate-600 to-slate-800 hover:from-amber-700 hover:to-amber-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Отправить заявку
                </button>
              </form>
            </div> */}

            {/* Расписание */}
            <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Режим работы</h3>
              <div className="space-y-3">
                {[
                  { day: 'Понедельник - Пятница', time: '9:00 - 21:00' },
                  { day: 'Суббота', time: '10:00 - 20:00' },
                  { day: 'Воскресенье', time: '10:00 - 18:00' },
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-blue-100 last:border-b-0">
                    <div className="font-medium text-gray-700">{schedule.day}</div>
                    <div className="font-bold text-gray-800">{schedule.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}