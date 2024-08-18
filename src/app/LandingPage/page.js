import React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const page = () => {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 items-center text-white h-[40vh] homeheading">
        <div className="font-bold text-5xl flex justify-center items-center gap-2 bymecoffeeTextSmall">
          Get Me a Coffee
          <span>
            <Image
              className="invertGlobal"
              src="/landingPageIcons/wired-lineal-1702-electric-teapot.gif"
              width={100}
              height={80}
              alt="image"
              priority
              layout="intrinsic"
            />
          </span>
        </div>
        <p className="lineheight">
          A crowdfunding platform for creators to fund their projects.
        </p>
        <p className="lineheight -mt-3">
          A place where your fans can buy you a chai. Unleash the power of your
          fans and get your projects funded.
        </p>
        <div className="containerForStartAndReadMoreButton">
          <Link href="/newlogin">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Start here
            </button>
          </Link>
          <Link href="/readmore">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Read more
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-gray-800 h-1"></div>

      <div className="text-white container mx-auto pb-36">
        <h1 className="text-3xl font-bold text-center my-14">
          Your fans can buy a coffee
        </h1>
        <div className="flex gap-5 justify-around infoabouthomepage">
          <div className="item space-y-3 flex flex-col items-center justify-center boxinphone">
            <Image
              className="bg-slate-600 rounded-full p-2 imageIn"
              width={130}
              height={200}
              src="/landingPageIcons/wired-flat-268-avatar-man.gif"
              alt="image"
              loading="lazy"
              layout="intrinsic"
            />
            <p className="font-bold bean">Fans want to help</p>
            <p className="text-center">
              Your fans are available to support you
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center boxinphone">
            <Image
              className="bg-slate-600 rounded-full p-2 imageIn"
              width={130}
              height={200}
              src="/landingPageIcons/wired-flat-298-coins.gif"
              alt="image"
              loading="lazy"
              layout="intrinsic"
            />
            <p className="font-bold bean">Fans want to contribute</p>
            <p className="text-center">
              Your fans are willing to contribute financially
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center boxinphone">
            <Image
              className="bg-slate-600 rounded-full p-2 imageIn"
              width={130}
              height={200}
              src="/landingPageIcons/wired-flat-955-demand.gif"
              alt="image"
              loading="lazy"
              layout="intrinsic"
            />
            <p className="font-bold bean">Fans want to collaborate</p>
            <p className="text-center">
              Your fans are ready to collaborate with you
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 h-1 mb-20"></div>

      <div className="text-white container mx-auto pb-36">
        <h1 className="text-3xl font-bold text-center mb-14">
          Learn more about us
        </h1>
        <div className="w-[100%] flex justify-center items-center p-5 pt-0">
          <iframe
            className="border rounded"
            width={806}
            height={453}
            src="https://www.youtube.com/embed/sjwO61_Tcqg"
            title="WELCOME TO ON JARVIS"
            referrerPolicy="strict-origin-when-cross-origin"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(page), { ssr: false });
