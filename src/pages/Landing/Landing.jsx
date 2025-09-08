import {
  Avatar,
  Accordion,
  Select,
  FileInput,
  Radio,
  Label,
  TextInput,
} from "flowbite-react";
import React, { useRef, useEffect, useState, Suspense } from "react";
import { Link } from "react-router-dom";
import { BsArrowDown } from "../../assets/icons";

import { leftArrow, logoMain, rightArrow } from "../../assets/images/images";

const Landing = () => {
  return (
    <div className="lg:pt-0">
      {/* <div className="bg-[#f9f9f9] mb-6 border-t border-[#c7c7c7] border-b py-3">
        <div className="lg:flex justify-center items-center gap-2 text-center px-4 lg:px-0">
          <img
            src={logoMain}
            alt="logoMain"
            className="w-[32px] inline-block"
          />
          <p className="lg:text-[21px] font-semibold">
            <span className="font-bold">Automate</span> The Creation Of Your
            Print-On-Demand Products
          </p>
        </div>
      </div> */}
      <div className="bg-[#f9f9f9] lg:w-8/12 mx-auto p-4 rounded-md border border-[#c7c7c7] mb-10">
        <div className="lg:flex items-center gap-3">
          <Select className="lg:w-8/12 mb-2 lg:mb-0">
            <option>Select Store</option>
          </Select>
          {/* <button className="bg-[#1f2937] text-white px-4 py-2 rounded-lg hover:bg-[#374151] lg:w-4/12 text-sm">
            Load Saved Operation
          </button> */}
        </div>
      </div>
      <div className="bg-[#f9f9f9] lg:w-8/12 mx-auto p-4 rounded-md border border-[#c7c7c7] mb-8 lg:mb-20">
        <h2 className="text-base font-semibold pb-4 text-center">
          Upload File
        </h2>
        <FileInput id="file-upload" />
        <div className="lg:flex items-center mt-4">
        </div>
      </div>
      <div className="mb-10 flex justify-center items-center">
        <button className="bg-[#1f2937] text-white text-[18px] font-medium px-4 py-2 rounded-lg hover:bg-[#374151] w-full lg:w-4/12">
          Create My Products!
        </button>
      </div>
    </div>
  );
};

export default Landing;
