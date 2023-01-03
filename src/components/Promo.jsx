import React from "react";
import BarkBox from "../assets/promotions/barkbox.png";
import PackLeashes from "../assets/promotions/pack.png";
const Promo = () => {
  return (
    <div name="promo" className="w-full h-full bg-[white] text-black">
      <div className="w-full h-[60px]" />
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Promotions
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-32 mx-auto" src={PackLeashes} alt="HTML icon" />
            <p className="my-4">CODE:ETTASHEP</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-42 mx-auto" src={BarkBox} alt="HTML icon" />
            <p className="my-4">
              Use my
              <a href="https://www.talkable.com/x/dAPcn6"> Link</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
