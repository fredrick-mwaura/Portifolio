"use client"
import { ArrowRightIcon } from '@heroicons/react/24/outline';
// import Link from 'next/link';
import "@/app/ui/dash.css";
import Image from "../app/lib/image"
// import * from '../public'
import Cardi from "../app/lib/card"
import Header from "@/app/Components/Header";
import Footer from '@/app/Components/footer'
// import Dp from 'public/Dp.jpeg'
import React from 'react';
import react from 'public/react.png'
import next from 'public/next.png'
import tailwind from 'public/tailwind.png'
import ContactForm from '@/app/Components/contact';
import { useRouter } from 'next/navigation';
import laravel from 'public/laravel.svg';

export default function Page() {

const router =  useRouter();

  const sayhello = () => {
        router.push('#contactMe');
    };

  // @ts-ignore
    // @ts-ignore
    return (
        <main>
            <div className='z-1 Hiii'>
                <Header/>                
            <div className="header">

                <div className="main justify-around text-cyan-600 ">
                    <p className="float-left mr-3"><span
                        className="text-cyan-600 font-bold text-2xl m-2">I am </span><br/>
                        <span className="text-6xl font-extrabold">
                    Fredrick <br/> Mwaura <br/></span><span className="text-white font-bold text-4xl mr-3.5 capitalize"> <br/><br/>A talented full stack  website developer</span><br/>
                        <button onClick={sayhello}
                                className='bg-green-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300 m-5'> contact
                            me
                        </button>
                    </p>
                </div>


            </div>
            <div className="mt-3">
                <Cardi/>
            </div>
            <div className="tech">
                <h2 className='text-center m-4 '>----Technology I use-----</h2>
                <div className='flex items-center justify-evenly'>
                <div className="lang-card">
                    <Image
                    src={react}
                    alt={'React'}
                    width={60}
                    height={80}
                    className={'m-0'}
                    />
                    <p>React <br/> Developer</p>
                </div>
                <div className="lang-card">
                    <Image
                    src={next}
                    alt={'Next'}
                    width={60}
                    height={80}
                    className={'m-0'}
                    />
                    <p>NextJS <br/> Developer</p>
                </div>
                <div className="lang-card">
                    <Image
                    src={tailwind}
                    alt={'Tailwind'}
                    width={60}
                    height={80}
                    className={'m-0'}
                    />
                    <p>Tailwind <br/></p>
                </div>
                                <div className="lang-card">
                    <Image
                    src={laravel}
                    alt={'laravel'}
                    width={60}
                    height={80}
                    className={'m-0'}
                    />
                    <p>laravel <br/> Developer</p>
                </div>
                </div>

            </div>
            <div className="contact" id='contactMe'>
                <ContactForm/>
                <Footer/>
            </div>
            </div>


        </main>
    );
}
