import { Inter } from "next/font/google";

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
            <div className="py-2 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                <h2 className="text-3xl tracking-tight font-bold text-gray-900 dark:text-white">About us.</h2>
                <h2 className="mb-4 text-1xl pt-[10px] tracking-tight font-medium text-gray-900 dark:text-white">It is also a website providing content filmed in the skatepark, 
                    as well other skateboard-related media. The facility name is a portmanteau of the owners names the Ber of Berra 
                    surname and the ric of Koston first name.</h2>
                </div>
                </div>
            </section>
              </div>
            </section>   

            <div className="max-w-screen-sm lg:mb-8">
                <h2 className={`${interItalic.className} text-3xl tracking-tight font-bold text-gray-950 dark:text-white`}>Total Market.</h2>
                </div> 

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-40">
                <div className="bg-black p-6 rounded-lg text-center">
                    <p className={`${interItalic.className} text-7xl font-bold text-slate-50`}>85%</p>
                    <p className="text-lg mt-2 text-slate-50">of NIKE leadership positions are held by women</p>
                </div>

                <div className="bg-black p-6 rounded-lg text-center">
                    <p className={`${interItalic.className} text-7xl font-bold text-slate-50`}>98%</p>
                    <p className="text-lg mt-2 text-slate-50">of NIKE leadership positions are held by women</p>
                </div>

                <div className="bg-black p-6 rounded-lg text-center">
                    <p className={`${interItalic.className} text-7xl font-bold text-slate-50`}>90%</p>
                    <p className="text-lg mt-2 text-slate-50">of NIKE leadership positions are held by women</p>
                </div>
            </section>
            </div>        
        </div>
    )
}