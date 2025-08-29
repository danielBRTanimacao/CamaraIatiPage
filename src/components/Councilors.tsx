import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Ver1 from "../assets/images/councilors/ver1.jpeg";
import Ver2 from "../assets/images/councilors/ver2.jpeg";
import Ver3 from "../assets/images/councilors/ver3.jpeg";
import Ver4 from "../assets/images/councilors/ver4.jpeg";
import Ver5 from "../assets/images/councilors/ver5.jpeg";
import Ver6 from "../assets/images/councilors/ver6.jpeg";
import Ver7 from "../assets/images/councilors/ver7.jpeg";
import Ver8 from "../assets/images/councilors/ver8.jpeg";
import Ver9 from "../assets/images/councilors/ver9.jpeg";
import Ver10 from "../assets/images/councilors/ver10.jpeg";
import Ver11 from "../assets/images/councilors/ver11.jpeg";

import BgUrl from "../assets/images/camara-bg.jpeg";

const Councilors = [
  { name: "Edvaldo Cordeiro", img: Ver1 },
  { name: "Jose Cicero", img: Ver2 },
  { name: "Antonio Texeira", img: Ver3 },
  { name: "Erlan Tenório", img: Ver4 },
  { name: "Cicero Pereira", img: Ver5 },
  { name: "Taciano Mota", img: Ver6 },
  { name: "Everaldo Pereira", img: Ver7 },
  { name: "Joselio Terezino", img: Ver8 },
  { name: "Renato Almeida", img: Ver9 },
  { name: "Rodrigo Ferreira", img: Ver10 },
  { name: "Arthur Tavares", img: Ver11 },
];

export default () => {
  return (
    <section
      className="bg-amber-300 h-120 my-10 py-12 bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(${BgUrl})`,
      }}
    >
      <div className="container">
        <h3 className="text-3xl text-center text-white font-extrabold pb-3">VEREADORES</h3>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={10}
          className="rounded-lg"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 5 },
          }}
        >
          {Councilors.map((councilor, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div
                className="flex items-end text-white font-bold h-80 w-55 rounded-xl bg-center bg-cover"
                style={{ backgroundImage: `url(${councilor.img})` }}
              >
                <aside className="p-3 text-shadow-lg rounded-md">
                  <p>{councilor.name}</p>
                  <p>Partido dele</p>
                </aside>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
