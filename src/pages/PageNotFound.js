import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <>
      <div className="relative">
        <img src="./images/dark-road.png"></img>
        <div className="flex">
          <div className="absolute left-0 right-0 top-24 mx-auto max-w-6xl">
            <div className="w-1/3 mb-10">
              <div className="text-4xl mb-10">
                We can't find the page you are looking for.
              </div>
              <div>Sorry for the inconvenience.</div>
            </div>
            <Link to="/">
              <button className="py-4 px-10 bg-red-600 rounded-lg text-white">
                Back to Home Page
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl border-t border-slate-300 pb-10"></div>

      <div className="pt-10 pb-10 mx-auto max-w-6xl">
        <div className="mb-9">More Information</div>
        <div className="mb-9 text-gray-500">Get a Quote</div>
        <div className="mb-9 text-gray-500">Privacy policy</div>
        <div className="mb-9 text-gray-500">Contact Us</div>
        <div className="mb-9 text-gray-500">About Us</div>
      </div>

    </>
  );
}
