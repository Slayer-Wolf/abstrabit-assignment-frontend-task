import React from "react";
import { GoChevronDown } from "react-icons/go";
import { PortfolioChart } from "./PortfolioChart";
export const Portfolio = () => {
  return (
    <section className="lg:w-[399px] lg:h-[270px] xs:w-[400px] bg-white flex flex-col gap-6 rounded-md px-4 py-3 text-neutral-700 shadow-xl">
      <div className="flex items-center justify-between text-sm ">
        <h2 className="font-semibold ">Your FD Portfolio</h2>
        <button
          type="button"
          className="flex items-center gap-1 rounded-md border-[0.5px] border-silver-300 px-3 py-2"
        >
          <span>Deposit Amt</span>
          <GoChevronDown />
        </button>
      </div>
      <div className="flex items-center gap-7">
        <PortfolioChart />
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 text-[10px] sm:text-xs">
            <span className="md:w-3 md:h-3 w-2 h-2 bg-[#6C63FF] rounded-3xl" />
            <p>Bajaj Finserve</p>
          </div>
          <div className="flex items-center gap-3 text-[10px] sm:text-xs">
            <span className="md:w-3 md:h-3 w-2 h-2 bg-[#FA9D17] rounded-3xl" />
            <p>Shriram Finance</p>
          </div>
          <div className="flex items-center gap-3 text-[10px] sm:text-xs">
            <span className="md:w-3 md:h-3 w-2 h-2 bg-[#B9C606] rounded-3xl" />
            <p>Mahindra Finance</p>
          </div>
          <div className="flex items-center gap-3 text-[10px] sm:text-xs">
            <span className="md:w-3 md:h-3 w-2 h-2 bg-[#59CBD3] rounded-3xl" />
            <p>Utkarsh Small Finance Bank</p>
          </div>
        </div>
      </div>
    </section>
  );
};
