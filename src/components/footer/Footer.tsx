import {
  EmailRounded,
  FacebookRounded,
  Instagram,
  LinkedIn,
  LocationOn,
  PhoneRounded,
  Twitter,
  YouTube,
} from '@mui/icons-material';

export default function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-3 mx-[16%] my-10">
        <div className="flex flex-col gap-8">
          <div className="flex items-end gap-1">
            <img
              src="/favicon.ico"
              alt="Logo"
              className="w-[46.32px] h-[46.32px] mix-blend-luminosity grayscale"
            />
            <span className="font-sulphurPoint text-base leading-4 text-black w-28 h-8">
              Food Delivery by Drones
            </span>
          </div>
          <p className="font-openSans text-base w-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
            enim sollicitudin, viverra est vel, volutpat orci. Maecenas at
            velit.
          </p>
        </div>
        <div className="flex flex-col justify-self-center gap-8">
          <p className="text-4xl font-arealMT text-[#34AAFF]">Get in touch</p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <PhoneRounded sx={{ color: '#34AAff' }} />
              <span className="font-openSans text-base font-semibold">
                +1 234 567 890
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <EmailRounded sx={{ color: '#34AAff' }} />
              <span className="font-openSans text-base font-semibold">
                anymail@mail.com
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <LocationOn sx={{ color: '#34AAff' }} />
              <span className="font-openSans text-base font-semibold">
                Jl. Oberoi X 69, Kuta - 80234
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-self-end gap-8">
          <p className="text-4xl font-arealMT text-[#34AAFF]">Follow us</p>
          <div className="flex gap-5">
            <FacebookRounded />
            <Twitter />
            <Instagram />
            <LinkedIn />
            <YouTube />
          </div>
        </div>
      </div>
      <hr />
      <div className="h-16 flex items-center justify-center">
        <p className="font-openSans text-base">
          Copyright © 2024 Food Delivery by Drones
        </p>
      </div>
    </footer>
  );
}
