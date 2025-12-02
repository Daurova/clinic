// app/test-swiper/page.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Моковые данные для косметологической клиники
const specialOffers = [
  {
    id: 1,
    title: "Комплексное омоложение",
    description: "Контурная пластика + RF-лифтинг + мезотерапия",
    price: "35 000 ₽",
    oldPrice: "50 000 ₽",
    duration: "2 часа",
    badge: "ХИТ"
  },
  {
    id: 2,
    title: "Лазерная эпиляция",
    description: "Полный курс на 8 сеансов для всех зон тела",
    price: "65 000 ₽",
    oldPrice: "85 000 ₽",
    duration: "8 сеансов",
    badge: "СКИДКА 25%"
  },
  {
    id: 3,
    title: "Подарочный сертификат",
    description: "Сертификат на любую процедуру + бесплатная консультация",
    price: "от 10 000 ₽",
    oldPrice: "12 000 ₽",
    duration: "Любая услуга",
    badge: "ПОДАРОК"
  },
  {
    id: 4,
    title: "Акне-комплекс",
    description: "Полный курс лечения акне: чистка + пилинг + уход",
    price: "45 000 ₽",
    oldPrice: "60 000 ₽",
    duration: "5 процедур",
    badge: "НОВИНКА"
  },
  {
    id: 5,
    title: "Семейная скидка",
    description: "Приведите друга - получите скидку 20% на все процедуры",
    price: "Скидка 20%",
    oldPrice: "",
    duration: "Постоянно",
    badge: "ВЫГОДА"
  },
  {
    id: 6,
    title: "Бесплатная консультация",
    description: "Запишитесь на первую консультацию косметолога бесплатно",
    price: "0 ₽",
    oldPrice: "3 000 ₽",
    duration: "60 мин",
    badge: "БЕСПЛАТНО"
  }
];

export default function TestSwiperPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Спецпредложения косметологической клиники</h1>
      
      <Swiper
        modules={[Mousewheel, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        mousewheel={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={600}
        className="w-full"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
      >
        {specialOffers.map((offer) => (
          <SwiperSlide key={offer.id}>
            {/* Карточка в стиле вашего проекта */}
            <div className="
              group
              bg-gradient-to-br from-white to-gray-50
              rounded-2xl
              overflow-hidden
              shadow-lg
              border
              border-gray-200
              hover:shadow-2xl
              hover:border-blue-200
              transition-all
              duration-300
              h-full
              flex
              flex-col
            ">
              {/* Верхняя часть карточки */}
              <div className="p-6 flex flex-col flex-1">
                {/* Бейдж и время */}
                <div className="flex justify-between items-start mb-4">
                  <div className="
                    text-xs
                    font-bold
                    text-white
                    bg-gradient-to-r from-slate-500 to-slate-700
                    px-3
                    py-1.5
                    rounded-full
                    shadow-sm
                  ">
                    {offer.badge}
                  </div>
                  <div className="
                    text-xs
                    text-gray-600
                    font-medium
                    bg-blue-50
                    px-3
                    py-1.5
                    rounded-full
                    border
                    border-blue-100
                  ">
                    {offer.duration}
                  </div>
                </div>
                
                {/* Заголовок */}
                <h3 className="
                  text-lg
                  font-bold
                  text-gray-800
                  mb-3
                  line-clamp-2
                  group-hover:bg-gradient-to-r
                  group-hover:from-amber-700
                  group-hover:to-amber-800
                  group-hover:bg-clip-text
                  group-hover:text-transparent
                  transition-all
                  duration-300
                ">
                  {offer.title}
                </h3>
                
                {/* Описание */}
                <p className="
                  text-gray-600
                  text-sm
                  mb-6
                  line-clamp-3
                  leading-relaxed
                  flex-grow
                  min-h-[72px] /* Фиксированная минимальная высота для описания */
                ">
                  {offer.description}
                </p>
                
                {/* Нижняя часть с ценой и кнопкой */}
                <div className="mt-auto flex items-center justify-between gap-4 pt-4 border-t border-gray-100">
                  {/* Цены слева */}
                  <div className="min-w-0">
                    {/* Всегда показываем блок для старой цены, но с минимальной высотой */}
                    <div className="min-h-[24px] flex items-center">
                      {offer.oldPrice ? (
                        <div className="text-sm text-gray-400 line-through mb-1 whitespace-nowrap">
                          {offer.oldPrice}
                        </div>
                      ) : (
                        <div className="invisible text-sm">placeholder</div> /* Невидимый плейсхолдер */
                      )}
                    </div>
                    <div className="
                      text-2xl
                      font-bold
                      text-gray-900
                      truncate
                    ">
                      {offer.price}
                    </div>
                  </div>
                  
                  {/* Кнопка справа - компактная */}
                  <div className="relative group/btn flex-shrink-0">
                    <button className="
                      relative
                      px-5
                      py-2.5
                      bg-gradient-to-r
                      from-slate-600
                      to-slate-800
                      hover:from-amber-700
                      hover:to-amber-800
                      text-white
                      font-semibold
                      text-sm
                      tracking-wide
                      rounded-lg
                      transition-all
                      duration-300
                      shadow-md
                      hover:shadow-lg
                      transform
                      hover:-translate-y-0.5
                      active:translate-y-0
                      whitespace-nowrap
                    ">
                      <span className="
                        relative
                        z-20
                        flex
                        items-center
                        justify-center
                        gap-1.5
                      ">
                        Записаться
                        <svg 
                          className="
                            w-4
                            h-4
                            transition-transform
                            duration-300
                            group-hover/btn:translate-x-0.5
                          " 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                      
                      {/* Светящийся эффект */}
                      <div className="
                        absolute
                        inset-0
                        rounded-lg
                        bg-white
                        opacity-0
                        group-hover/btn:opacity-10
                        transition-opacity
                        duration-300
                        z-0
                      "></div>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Декоративная полоска внизу */}
              <div className="
                h-1
                bg-gradient-to-r
                from-transparent
                via-blue-200
                to-transparent
                opacity-30
              "></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}