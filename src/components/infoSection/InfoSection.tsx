export default function InfoSection() {
  return (
    <section className="grid grid-cols-[3fr_4fr] mx-[16%] my-24 gap-16">
      <div className="grid grid-cols-3 gap-5 h-96">
        <div className="h-full overflow-hidden rounded-lg row-span-2 image-shadow">
          <img
            src="/infoImage1.jpeg"
            alt=""
            className="h-full object-cover m-auto hover:scale-110 transition-transform duration-[400ms]"
          />
        </div>
        <div className="w-full overflow-hidden rounded-lg col-span-2 image-shadow">
          <img
            src="/infoImage2.jpeg"
            alt=""
            className="w-full object-cover m-auto hover:scale-110 transition-transform duration-[400ms]"
          />
        </div>
        <div className="w-full overflow-hidden rounded-lg col-span-2 image-shadow">
          <img
            src="/infoImage3.jpeg"
            alt=""
            className="w-full object-cover m-auto hover:scale-110 transition-transform duration-[400ms]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 justify-center">
        <h1 className="font-arealMT text-5xl max-w-[29rem]">
          Scalable, Low-Cost Drone Delivery.
        </h1>
        <p className="font-openSans text-xl">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout.
        </p>
      </div>
    </section>
  );
}
