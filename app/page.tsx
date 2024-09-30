"use client"
import { ArrowRightIcon } from '@heroicons/react/24/outline';
// import Link from 'next/link';
import "@/app/ui/dash.css";
import Image from "../app/lib/image"
// import * from '../public'
import Cardi from "../app/lib/card"
import Header from "@/app/Components/Header";
import Dp from 'public/Dp.jpeg'
import React from 'react';
import ContactForm from '@/app/Components/contact';
import { useRouter } from 'next/navigation';

export default function Page() {

const router =  useRouter();

  const sayhello = () => {
        router.push('#contactMe');
    };

  // @ts-ignore
    // @ts-ignore
    return (
    <main>
        <div className="header">
            <div  ><Header/></div>
            <div className="main justify-around">
                <p className="float-left mr-3"><span className="text-cyan-600 font-bold text-2xl m-2">I am </span><br/>
                    <span className="text-6xl font-extrabold">
                    Fredrick <br/> Mwaura <br/></span><span className="text-white font-bold text-4xl mr-3.5 capitalize"> <br/><br/>A talented full stack  websit<span
                    className="text-black">e developer </span></span><br/>
                    <button onClick={sayhello} className='bg-green-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300 m-5'> contact me </button>
                </p>


                <Image
                    src={Dp}
                    alt={'profile'}
                    width={300}
                    height={300}
                    className={' bg-blue-500 rounded-full right-0 mr-6'}
                />
            </div>


        </div>
        <div className="mt-3">
            <Cardi/>
        </div>
        <div className="tech">
            <h2>----technology I use-----</h2>
            <ul>
                <h3>Frontend</h3>
                {/* <li><img src=/> </li> */}
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div className="contact" id='contactMe'>
            <ContactForm/>
        </div>
        

    </main>
    );
}
