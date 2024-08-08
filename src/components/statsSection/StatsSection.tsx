import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

export default function StatsSection() {
  const [trigger, setTrigger] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setTrigger(true)}
      onExit={() => setTrigger(false)}
    >
      <section className="grid grid-cols-2 stats-background h-[33rem] px-[16%] justify-items-center text-white">
        <div className="self-center">
          <p className="font-arealMT text-lg text-[#34aaff] mb-1">
            Get to Know Us
          </p>
          <h1 className="font-arealMT text-5xl mb-9">
            Best Service to
            <br />
            fulfil your expectations.
          </h1>
          <p className="font-openSans text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
            enim sollicitudin, viverra est vel, volutpat orci. Maecenas at
            velit.
          </p>
        </div>
        <div className="grid grid-cols-2 w-full h-full">
          <div className="self-center justify-self-center w-full text-center border-r-2 border-dotted">
            <h1 className="font-arealMT text-[4rem]">
              {trigger && (
                <CountUp start={0} end={900} duration={3} delay={0} />
              )}
              <sup className="font-openSans text-3xl text-[#34aaff] align-super">
                +
              </sup>
            </h1>
            <p className="font-openSans text-base">Happy Customers</p>
          </div>
          <div className="self-center justify-self-center w-full text-center">
            <h1 className="font-arealMT text-[4rem]">
              {trigger && (
                <CountUp start={0} end={90000} duration={3} delay={0} />
              )}
              <sup className="font-openSans text-3xl text-[#34aaff] align-super">
                +
              </sup>
            </h1>
            <p className="font-openSans text-base">Deliveries</p>
          </div>
          <div className="self-center justify-self-center w-full text-center border-r-2 border-dotted">
            <h1 className="font-arealMT text-[4rem]">
              {trigger && <CountUp start={0} end={50} duration={3} delay={0} />}
              <sup className="font-openSans text-3xl text-[#34aaff] align-super">
                +
              </sup>
            </h1>
            <p className="font-openSans text-base">Drones</p>
          </div>
          <div className="self-center justify-self-center w-full text-center">
            <h1 className="font-arealMT text-[4rem]">
              {trigger && (
                <CountUp start={0} end={100} duration={3} delay={0} />
              )}
              <sup className="font-openSans text-3xl text-[#34aaff] align-super">
                +
              </sup>
            </h1>
            <p className="font-openSans text-base">Trusted Partners</p>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
}
