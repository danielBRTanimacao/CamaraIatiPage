import { useState, useEffect } from "react";

import NewImage from "../assets/images/news/newsImage.png";
import NewImage2 from "../assets/images/news/newImage2.png";

export default () => {
  const images = [
    "https://images.myguide-cdn.com/recife/blog/top-6-beaches-in-pernambuco/large/top-6-beaches-in-pernambuco-287290.jpg",
    NewImage,
    NewImage2,
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
      <aside className="pt-5 text-center flex justify-between">
        <div className="w-80">
          <img
            className="h-40 w-80"
            src="https://www.maladeaventuras.com/wp-content/uploads/2024/08/recife.jpg"
            alt="img-noticia"
          />
          <p className="text-gray-500 pt-1 text-base/4">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
        <div className="w-80">
          <img
            className="h-40 w-80"
            src="https://www.maladeaventuras.com/wp-content/uploads/2024/08/recife.jpg"
            alt="img-noticia"
          />
          <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="w-80">
          <img
            className="h-40 w-80"
            src="https://www.maladeaventuras.com/wp-content/uploads/2024/08/recife.jpg"
            alt="img-noticia"
          />
          <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="w-80">
          <img
            className="h-40 w-80"
            src="https://www.maladeaventuras.com/wp-content/uploads/2024/08/recife.jpg"
            alt="img-noticia"
          />
          <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </aside>
    </>
  );
};
