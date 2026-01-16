import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

import BgUrl from "../assets/images/camara-bg.webp";
import { useEffect, useState } from "react";

interface Councilor {
    id: number;
    nome_parlamentar: string;
    fotografia: string;
    partido: string;
}

export default () => {
    const formatImgUrl = (url: string) => {
        if (!url) return "";
        return url.replace("http://103.199.185.123:8084", "/media-proxy");
    };

    const [councilors, setCouncilors] = useState<Councilor[]>([]);
    const [errorLoad, setErrorLoad] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${
                        import.meta.env.VITE_API_URL
                    }/parlamentares/legislatura/1/parlamentares/?get_all=true`
                );
                if (!response.ok) throw new Error("Falha ao buscar dados");
                const data = await response.json();
                setCouncilors(data);
                setErrorLoad("");
            } catch (error) {
                setErrorLoad("Erro ao carregar pagina de vereadores");
                console.error("Erro ao carregar vereadores:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="text-center py-10">Carregando vereadores...</div>;
    if (errorLoad) return <div className="text-center py-10">{errorLoad}</div>;

    return (
        <section
            className="bg-amber-300 h-150 mt-10 py-30 bg-no-repeat bg-center bg-cover"
            style={{
                backgroundImage: `url(${BgUrl})`,
            }}
        >
            <div className="container">
                <h3 className="text-3xl text-center text-white font-extrabold pb-3">VEREADORES</h3>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={20}
                    className="rounded-lg overflow-visible swiper-with-padding"
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            centeredSlides: true,
                        },
                        640: {
                            slidesPerView: 2,
                            centeredSlides: true,
                        },
                        1024: {
                            slidesPerView: 3,
                            centeredSlides: true,
                        },
                        1280: {
                            slidesPerView: 5,
                            centeredSlides: true,
                        },
                    }}
                >
                    {councilors.map((councilor) => (
                        <SwiperSlide
                            key={councilor.id}
                            className="flex items-center justify-center"
                        >
                            <a
                                href={`http://103.199.185.123:8084/parlamentar/${councilor.id}`}
                                className="block flex items-center justify-center transform transition-transform duration-500 hover:scale-110 mx-auto"
                            >
                                <div
                                    className="flex items-end text-white font-bold h-80 w-55 rounded-xl bg-center bg-cover shadow-lg"
                                    style={{
                                        backgroundImage: `url(${formatImgUrl(councilor.fotografia)})`,
                                    }}
                                >
                                    <aside className="p-3 text-shadow-lg rounded-b-md bg-black/40 w-full text-center">
                                        <p>{councilor.nome_parlamentar}</p>
                                        <p className="text-sm font-normal">{councilor.partido}</p>
                                    </aside>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
