"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { BsPersonFillAdd } from "react-icons/bs";

const AddProfile = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/addProfile")}
      className="flex flex-col justify-center items-center   ease-in profile_container cursor-pointer "
    >
      <BsPersonFillAdd className="rounded-md mb-1 profile_icon  text-gray-400 hover:bg-gray-500 border-[1px] border-gray-300" />

      <p className="text-center text-sm lg:text-base text-gray-400 ease-in">
        Add profile
      </p>
    </div>
  );
};

export default AddProfile;
