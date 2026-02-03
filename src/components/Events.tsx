import EventPhoto from '../assets/images/events/event1.webp';
import NotFound from '../assets/svgs/not-found.svg';

export default () => {
  const eventData = [
    {
      day: '29',
      month: 'Agosto',
      time: '11:00 - 12:00',
      title: '10° reunião ordinária do terceiro período legislativo',
      adress: 'R. Padre Nelson B Carvalho',
      img: EventPhoto,
    },
    {
      day: '09',
      month: 'Janeiro',
      time: '9:00 - 11:00',
      title: 'Inauguração do ano legislativo de 2026',
      adress: 'R. Padre Nelson B Carvalho',
      img: EventPhoto,
    },
  ];

  const finalEvents = [
    ...eventData.slice(0, 4),
    ...Array(Math.max(0, 4 - eventData.length)).fill(null),
  ];

  return (
    <section className="pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {finalEvents.map((item, index) => (
        <div
          key={index}
          className={`w-full rounded-2xl border-1 border-gray-300 ${
            item ? '' : 'flex items-center justify-center'
          }`}
        >
          {item ? (
            <>
              <div
                className="rounded-[12px_12px_0_0] h-45 bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="bg-white float-left m-3 py-1 px-3 text-center rounded-lg">
                  <h3 className="font-bold text-xl">{item.day}</h3>
                  <p className="font-light opacity-50">{item.month}</p>
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-xl font-extrabold">{item.title}</h3>
                <p className="pt-2">
                  <strong>Horario:</strong> {item.time}
                </p>
                <p className="pb-4">
                  <strong>Local:</strong> {item.adress}
                </p>
                <div className="pb-4">
                  <a
                    href="#agenda"
                    className="flex justify-center border border-gray-300 p-2 rounded hover:border-gray-600 hover:bg-gray-200"
                  >
                    Ver agenda
                  </a>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center flex-col justify-center h-60 text-center gap-5 text-gray-500">
              <img src={NotFound} width={150} alt="" />
              <h3 className="text-lg font-bold mx-2">Ainda não temos novos eventos</h3>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};
