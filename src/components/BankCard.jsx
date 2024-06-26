import React from "react";
export const BankCard = ({
  logo,
  bgColor,
  primaryBg,
  secondaryBg,
  bankName,
  checkImg,
  checkList,
  interest,
}) => {
  return (
    <section
      className={`rounded-sm ${bgColor} ring-4 ring-white px-3 py-3 flex flex-col gap-3 xss:w-[300px] md:w-[320px] lg:w-[400px]`}
    >
      <div className="flex items-center gap-3">
        <img
          src={logo}
          width={bankName === "Shriram Finance" ? 40 : 50}
          height={50}
          alt="bank-logo"
        />
        <h3 className="text-neutral-800 font-semibold text-xs">{bankName}</h3>
      </div>
      <div className="flex items-center gap-1">
        <div
          className={`text-neutral-800 rounded-sm text-xs flex items-center gap-2 p-1 min-w-14`}
        >
          {checkList.map((check, index) => (
            <div
              key={index}
              className={`flex xss:text-[9px] sm:text-[10px] lg:text-xs items-center gap-1 ${secondaryBg} px-2 py-2 rounded-md min-w-32`}
            >
              <img src={checkImg} width={14} height={12} alt="check" />
              <span>{check}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-neutral-500 text-xs">Interest Upto</h2>
          <h2 className="text-neutral-800 text-xs font-semibold">{interest}</h2>
        </div>
        <button
          className={`px-5 py-2 rounded-md text-neutral-100 ${primaryBg} text-sm text-center`}
        >
          Book Now
        </button>
      </div>
    </section>
  );
};
