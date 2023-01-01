import React from "react";
import { CiBullhorn } from "react-icons/ci";
import { TbHeartRateMonitor } from "react-icons/tb";

function About() {
  return (
    <div className="w-full my-32">
      <div className="font-Rubik max-w-[1240px]  mx-auto w-full text-white  md:mx-auto flex flex-col ">
        <h1 class="text-center text-[2.4rem] text-[var(--text-primary)]">
          A Gala That Celebrates{" "}
          <span class="text-[#f82067]">Philanthropy</span>{" "}
        </h1>
        <p className="text-white text-center">
          Lorem Ipsum is simply dummy text of the printing and typesettings
          industry. Lorem Ipsum has been <br />{" "}
          <span className="text-center">
            the industry's Standard dummy text ever since
          </span>
        </p>
      </div>

      <div class="my-28 flex flex-col place-content-stretch  text-center  sm:space-x-0  md:flex-row  justify-center">
        <div>
          <div className="my-10 mx-48">
          <CiBullhorn color="blue" size={42} spacing="1rem" />
          </div>
         
          <h2 className="text-white text-2xl font-bold">Glittering Shows</h2>
          <p className="text-white text my-4">
            Apparently we had reached a great height in <br /> the atmosphere
            for the sky was a dead black <br /> had ceased to twinkle
          </p>
        </div>


        <div>
          <div className="my-10 mx-48 place-content-center">
            <TbHeartRateMonitor color="#f82067" size={42} spacing="1rem" />
          </div>

          <h2 className="text-white text-2xl font-bold">Excited Attendees</h2>
          <p className="text-white text my-4">
            Apparently we had reached a great height in <br /> the atmosphere
            for the sky was a dead black <br /> had ceased to twinkle
          </p>
        </div>


        <div>
        <div className="my-10 mx-48">
          <CiBullhorn color="blue" size={42} spacing="1rem" />
          </div>
         
          <h2 className="text-white text-2xl font-bold">Gala Dinner</h2>
          <p className="text-white text my-4">
            Apparently we had reached a great height in <br /> the atmosphere
            for the sky was a dead black <br /> had ceased to twinkle
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
