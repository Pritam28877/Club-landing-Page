import React from "react";
// import Backgroundimg from "../assets/louis-hansel-yLUvnCFI500-unsplash.jpg"
import Brg from "../assets/new-1.jpg";

function Hero() {
  return (
    <div class="w-full h-[90vh]">
      <img class="w-full h-full object-cover" src={Brg} alt="BackgroundImg" />
      <div className="max-w-[1140px] m-auto text-white">
        <div className="absolute top-[40%]">
          <h2 className="font-Rubik text-5xl italic">Be Part of an <span class='text-[#A6F114]'>Extraordinary</span></h2>
          <h2 className="text-[#A6F114] font-Rubik text-5xl mt-3">Gala Event</h2>
          <p className="mt-6">
            Apparently we had reacherd a great height in the atmoshere.for the<br />
            sky was a dead,back and the start had the crased to twinkle.By the<br />
            same illsion whish lifts the horizon of the seee to the level of the<br />
            spectator
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
