import { IconButton } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';

export default function Hero() {
  return (
    <header className="hero-shadow">
      <div className="w-full h-[85vh] hero-clip overflow-hidden relative flex flex-col justify-between py-7">
        {/* <img
          className="-z-10 brightness-50 -mt-[5%] absolute top-0 w-full "
          src="/hero.png"
          alt="Hero Image"
        /> */}
        <video
          src="/heroVideo.mp4"
          muted
          controls
          autoPlay
          loop
          className="-z-10 brightness-50 -mt-[5%] absolute top-0 w-full"
        ></video>
        <div className="grid grid-cols-2 px-[16%] text-base h-[80%] grid-rows-[64px_1fr]">
          <div className="flex justify-between items-center col-span-2">
            <div className="flex items-end gap-1">
              <img
                src="/favicon.ico"
                alt="Logo"
                className="w-[46.32px] h-[46.32px] mix-blend-luminosity"
              />
              <span className="font-sulphurPoint text-base leading-4 text-white w-28 h-8">
                Food Delivery by Drones
              </span>
            </div>
            <div>
              <IconButton>
                <MenuRoundedIcon sx={{ color: '#fff' }} fontSize="large" />
              </IconButton>
            </div>
          </div>
          <div className="self-center">
            <h1 className="font-alphaSlab text-7xl text-[#34AAFF] w-[560px] h-[168px]">
              Delivery <span className="text-white">Just Got</span> Faster...
            </h1>
            <p className="font-openSans text-2xl text-white w-[432px] h-[66px]">
              Enjoy faster and efficient delivery with Our AI Powered Drones.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <p className="font-openSans text-white text-xs">Scroll Down</p>
            <KeyboardDoubleArrowDownRoundedIcon
              sx={{ color: '#fff' }}
              fontSize="large"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
