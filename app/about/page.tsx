import React from 'react';
import Image from '../lib/image';
import Dp from 'public/Dp.jpeg';
import j4 from 'public/j4.jpg';
import Header from '../Components/Header';
import 'app/ui/dash.css';
import Footer from '../Components/footer';

export default function About() {
    return (
        <div>
        <Header />

        <div className="bg-gray-100 ">
            <div className="container mx-auto mt-16 p-8 w-4/5">
                <div className="flex flex-col md:flex-row items-start mb-12">
                    <div className="md:w-1/2">
                        <Image
                            src={Dp}
                            alt="Profile"
                            width={300}
                            height={400}
                            className="rounded-lg shadow-lg mb-8 md:mb-0 md:mr-8"
                        />
                    </div>

                    <div className="md:w-1/2 text-lg max-w-lg leading-relaxed">
                        <h2 className="text-4xl font-bold mb-2 text-gray-800">KNOW IT ALL NOW</h2>
                        <p className="text-xl font-semibold text-gray-600 mb-4">WHO AM I</p>
                        <p className="text-gray-700 mb-6">
                            <span className="text-3xl text-blue-500">&ldquo;</span>
                            My name is Fredrick Mwaura, a tech enthusiast and Computer Science student at Murang'a University of Technology with a strong focus on web and software development. I specialize in creating seamless, user-friendly websites and applications that create a modern and stylish feel.
                        </p>
                        <blockquote className="text-gray-500 italic border-l-4 border-blue-500 pl-4 mb-6">
                            Driven by a love for technology, I'm always exploring new tools and techniques to stay ahead of the curve. My goal is to build digital solutions that are both innovative and user-friendly, keeping users engaged and always coming back. My expertise and proficiency with tools such as React, Laravel, and Next.js enable me to achieve this.
                        </blockquote>
                    </div>
                </div>

                {/* Second Section - Text on the left, Image on the right */}
                <div className="flex flex-col md:flex-row-reverse items-start">
                    {/* Project Image on the right */}
                    <div className="md:w-1/2">
                        <Image
                            src={j4}
                            alt="Project"
                            width={600}
                            height={800}
                            className="rounded-lg shadow-lg mb-8 md:mb-0 md:ml-8"
                        />
                    </div>

                    {/* Additional Info on the left */}
                    <div className="md:w-1/2 text-lg max-w-lg leading-relaxed">
                        <p className="text-gray-700 mb-6">
                            <span className="text-3xl text-blue-500">&ldquo;</span>
                            Whether you need a dynamic web application or robust software solutions 
                            with a focus on user experience, 
                            I'm here to turn that vision into something remarkable that you'll 
                            truly appreciate. You can always reach out to me through various platforms and 
                            collaborate on something exceptional together.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
    );
}
