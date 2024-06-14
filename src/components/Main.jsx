import { Portfolio } from "./Portfolio";
import { BankInfo, InformationCard } from "./helpers";
import { BankCard } from "./BankCard";
import { Faq } from "./Faq";
import { InfoCard } from "./InfoCard";
import { MaturityTimeline } from "./MaturityTimeline";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col px-10 xl:px-5 2xl:px-36 gap-5 py-8 bg-black-haze-50 bg-[#f7f8fa]">
      <div className="self-start">
        <h5 className="text-neutral-800 font-2xl font-semibold">
          Welcome, Johan Paul
        </h5>
      </div>
      <div className="flex items-center gap-7 w-fit flex-wrap">
        <Portfolio />
        <section className=" bg-white flex flex-col gap-3 rounded-md px-4 py-4 text-neutral-700 shadow-lg">
          <h5 className="font-semibold text-sm">FD Maturity Timeline</h5>
          <MaturityTimeline />
        </section>
      </div>
      <section className="flex gap-7 items-center flex-wrap">
        <div className="flex items-center flex-col gap-7">
          <div className="flex gap-7 flex-wrap xs:w-[440px] md:w-[670px] lg:w-[828px]">
            {BankInfo?.map((bank) => (
              <BankCard {...bank} key={bank.bankName} />
            ))}
          </div>
          <Faq />
        </div>
        <div className="flex flex-col items-center xl:items-start ">
          {InformationCard?.map((info) => (
            <InfoCard key={info.cardName} {...info} />
          ))}
        </div>
      </section>
    </main>
  );
}
