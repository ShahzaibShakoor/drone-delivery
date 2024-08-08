export default function FeatureCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center w-full h-full gap-10 shadow p-6 rounded-xl hover:-translate-y-7 hover:shadow-2xl transition-all duration-[400ms]">
      <img src={image} alt="" className="mix-blend-darken h-24" />
      <h1 className="text-center font-arealMT text-4xl">{title}</h1>
      <p className="text-center font-openSans text-base">{description}</p>
    </div>
  );
}
