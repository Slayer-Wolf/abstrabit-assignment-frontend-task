import React from "react";

export const InfoCard = ({
  fdPlan,
  depositAmt,
  tennure,
  interestRate,
  cardName,
  calendarName,
  date,
  btnPrimary,
  secondaryBtn,
}) => {
  return (
    <div className="flex flex-col gap-6 px-4 py-5 xl:w-[390px] 2xl:w-[400px] text-neutral-800 bg-white border-b-[0.5px] border-neutral-400">
      <h3 className="font-semibold text-sm">{cardName}</h3>
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-neutral-500 text-xs">{calendarName}</h2>
          <div className="flex flex-col w-16 ">
            <h4 className="text-neutral-1000 font-semibold text-2xl bg-[#0000000D] text-center">
              {date.split(" ")[0]}
            </h4>
            <h4 className="bg-red-400 text-neutral-200 text-center text-[10px]">{`${
              date.split(" ")[1]
            } ${date.split(" ")[2]}`}</h4>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-sm">{fdPlan}</h4>
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-neutral-500 text-sm">Deposit Amt</h3>
              <h3 className="text-neutral-800 text-sm font-bold">
                {depositAmt}
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-neutral-500 text-sm">Tennure</h3>
              <h3 className="text-neutral-800 text-sm font-bold">{tennure}</h3>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-neutral-500 text-sm">Interest Rate</h3>
              <h3 className="text-neutral-800 text-sm font-bold">
                {interestRate}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between  gap-4">
        <button className="bg-[#3B39D9] rounded text-neutral-200 px-4 py-2 text-center">
          {btnPrimary}
        </button>
        <button className="border-[#3B39D9] border-[1px] rounded bg-white text-[#3B39D9] px-4 py-2 text-center">
          {secondaryBtn}
        </button>
      </div>
    </div>
  );
};
