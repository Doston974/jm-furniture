import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Heading from "../common/Heading";

const shop = [
  {
    id: 1,
    name: "Jannat makon",
    description:
      "Jannat makon do'konlar tarmogi 2017-yildan buyon o'z faoliyatini yuritib keladi",
    img: "/img/jm.png",
  },
  {
    id: 2,
    job: "Sag gilamlari",
    description:
      "Tarix va zamonaviylikni o'zida mujassam etgan, klassik uslubdagi bejirim naqshlarga ega gilamlar to'plami",
    img: "/img/sag.png",
  },
  {
    id: 3,
    name: "Urgaz",
    description:
      "Markaziy Osiyoda gilam, tufting va sun’iy qoplamalar ishlab chiqarish bo‘yicha yetakchi korxona hisoblanadi. ",
    img: "/img/urgaz.png",
  },
  {
    id: 4,
    name: "Zarhal",
    description:
      "Zarhal Mebel Do'koni uyingizni beqiyos go'zallik va qulaylik bilan to'ldirish uchun zamonaviy dizaynlar va yuqori sifatli mebellarini taklif etadi.",
    img: "/img/zarhal.png",
  },
];

const Shop = () => {
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
    slidesToShow: 4,
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
      <Heading title="Do'konlarimiz" description="" />
      <div className="bg-white mx-16 overflow-hidden text-center h-[500px]">
        <Slider {...settings}>
          {shop.map((item) => (
            <div key={item.id}>
              <div className="max-w-[320px] m-4 transition-transform transform hover:scale-105 hover:text-red-600">
                <div className="bg-gray-100 h-[400px] p-4 hover:bg-white hover:shadow-md transition-all duration-300">
                  <img
                    src={item.img}
                    title={item.category}
                    alt={item.category}
                    className="mx-auto h-[190px]"
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
};

export default Shop;
