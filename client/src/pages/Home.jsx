import React from "react";
import fabCon from "../assets/icon-facebook.svg";
import twtCon from "../assets/icon-twitter.svg";
import pntCon from "../assets/icon-pinterest.svg";
import insCon from "../assets/icon-instagram.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import Tmp from "../modules/shorten/ShortenForm";


const Home = () => {

    return (
      <div className="overflow-hidden">
        <div className=" w-full flex flex-col-reverse justify-center items-center my-8 mb-28 lg:flex-row lg:justify-between lg:pl-24">
          <div className="flex-col flex font-poppins items-center lg:items-start">
            <h1 className="text-4xl font-extrabold lg:text-7xl mb-1 text-[#35323e] text-center lg:text-left">
              More than just{" "}
            </h1>
            <h1 className="text-4xl font-extrabold lg:text-7xl mb-1 text-[#35323e] text-center lg:text-left">
              shorter links
            </h1>
            <p className="text-xl text-[#bfbfbf] font-thin text-center px-9 lg:px-0 lg:text-left lg:mb-10 mb-6">
              Build your brand's recognition and get detailed{" "}
              <br className="hidden md:block" /> insights on how your links are
              performing.
            </p>
            <button className=" w-[55%] lg:w-[40%] py-3 font-poppins text-2xl text-white tracking-wide font-bold bg-[#2acfcf] rounded-full">
              Get Started
            </button>
          </div>
          <div className="w-[87%] h-[21rem] md:h-[482px]  mr-[-65px] lg:w-[633px] lg:h-[482px] bg-cover bg-[url('./assets/illustration-working.svg')] bg-no-repeat lg: "></div>
        </div>
        <div className="bg-[#bfbfbf]/20 w-full h-auto pb-16 relative flex flex-col items-center">
          <div className=" absolute top-[-3.4rem] lg:w-[80%] h-32 w-[90%] bg-no-repeat bg-cover rounded-[0.6rem] bg-[#3b3054] bg-[url('./assets/bg-shorten-desktop.svg')]">
            <Tmp/>
          </div>
          <div className=" lg:mt-36 mt-28 text-center  font-poppins">
            {" "}
            <h1 className="text-[#35323e] font-extrabold text-3xl lg:text-4xl my-2">
              Advanced Statistics
            </h1>{" "}
            <p className="px-2 lg:px-0 text-[#bfbfbf] text-lg text-">
              Track how your links are performing across the web with{" "}
              <br className="md:block hidden" /> our advanced statistics
              dashboard.
            </p>
          </div>

          <div className="lg:w-[75%] flex lg:flex-row flex-col items-center  h-[380px] justify-around relative my-56 lg:my-12 font-poppins font-bol space-y-12 ">
            <hr className="lg:border-[0.4rem] border-4 border-[#2acfcf] w-80 lg:w-[75%] absolute rotate-90 lg:rotate-0" />
            <div className=" shadow-sm w-72 h-60 relative pb-8 p-3 pt-16 bg-white rounded-md flex flex-col lg:self-start items-center ">
              <div className="p-4 bg-[#3b3054] rounded-full absolute top-[-30px] justify-self-center self-center lg:left-4">
                <div className="w-[45px] bg-cover h-[45px] bg-[url('./assets/icon-brand-recognition.svg')]"></div>
              </div>
              <h1 className="font-poppins text-xl text-[#35323e] my-2 self-center lg:self-start font-bold">
                Brand Recognition
              </h1>
              <p className="text-[15px] text-[#bfbfbf]  self-center lg:self-start text-center lg:text-start">
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content{" "}
              </p>
            </div>
            <div className="shadow-sm w-72 h-60 relative pb-8 p-3 pt-16 bg-white rounded-md flex flex-col items-center">
              <div className="p-4 bg-[#3b3054] rounded-full absolute top-[-30px] justify-self-center self-center lg:left-4">
                <div className="w-[45px] bg-cover h-[45px] bg-[url('./assets/icon-detailed-records.svg')]"></div>
              </div>
              <h1 className="font-poppins text-xl text-[#35323e] my-2 self-center lg:self-start  font-bold">
                Detailed records
              </h1>
              <p className="text-[15px] text-[#bfbfbf]  self-center lg:self-start text-center lg:text-start">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
            <div className="shadow-sm w-72 h-60 relative p-3 pb-8 pt-16 bg-white rounded-md flex flex-col items-center lg:self-end">
              <div className="p-4 bg-[#3b3054] rounded-full absolute top-[-30px] justify-self-center self-center lg:left-4">
                <div className="w-[45px] bg-cover h-[45px] bg-[url('./assets/icon-fully-customizable.svg')]"></div>
              </div>
              <h1 className="font-poppins text-xl text-[#35323e] my-2 self-center lg:self-start  font-bold">
                Fully Customizable
              </h1>
              <p className="text-[15px] text-[#bfbfbf]  self-center lg:self-start text-center lg:text-start">
                Improve brand awareness and content discoverability through
                customizable links. supercharging audience engagement.
              </p>
            </div>
          </div>

          <div className=" mt-24 lg-mt-4 bg-[#3b3054] w-full h-[250px] bg-no-repeat bg-cover bg-[url('./assets/bg-boost-desktop.svg')] flex flex-col items-center justify-center">
            <h1 className="text-3xl sm:text-4xl font-poppins font-extrabold text-white mb-8">
              {" "}
              Boost your links today
            </h1>
            <button className=" px-8  py-3 font-poppins text-xl sm:text-2xl text-white tracking-wide font-bold bg-[#2acfcf] rounded-full">
              Get Started
            </button>
          </div>

          <div className="w-full bg-[#232127] mb-[-65px] space-y-12 py-24 lg:space-y-0 flex flex-col lg:flex-row lg:justify-around justify-center items-center lg:items-start px-24">
            <div className="lg:w-[32%]"><Logo className="fill-white stroke-white stroke-2"/></div>
            <div className="flex flex-col space-y-2 font-poppins font-bold text-center lg:text-start">
              <h1 className="text-white tracking-wide mb-3">Features</h1>
              <p className="text-[#bfbfbf] font-light">Link Shortening</p>
              <p className="text-[#bfbfbf] font-light">Branded Links</p>
              <p className="text-[#bfbfbf] font-light">Analytics</p>
            </div>
            <div className="flex flex-col space-y-2 font-poppins font-bold text-center lg:text-start">
              <h1 className="text-white tracking-wide mb-3">Resources</h1>
              <p className="text-[#bfbfbf] font-light">Blog</p>
              <p className="text-[#bfbfbf] font-light">Developers</p>
              <p className="text-[#bfbfbf] font-light">Support</p>
            </div>
            <div className="flex flex-col space-y-2 font-poppins font-bold text-center lg:text-start">
              <h1 className="text-white tracking-wide mb-3">Company</h1>
              <p className="text-[#bfbfbf] font-light">About</p>
              <p className="text-[#bfbfbf] font-light">Out Team</p>
              <p className="text-[#bfbfbf] font-light">Carers</p>
              <p className="text-[#bfbfbf] font-light">Contact</p>
            </div>
            <div className="flex space-x-4">
              <img src={twtCon} alt="facebook icon" />
              <img src={fabCon} alt="facebook icon" />
              <img src={pntCon} alt="facebook icon" />
              <img src={insCon} alt="facebook icon" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;