"use client";
import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page({ params }) {
//   const { data: session } = useSession();
//   const router = useRouter();

//   useEffect(() => {
//     if (!session) {
//       router.push("./newlogin");
//     }
//   }, [session, router]);

  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setImageSrc(savedImage);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImageSrc(base64String);
        localStorage.setItem("profileImage", base64String);
      };
      reader.readAsDataURL(file);

      toast("Image saved!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };

//   if (!session) {
//     return null; // Prevent rendering if session is not available
//   }

  return (
    <>
      <ToastContainer />
      <div className="cover w-full relative">
        <Image
          className="object-cover w-full h-[350px]"
          src="/a_crowdfunding_platform_for_creators_to_fund_their_projects_a_place_where_your_fans_can_buy_you_a_chai_unleash_the_power_of_your_fans_and_get_your_projects_funded_can_you_make_this_content_in_the_frame (1).jpeg"
          alt="Cover Image"
          width={1920}
          height={350}
        />
        <div className="mycssinprofile">
          <div className="relative flex flex-col items-center">
            <Image
              className="border-white border-2 object-cover rounded-full w-[150px] h-[150px] cursor-pointer"
              src={
                imageSrc ||
                "/images.jpg"
              }
              alt="Profile"
              width={150}
              height={150}
              onClick={handleImageClick}
            />
            <div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity rounded-full"
              onClick={handleImageClick}
            >
              <span className="text-white text-lg cursor-pointer">
                Edit Image
              </span>
            </div>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
        </div>
      </div>
      <div className="info flex justify-center items-center my-16 flex-col p-10">
        <div className="font-bold text-1lg">@{params.username}</div>
        <div className="text-slate-400">
          Lets help <span>{params.username}</span> get a coffee!
        </div>
        <div className="text-slate-400">
          <span>0 Payments .</span>
          <span> ₹0 raised</span>
        </div>
        <div className="payment flex gap-4 w-[88%] mt-11">
          <div className="supporters w-1/2 bg-slate-800 rounded-lg text-white p-10 width100in700widthofDievice">
            <ul className="max-w-sm mt-6">
              <div className="mb-4 flex items-center justify-between">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  Supporters
                </h5>
                <a
                  href="#"
                  className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  View all
                </a>
              </div>
              <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {[
                    {
                      name: "Neil Sims",
                      email: "email@windster.com",
                      amount: "$320",
                    },
                    {
                      name: "Bonnie Green",
                      email: "email@windster.com",
                      amount: "$3467",
                    },
                    {
                      name: "Michael Gough",
                      email: "email@windster.com",
                      amount: "$67",
                    },
                    {
                      name: "Lana Byrd",
                      email: "email@windster.com",
                      amount: "$367",
                    },
                    {
                      name: "Thomas Lean",
                      email: "email@windster.com",
                      amount: "$2367",
                    },
                  ].map((supporter, index) => (
                    <li key={index} className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="shrink-0">
                          <Image
                            alt={`${supporter.name} image`}
                            height="32"
                            src="/userForTheFriendsToTesting/download-6.jpg"
                            width="32"
                            className="rounded-full"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                            {supporter.name}
                          </p>
                          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                            {supporter.email}
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          {supporter.amount}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ul>
          </div>
          <div className="supporters w-1/2 bg-slate-800 rounded-lg text-white p-10 width100in700widthofDievice leespaddinginphone">
            <h2 className="text-2xl font-bold my-4">Make a payment</h2>
            <div className="flex gap-4 flex-col">
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-700"
                placeholder="Enter Name"
              />
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-700"
                placeholder="Enter Message"
              />
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-700"
                placeholder="Enter Amount"
              />
              <button
                type="button"
                className="w-full p-1 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Pay
              </button>
            </div>
            <div className="flex gap-2 mt-3 slecttopaymoneyContainer">
              <button className="bg-slate-700 p-3 rounded-lg">Pay $10</button>
              <button className="bg-slate-700 p-3 rounded-lg">Pay $10</button>
              <button className="bg-slate-700 p-3 rounded-lg">Pay $10</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
