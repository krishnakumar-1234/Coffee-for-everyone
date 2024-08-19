import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <main className="p-6 bac">
        <h2 className="pb-2 lineheight-500 newfontSizeonepointfifty">
          About Get Me a Chai
        </h2>
        <p className="text-1xl lineheight">
          Get Me a Chai is a crowdfunding platform designed for creators to fund
          their projects with the support of their fans. It&apos;s a space where
          your fans can directly contribute to your creative endeavors by buying
          you a chai. Unlock the potential of your fanbase and bring your
          projects to life.
        </p>
        <h2 className="pb-2 lineheight-500 newfontSizeonepointfifty pt-10 pb-2">
          How It Works
        </h2>
        <div className="flex items-center pb-10 flexdirectionchange">
          <div className="flex items-center justify-center gap-4 flexdirectionchange">
            <Image
              className="p-3 bg-slate-700 rounded-full"
              width={130}
              height={100}
              src="/landingPageIcons/wired-flat-955-demand.gif"
              alt="groupimage"
            />
            <div>
              <h2 className="pb-2 lineheight-500 newfontSizeonepointfifty">
                Fans Want to Collaborate
              </h2>
              <p className="text-1xl lineheight">
                Your fans are enthusiastic about collaborating with you on your
                projects.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 flexdirectionchange">
            <Image
              className="p-3 bg-slate-700 rounded-full"
              width={130}
              height={100}
              src="/landingPageIcons/wired-flat-298-coins.gif"
              alt="coins"
            />
            <div>
              <h2 className="pb-2 lineheight-500 newfontSizeonepointfifty">
                Support Through Chai
              </h2>
              <p className="text-1xl lineheight">
                Receive support from your fans in the form of chai purchases,
                directly contributing to your project funding.
              </p>
            </div>
          </div>
        </div>
        <ul className="lineheight pb-10">
          <h2 className="pb-2 lineheight-500 newfontSizeonepointfifty">
            Benefits for Creators
          </h2>
          <li className="text-1xl bean">
            Direct financial support from your fanbase
          </li>
          <li className="text-1xl bean">
            Engage with your fans on a more personal level
          </li>
          <li className="text-1xl bean">
            Access to a platform tailored for creative projects
          </li>
        </ul>
        <ul className="lineheight pb-10">
          <h2 className="pb-2 lineheight-500 newfontSizeonepointfifty">
            Benefits for Fans
          </h2>
          <li className="text-1xl bean">
            Directly contribute to the success of your favorite creators
          </li>
          <li className="text-1xl bean">
            Exclusive rewards and perks for supporting creators
          </li>
          <li className="text-1xl bean">
            Be part of the creative process and connect with creators
          </li>
        </ul>
        <ul className="lineheight pb-10">
          <h2 className="pb-2 lineheight-500 newfontSizeonepointfifty">
            Benefits of Collaboration
          </h2>
          <li className="text-1xl bean">
            Unlock new opportunities through collaboration with fellow creators
          </li>
          <li className="text-1xl bean">
            Expand your network and reach a wider audience
          </li>
          <li className="text-1xl bean">
            Combine skills and resources to create innovative projects
          </li>
        </ul>
        <ul className="lineheight pb-10">
          <h2 className="pb-2 lineheight-500 newfontSizeonepointfifty">
            Community Engagement
          </h2>
          <li className="text-1xl bean">
            Interact with a supportive community of like-minded individuals
          </li>
          <li className="text-1xl bean">
            Receive valuable feedback and encouragement from peers
          </li>
          <li className="text-1xl bean">
            Participate in discussions and events centered around your interests
          </li>
        </ul>
        <ul className="lineheight pb-10">
          <h2 className="pb-2 lineheight-500 newfontSizeonepointfifty">
            Access to Resources
          </h2>
          <li className="text-1xl bean">
            Gain access to resources such as tutorials, templates, and tools
          </li>
          <li className="text-1xl bean">
            Receive guidance and mentorship from experienced creators
          </li>
          <li className="text-1xl bean">
            Stay updated on industry trends and best practices
          </li>
        </ul>
        <ul className="lineheight pb-10">
          <h2 className="pb-2 lineheight-500 newfontSizeonepointfifty">
            Recognition and Exposure
          </h2>
          <li className="text-1xl bean">
            Showcase your work to a global audience and gain recognition
          </li>
          <li className="text-1xl bean">
            Feature in promotional materials and campaigns
          </li>
          <li className="text-1xl bean">
            Build your portfolio and increase your credibility as a creator
          </li>
        </ul>
        <ul className="lineheight pb-10">
          <h2 className="pb-2 lineheight-500 newfontSizeonepointfifty">
            Supportive Community
          </h2>
          <li className="text-1xl bean">
            Join a community that values creativity, diversity, and inclusivity
          </li>
          <li className="text-1xl bean">
            Find encouragement and inspiration from fellow members
          </li>
          <li className="text-1xl bean">
            Collaborate on projects and share resources for mutual growth
          </li>
        </ul>
      </main>
    </>
  );
}
