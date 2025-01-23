// import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

export default function Backendtest() {
  const [resp, setResp] = useState("");

  async function response() {
    const res = await axios.get("http://localhost:3000");
    setResp(res.data);
  }

  useEffect(() => {
    response();
  }, []);
  console.log(" Resp :" + resp);

  return (
    <div className="text-xl font-semibold text-center pt-40 ">
      Backendtest {resp}
    </div>
  );
}
