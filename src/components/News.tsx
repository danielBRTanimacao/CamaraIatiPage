import { useState, useEffect } from "react";

import NewImage from "../assets/images/news/newsImage.png";
import NewImage2 from "../assets/images/news/newImage2.png";
import NewImage3 from "../assets/images/events/event2.jpeg";
import NewImage4 from "../assets/images/events/reunion.png";
import NewImage5 from "../assets/images/events/pista.jpeg";
import NewImage6 from "../assets/images/events/barragem.jpeg";

export default () => {
  const images = [NewImage3, NewImage, NewImage2];
  const newsIati = [
    {
      img: NewImage6,
      title: "Água para o povo local: Projeto promete abastecer a comunidade por décadas.",
    },
    {
      img: NewImage2,
      title: "Reunião para a economia: Governo traça planos para impulsionar crescimento do país.",
    },
    {
      img: NewImage4,
      title: "Reunião na Câmara: Vereadores debatem projeto de lei para o orçamento municipal.",
    },
    {
      img: NewImage5,
      title:
        "Motocross na cidade: O melhor da região faz história e atrai pilotos e público de todo o país.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 className="pb-5 text-2xl font-extrabold flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-newspaper"
          viewBox="0 0 16 16"
        >
          <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
          <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z" />
        </svg>
        <span>Principais Noticias</span>
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <article className="relative row-span-2 overflow-hidden rounded-lg">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className={`absolute inset-0 w-full h-[25rem] object-cover transition-opacity duration-1000 ease-in-out ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </article>
        <a
          href="#"
          className="block h-40 w-full rounded-lg bg-[url(https://passagenspromo.com.br/blog/wp-content/uploads/2019/06/pontos-turisticos-de-pernambuco-recife.jpg)] bg-cover bg-center transition-all duration-500 ease-in-out hover:scale-105"
        ></a>
        <a
          href="#"
          className="block h-40 w-full rounded-lg bg-[url(https://www.maladeaventuras.com/wp-content/uploads/2024/08/recife.jpg)] bg-cover bg-center transition-all duration-500 ease-in-out hover:scale-105"
        ></a>
      </section>
      <aside className="pt-5 text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 justify-items-center">
        {newsIati.map((item, key) => (
          <div
            key={key}
            className={`
        w-full max-w-xs 
        ${key === 0 ? "block" : "hidden"} 
        ${key === 1 ? "sm:block" : ""} 
        ${key === 2 ? "md:block" : ""} 
        ${key === 3 ? "md:block" : ""}
      `}
          >
            <img src={item.img} alt="img-noticia" className="w-full h-48 object-cover" />
            <p className="text-gray-500 pt-2 text-base leading-4">{item.title}</p>
          </div>
        ))}
      </aside>
    </>
  );
};
