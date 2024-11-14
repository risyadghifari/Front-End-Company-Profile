"use client"

import FadeInSection from "@/components/animated";
import FadeInSections from "@/components/animated2";
import { Inter } from "next/font/google";
import Image from "next/image";
import CountUp from "react-countup";

const interItalic = Inter({
    subsets: ['latin'],
    weight: '900',
    display: 'swap',
    style: 'italic'
  });
  

export default function AboutPage(){
    return(
        <div className={`bg-neutral-50 text-gray-800 p-8`}>
            <div className={`max-w-6xl mx-auto`}>
            <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <section>
            <div className="py-2 px-4 mx-auto max-w-screen-xl text-left lg:py-16 lg:px-6">
            <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                <h2 className={`${interItalic.className} text-3xl pb-8 tracking-tight font-bold text-gray-800 dark:text-gray-800`}>About us.</h2>
                <hr className="border-gray-400"/>
                <FadeInSections>
                <h2 className="mb-4 text-1xl pt-[10px] tracking-tight font-bold text-gray-800 dark:text-gray-800">It is also a website providing content filmed in the skatepark, 
                    as well other skateboard-related media. The facility name is a portmanteau of the owners names the Ber of Berra 
                    surname and the ric of Koston first name.</h2>
                    </FadeInSections>
                </div>
                </div>
            </section>
              </div>
            </section>   

            <div className="max-w-screen-sm lg:mb-8">
                <h2 className={`${interItalic.className} text-3xl tracking-tight font-bold text-gray-800 dark:text-gray-800`}>Total Market.</h2>
                </div> 

            <section className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-30">
                <div className="bg-black p-6 rounded-lg text-center">
                    <p className={`${interItalic.className} text-7xl font-bold text-slate-50`}>
                    <CountUp start={0} end={88} duration={2} separator="," />%
                    </p>
                    <p className="text-lg mt-2 text-slate-50">Active users who have engaged with the product</p>
                </div>

                <div className="bg-black p-6 rounded-lg text-center">
                    <p className={`${interItalic.className} text-7xl font-bold text-slate-50`}>
                        <CountUp start={0} end={98} duration={2} separator="," />%
                    </p>
                    <p className="text-lg mt-2 text-slate-50">Active users who have engaged with the product</p>
                </div>

                <div className="bg-black p-6 rounded-lg text-center">
                    <p className={`${interItalic.className} text-7xl font-bold text-slate-50`}>
                    <CountUp start={0} end={90} duration={2} separator="," />%
                    </p>
                    <p className="text-lg mt-2 text-slate-50">Active users who have engaged with the product</p>
                </div>

                
            <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16 mt-20">
                <h2 className={`${interItalic.className} text-3xl tracking-tight font-bold text-gray-800 dark:text-gray-800`}>Our Vision</h2>
                <h2 className="mb-4 text-1xl pt-[10px] tracking-tight font-medium text-gray-800 dark:text-gray-800">We believe that skateboarding is more than just a sport it is a lifestyle, a form of self-expression, and a community. 
                    From the streets to the skate parks, skateboarding brings people together, and we are here to support that spirit by offering boards that are not only functional and durable but also a reflection of skate culture.</h2>
               
                <h2 className="mb-4 text-1xl pt-[10px] tracking-tight font-medium text-gray-800 dark:text-gray-800">Our vision is to be the go-to brand for skaters of all levels—whether you are just starting out or you are a seasoned pro. We are constantly innovating, pushing boundaries, and looking for new ways to improve our products, 
                    all while staying true to the roots of skateboarding.</h2>

                </div>

                <FadeInSection>
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16 mt-20">
                <Image src="/ksama-5qW06V09iJc-unsplash.jpg" alt="" height={900} width={900} />
                </div>
                </FadeInSection>

            </section>    

            <FadeInSections>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16 mt-20">
                <h2 className={`${interItalic.className} text-3xl tracking-tight font-bold text-gray-800 dark:text-gray-800`}>Our Values</h2>
                
                <h2 className="mb-4 text-1xl pt-[10px] tracking-tight font-medium text-gray-800 dark:text-gray-800">We do not just make skateboards; we 
                    live and breathe the culture. At Berrics, we stand by a few core values that drive everything we do.</h2>
                <h2 className="mb-4 text-1xl pt-[10px] tracking-tight font-medium text-gray-800 dark:text-gray-800">Skateboarding is all about pushing boundaries, and we carry that mindset into everything we do. We are always exploring new materials, designs, and technologies to improve the skateboarding experience.</h2>

                </div>

                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16 mt-20">
                <h2 className={`${interItalic.className} text-3xl tracking-tight font-bold text-gray-800 dark:text-gray-800`}>Why Choose Us?</h2>
                <h2 className="text-2xl pt-[10px] tracking-tight font-bold text-gray-800 dark:text-gray-800">For the Skaters, By the Skaters</h2>
                <h2 className="mb-4 text-1xl pt-[10px] tracking-tight font-medium text-gray-800 dark:text-gray-800">We are not just a business; we are skaters just like you. We have spent countless hours riding, designing, testing, and refining our products to make sure we are offering the best skateboards for every type of rider.</h2>
                <h2 className="mb-4 text-1xl pt-[10px] tracking-tight font-medium text-gray-800 dark:text-gray-800">Whether you are a seasoned skater or a beginner, our boards are built with one goal in mind: to enhance your ride, your tricks, and your experience.</h2>

                </div>
            </section>
            </FadeInSections>
          
            </div>        
        </div>
    )
}