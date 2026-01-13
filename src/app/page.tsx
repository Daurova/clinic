import Card from "@/entities/components/card/Card";
import TestSwiperPage from "@/entities/components/Swiper/Swiper";
const services = [
  {
    id: 1,
    title: "Контурная пластика",
    description: "Коррекция и увеличение объема губ, скул, подбородка с помощью филлеров премиум-класса",
    photo: "/images/hearts.jpg",
    duration: "30-45 мин",
    price: "от 15 000 ₽"
  },
  {
    id: 2,
    title: "Ботокс и диспорт",
    description: "Инъекции для разглаживания морщин и коррекции мимических заломов",
    photo: "",
    duration: "20-30 мин",
    price: "от 8 500 ₽"
  },
  {
    id: 3,
    title: "Лазерная эпиляция",
    description: "Удаление волос навсегда на любых зонах с использованием современного лазера",
    photo: "",
    duration: "15-60 мин",
    price: "от 3 500 ₽"
  },
  {
    id: 4,
    title: "Чистка лица",
    description: "Профессиональная чистка лица с ультразвуком и механической обработкой",
    photo: "",
    duration: "1 час 15 мин",
    price: "от 6 000 ₽"
  },
  {
    id: 5,
    title: "Химический пилинг",
    description: "Глубокое обновление кожи, устранение пигментации и постакне",
    photo: "",
    duration: "40-60 мин",
    price: "от 7 500 ₽"
  },
  {
    id: 6,
    title: "Мезотерапия",
    description: "Введение витаминных коктейлей и гиалуроновой кислоты для омоложения",
    photo: "/images/preparaty.jpg",
    duration: "30-40 мин",
    price: "от 5 000 ₽"
  },
  {
    id: 7,
    title: "RF-лифтинг",
    description: "Радиочастотный лифтинг для подтяжки кожи и сокращения морщин",
    photo: "/images/rfapparat.jpg",
    duration: "45-60 мин",
    price: "от 12 000 ₽"
  },
  {
    id: 8,
    title: "Плазмотерапия",
    description: "Омоложение с использованием собственной плазмы пациента (PRP-терапия)",
    photo: "/images/kapelnica.jpg",
    duration: "30-45 мин",
    price: "от 9 000 ₽"
  },
  {
    id: 9,
    title: "Нитевой лифтинг",
    description: "3D-подтяжка лица и тела с использованием биоразлагаемых нитей",
    photo: "",
    duration: "1-2 часа",
    price: "от 35 000 ₽"
  },
  {
    id: 10,
    title: "Коррекция фигуры",
    description: "Комплекс процедур для коррекции веса и коррекции силуэта",
    photo: "/images/rfzhivot.jpg",
    duration: "60-90 мин",
    price: "от 8 000 ₽"
  },
  {
    id: 11,
    title: "Лечение акне",
    description: "Комплексный подход к лечению проблемной кожи и постакне",
    photo: "",
    duration: "1 час",
    price: "от 6 500 ₽"
  },
  {
    id: 12,
    title: "Пилинг Джесснера",
    description: "Глубокое обновление кожи для выравнивания тона и текстуры",
    photo: "",
    duration: "45 мин",
    price: "от 10 000 ₽"
  }
];
export default function Home() {
  return(
    <>
    <TestSwiperPage></TestSwiperPage>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              title={service.title}
              description={service.description}
              photo={service.photo}
              duration={''}
              price={''}
              badge = {''}
            />
          ))}
        </div>
        </>)
}
