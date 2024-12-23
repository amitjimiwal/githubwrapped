"use client";
import { RefreshCcw } from "lucide-react";
import React from "react";

const ReloadButton = () => {
  return (
    <div
      className="p-2 bg-purple-500 rounded-full hover:bg-purple-700 transition-colors duration-300"
      onClick={() => window.location.reload()}
    >
      <RefreshCcw
        size={24}
        className="text-white active:animate-spin active:duration-700"
      />
    </div>
  );
};

export default ReloadButton;
