import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default () => {
    return (
        <section className="bg-yl h-120 my-10 py-12">
            <div className="container">
                <h3 className="text-3xl text-center text-white font-extrabold pb-3">
                    VEREADORES
                </h3>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={20}
                    className="rounded-lg"
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                        1280: { slidesPerView: 6 },
                    }}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                        <SwiperSlide key={item} className="flex justify-center">
                            <div
                                className="
                                    flex items-end text-white font-bold
                                    h-80 w-55 rounded-xl bg-cover bg-center
                                    shadow-lg
                                    bg-[url(https://passagenspromo.com.br/blog/wp-content/uploads/2019/06/pontos-turisticos-de-pernambuco-recife.jpg)]
                                "
                            >
                                <aside className="p-3 text-shadow-lg rounded-md">
                                    <p>Nome do vereador {item}</p>
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
