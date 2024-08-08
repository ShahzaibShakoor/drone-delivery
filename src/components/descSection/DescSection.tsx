export default function DescSection() {
  return (
    <section className="grid grid-cols-[4fr_3fr] px-[16%] pt-24 pb-56 desc-background m-0 gap-4">
      <div className="flex flex-col gap-10 self-center">
        <h1 className="font-arealMT text-5xl w-[28rem]">
          Look, up in the <span className="text-[#34AAFF]">sky</span>, it’s your
          dinner
        </h1>
        <p className="font-openSans text-lg w-[40rem]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout.
        </p>
      </div>
      <div className="h-[33rem] w-[33rem] overflow-hidden rounded-lg image-shadow">
        <img
          src="/descImage.jpeg"
          alt=""
          className="h-full object-cover m-auto hover:scale-110 transition-transform duration-[400ms]"
        />
      </div>
    </section>
  );
}
