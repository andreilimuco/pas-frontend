import { BsFillCheckCircleFill } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <div className="relative pb-12">
        <img src="./images/auto-care-frontPage.png"></img>
        <div className="absolute inset-0 grid grid-cols-2 mx-auto max-w-6xl">
          <div></div>
          <div className="relative">
            <div className="absolute inset-x-0 top-1/3">
              <div className="mb-9 flex justify-end">
                <div className="text-white text-7xl">Car Insurance</div>
              </div>
              <div className="flex justify-end">
                <button className="rounded-lg bg-white text-red-700 py-4 px-10">
                  Click HERE for Quotation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 mx-auto max-w-6xl pt-12 pb-12">
        <div>
          <div className="text-4xl font-bold mb-7">
            Buy Car Insurance with Auto Care
          </div>

          <div className="mb-4">
            Choose from multiple insurance providers, choose the best quote and
            purchase online within minutes!
          </div>

          <div className="flex">
            <div className="pt-1 pr-1">
              <BsFillCheckCircleFill color="14B711" />
            </div>
            <div className="mb-4 italic text-gray-400 align-baseline">
              Compare quotes from multiple insurance providers.
            </div>
          </div>

          <div className="flex">
            <div className="pt-1 pr-1">
              <BsFillCheckCircleFill color="14B711" />
            </div>
            <div className="mb-4 italic text-gray-400">
              Provide your vehicle and personal details, it only takes 5
              minutes.
            </div>
          </div>

          <div className="flex">
            <div className="pt-1 pr-1">
              <BsFillCheckCircleFill color="14B711" />
            </div>
            <div className="mb-4 italic text-gray-400">
              Pay for your policy on AutoDeal using your credit card, GCash or
              PayPal.
            </div>
          </div>

          <div className="flex">
            <div className="pt-1 pr-1">
              <BsFillCheckCircleFill color="14B711" />
            </div>
            <div className="mb-4 italic text-gray-400">
              Receive your e-policy within 1-3 business days to your email
              inbox.
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <img className="w-50" src="./images/car-pic.jpg"></img>
          </div>
        </div>
      </div>

      <div className="mt-10 mx-auto max-w-6xl pt-12 pb-12">
        <div className="text-4xl font-bold mb-7">
          What is Car Insurance & how does it work in the Philippines?
        </div>
        <div className="mb-3">
          Car insurance is first of all required by law before you are allowed
          to drive your vehicle on a public road. Secondly your car insurance is
          for your financial protection when you have damages to your car or
          cause damage to another vehicle. The insurance policy is a financial
          contract between yourself and the insurance provider, shielding you
          from major financial loss.
        </div>
        <div className="mb-3">
          The amount of protection you get from your car insurance policy is
          determined by the yearly premium that you pay and therefore the
          options included in your policy. At a minimum it is mandated that all
          vehicle owners get Compulsory Third Party Liability Insurance (CTPL),
          which covers death and injury of third parties but minimally covers
          the driver or it’s passengers. Most vehicle owners are looking for
          further protection and opt for comprehensive insurance, which
          compensates the policyholder for financial losses due to physical
          damage, bodily injury resulting from vehicle collision, theft, fire,
          or any damage that may arise from incidents in a vehicle.
        </div>
        <div className="mb-7">
          A responsible vehicle owner should protect themselves from vehicle
          repair costs, hospitalization fees, and help protect other vehicle
          owners.
        </div>
        <div className="flex mb-4">
          <div className="pt-1 pr-1">
            <BsFillCheckCircleFill color="14B711" />
          </div>
          <div>
            <span className="font-bold">Property</span> – such as damage to or
            theft of your car
          </div>
        </div>
        <div className="flex mb-4">
          <div className="pt-1 pr-1">
            <BsFillCheckCircleFill color="14B711" />
          </div>
          <div>
            <span className="font-bold">Liability</span> – your legal
            responsibility to others for bodily injury or property damage
          </div>
        </div>
        <div className="flex mb-4">
          <div className="pt-1 pr-1">
            <BsFillCheckCircleFill color="14B711" />
          </div>
          <div>
            <span className="font-bold">Medical</span> – the cost of treating
            injuries, rehabilitation and sometimes lost wages and funeral
            expenses
          </div>
        </div>
      </div>
    </>
  );
}
