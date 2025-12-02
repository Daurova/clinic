import Image from "next/image";
export default function Card ({title, description, photo, price, duration, badge}:{title:string, description: string, photo: string, price: string, duration: string, badge: string}) {
   return (
    <div className="
      group
      bg-gradient-to-br from-white to-gray-50
      rounded-2xl
      overflow-hidden
      shadow-lg
      border
      border-gray-100
      hover:shadow-2xl
      hover:border-blue-200
      transition-all
      duration-500
      flex
      flex-col
      h-full
    ">
      {/* Контейнер для изображения */}
      {photo && (
        <div className="relative h-56 w-full overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200">
          <Image
            src={photo}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="
              object-cover
              group-hover:scale-110
              transition-transform
              duration-700
              ease-out
            "
          />
          {/* Градиентная накладка */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      )}
      
      {/* Контент карточки */}
      <div className="p-6 flex flex-col flex-1">
        {/* Заголовок */}
        <h3 className="
          text-2xl
          font-bold
          mb-3
          bg-gradient-to-r from-slate-500 to-slate-700
          bg-clip-text
          text-transparent
          group-hover:from-amber-700
          group-hover:to-amber-800
          transition-all
          duration-500
          line-clamp-2
        ">
          {title}
        </h3>
        
        {/* Описание */}
        <p className="
          text-gray-600
          text-base
          mb-6
          flex-1
          leading-relaxed
          line-clamp-3
        ">
          {description}
        </p>
        
        {/* Кнопка - стили как в навигации хедера */}
        <div className="relative">
          <button className="
            relative
            w-full
            px-6
            py-3
            text-gray-700
            hover:text-gray-900
            transition-all
            duration-300
            group/btn
            z-10
          ">
            <span className="
              relative
              z-20
              font-semibold
              text-sm
              tracking-wide
              flex
              items-center
              justify-center
              gap-2
            ">
              Подробнее
              <svg 
                className="
                  w-4
                  h-4
                  transition-transform
                  duration-300
                  group-hover/btn:translate-x-1
                " 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            
            {/* Фон кнопки при hover - как в навигации хедера */}
            <div className="
              absolute
              inset-0
              bg-slate-50
              rounded-xl
              opacity-0
              group-hover/btn:opacity-100
              transition-opacity
              duration-300
              z-0
            "></div>
            
            {/* Светящийся эффект как в навигации */}
            <div className="
              absolute
              inset-0
              rounded-xl
              bg-blue-200
              opacity-0
              group-hover/btn:opacity-10
              transition-opacity
              duration-300
              blur-sm
              z-0
            "></div>
          </button>
          
          {/* Декоративная полоска под кнопкой */}
          <div className="
            h-0.5
            mt-2
            bg-gradient-to-r
            from-transparent
            via-blue-200
            to-transparent
            opacity-0
            group-hover:opacity-60
            transition-opacity
            duration-500
          "></div>
        </div>
      </div>
      
      {/* Декоративный элемент внизу карточки */}
      <div className="
        h-1
        bg-gradient-to-r
        from-transparent
        via-blue-200
        to-transparent
        opacity-30
      "></div>
    </div>
  );

}