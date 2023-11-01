export default function Section({ position, foodBack }) {
  return (
    <section
      className={`w-full h-[500px] bg-white text-black flex ${position} bg-cover bg-center`}
      style={{ backgroundImage: `url(${foodBack})` }}
    >
      <div className="flex flex-col w-1/2 p-12 justify-center items-center bg-white bg-opacity-80">
        <small className="font-bold text-base">JOIN TODAY</small>
        <h2 className="font-bold text-3xl mb-4">JOIN THE REAL DEAL</h2>
        <p className="leading-8 text-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          necessitatibus aperiam nihil incidunt iure laborum similique
          doloremque, magnam totam sed nemo libero, velit adipisci natus fuga
          cumque dolorum quas doloribus.
        </p>
        <button className="font-bold text-base px-12 py-2 my-6 outline-black outline-2 outline hover:outline-8">
          JOIN HERE
        </button>
      </div>
    </section>
  );
}
