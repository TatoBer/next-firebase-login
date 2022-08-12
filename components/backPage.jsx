import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";


export default function BackPage() {
  const router = useRouter();

  const backToHome = ()=>{
    router.push("/home");
  }

  return (
    <IoIosArrowBack onClick={backToHome} className="backpage" />
  )
}
