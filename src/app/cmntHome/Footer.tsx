import React from "react";
import { footerLinks } from "./data";

function Footer() {
  return (
    <div className="mb-20  border-t-1 border-gray-200  pt-9">
      <div className="flex  lg:justify-between max-lg:flex-col items-start gap-10">
        <div className="flex flex-col gap-4">
          <img src="logo.svg" className="w-30" alt="" />
          <p className="text-gray-500">Carthub 2013</p>
          <p className="text-gray-500">All Rigths Reserved ©</p>
        </div>
        <div className="flex justify-between max-lg:w-full lg:w-[60%] items-center">
          {footerLinks.map((fot, index) => (
            <div key={index} className="flex flex-col gap-5">
              <h1 className="text-xl">{fot.title}</h1>
              {fot.links.map((link, index) => (
                <p
                  key={index}
                  className="text-gray-500 cursor-pointer hover:underline hover:text-blue-500"
                >
                  {link.title}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-30 flex justify-between items-center">
        <p className="text-gray-500">©Carthub 2023.All Rigths Reserved </p>
        <div className="flex gap-5">
          <p className="text-gray-500 cursor-pointer hover:underline hover:text-blue-500">Privacy Policy</p>
          <p className="text-gray-500 cursor-pointer hover:underline hover:text-blue-500">Term of use</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
