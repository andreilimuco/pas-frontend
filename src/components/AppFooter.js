import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export default function AppFooter() {
  const currentYr = new Date().getFullYear();

  return (
    <>
      <div className="pb-10 mx-auto max-w-6xl border-t border-slate-300"></div>

      <div className="flex mx-auto max-w-6xl pb-10">
        <div>AUTO CARE © {currentYr}</div>
        <div className="ml-auto flex">
          <div className="mr-2">
            <BsFacebook color="9CB0BC" />
          </div>
          <div className="mr-2">
            <BsTwitter color="9CB0BC" />
          </div>
          <div className="mr-2">
            <BsInstagram color="9CB0BC" />
          </div>
          <div>
            <BsLinkedin color="9CB0BC" />
          </div>
        </div>
      </div>
    </>
  );
}
