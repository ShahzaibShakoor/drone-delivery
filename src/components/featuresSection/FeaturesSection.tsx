import FeatureCard from '../featureCard/FeatureCard';

export default function FeaturesSection() {
  return (
    <section className="px-[16%] pb-24 bg-[#FDFCFA] -m-1">
      <div className="flex flex-col items-center gap-9 mb-24">
        <h1 className="font-arealMT text-5xl text-center">
          The food you love,
          <br />
          drone delivered in <span className="text-[#34AAFF]">5 minutes</span>
        </h1>
        <p className="font-openSans text-xl">
          Deliver anything from hot food to medicine in minutes.
        </p>
      </div>
      <div className="grid grid-cols-3 justify-items-center">
        <FeatureCard
          image="/featureCard1.png"
          title="Backyard Delivery"
          description="We’re the first delivery service tailored for the US suburbs. Anything you need – from Chinese takeout to your morning coffee – instantly delivered to your yard!"
        />
        <FeatureCard
          image="/featureCard2.png"
          title="24/7 Support"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra orci sed risus tincidunt tempor. Nulla malesuada vestibulum nibh."
        />
        <FeatureCard
          image="/featureCard3.png"
          title="Sky-high Service"
          description="We use certified drones to deliver your goods directly to your yard – no rush hour traffic included. We’re the safest and fastest delivery option, guaranteed!"
        />
      </div>
    </section>
  );
}
