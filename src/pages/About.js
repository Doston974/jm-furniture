import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Heading from "../common/Heading";

const about = [
  {
    id: 1,
    job: "Bosh direktor",
    name: "Atakulov Raxmon",
    description: "Jannat makon asoschisi",
    img: "/img/derektor.jpg",
  },
  {
    id: 2,
    job: "Direktor",
    name: "Raximov Davron Raxmonovich",
    description:
      "Jannat Makon asoschilaridan biri. Moliyaviy ishlar bo'yicha direktor",
    img: "/img/direktor2.png",
  },
  {
    id: 3,
    job: "Buhgalter",
    name: "Xojaahmad",
    description: "2023-yildan boshlab Jannat makonda buhgalter bo'lib ishlaydi",
    img: "/img/bughalter.png",
  },
  {
    id: 4,
    job: "Marketing direktori",
    name: "Sadikov Umar Alidjanovich",
    description:
      "2023-yildan beri menejer sifatida ishlaydi va mahsulotni reklama qilish uchun javobgardir",
    img: "/img/market.png",
  },
];

export default function About() {
  const NextArrow = (props) => (
    <div {...props} className="slick-arrow next-arrow">
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );

  const PrevArrow = (props) => (
    <div {...props} className="slick-arrow prev-arrow">
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white mt-16 text-center">
      <Heading
        title="Rahbariyat"
        description=""
      />
      <div className="bg-white mx-16 overflow-hidden text-center h-[500px]">
        <Slider {...settings}>
          {about.map((item) => (
            <div key={item.id}>
              <div className="max-w-[350px] m-4 transition-transform transform hover:scale-105 hover:text-red-600">
                <div className="bg-gray-100 h-[430px] p-4 hover:bg-white hover:shadow-md transition-all duration-300">
                  <img
                    src={item.img}
                    title={item.category}
                    alt={item.category}
                    className="mx-auto"
                  />
                  <div className="flex flex-col gap-3 mt-4">
                    <div className="font-semibold uppercase">{item.job}</div>
                    <div className="font-semibold text-sm uppercase">
                      {item.name}
                    </div>
                    <div className="font-semibold text-sm uppercase">
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
