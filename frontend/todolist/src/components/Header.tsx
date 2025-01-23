// import React from 'react'
// import correct from '../assets/correct.png.png'
// import { useEffect,useState } from "react";
// import axios from 'axios ';

export default function Header() {
  return (
    <>
      <nav>
        <div className="bg-cyan-700 h-15 fixed w-full text-2xl text-gray-100 shadow-md shadow-emerald-800 flex justify-between px-5 border-b">
          <div className="flex justify-center space-x-2">
            <span className="material-symbols-outlined  my-2  ">task_alt</span>
            <h1 className=" font-semibold "> My Goal</h1>
          </div>
          <span className="material-symbols-outlined  my-2 ">person</span>
        </div>
      </nav>
    </>
  );
}
