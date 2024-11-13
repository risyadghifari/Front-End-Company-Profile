import Image from "next/image";
import Link from "next/link";





export default function ProductsPage (){
    return(
        <div>
          <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="font-bold text-3xl min-[400px]:text-4xl text-black mb-8 max-lg:text-center">Decks</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    <Link href={"/"} className="max-w-[384px] mx-auto">
                        <div className="w-full max-w-sm aspect-square overflow-hidden">
                            <Image src={"/catalog/Palace-2024-cap-18663.webp"} alt="skateboard" className="w-full h-full object-cover transition-transform hover hover:scale-[1.3]"></Image>
                        </div>
                        <div className="mt-5 flex items-center justify-between">
                            <div className="">
                                <h6 className="font-medium text-[19px] leading-8 text-black mb-2">Palace 8.375 Charlie Pro S36 Skateboard Deck</h6>
                                <h6 className="font-semibold text-[18px] leading-8  text-gray-800">Rp 1.354.000,00 </h6>
                            </div>
                            <button className="p-2 min-[400px]:p-3 space-x-2 rounded-full bg-slate-50 border border-gray-400 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"
                                fill="none">
                                <path
                                    d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                                    stroke="" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                            <p>Buy</p>
                            </button>
                        </div>
                    </Link>

                    <Link href={"/"} className="max-w-[384px] mx-auto">
                        <div className="w-full max-w-sm aspect-square overflow-hidden">
                            <Image src={"/catalog/Palace-2024-cap-18653.webp"} alt="skateboard" className="w-full h-full  object-cover transition-transform hover hover:scale-[1.3]"></Image>
                        </div>
                        <div className="mt-5 flex items-center justify-between">
                            <div className="">
                                <h6 className="font-medium text-[19px] leading-8 text-black mb-2">Palace 8.0 Brady Pro S36 Skateboard Deck</h6>
                                <h6 className="font-semibold text-[18px] leading-8 text-gray-800">Rp 1.354.000,00</h6>
                            </div>
                            <button className="p-2 min-[400px]:p-3 rounded-full bg-white border border-gray-400 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"
                                fill="none">
                                <path
                                    d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                                    stroke="" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                            </button>
                        </div>
                    </Link>     

                    <Link href={"/"} className="max-w-[384px] mx-auto">
                        <div className="w-full max-w-sm aspect-square overflow-hidden">
                            <Image src={"/catalog/Palace-Winter-2024-07.webp"} alt="skateboard" className="w-full h-full  object-cover transition-transform hover hover:scale-[1.3]"></Image>
                        </div>
                        <div className="mt-5 flex items-center justify-between">
                            <div className="">
                                <h6 className="font-medium text-[19px] leading-8 text-black mb-2">Palace 8.375 Chewy Pro S37 Skateboard Deck</h6>
                                <h6 className="font-semibold text-[18px] leading-8 text-gray-800">Rp 1.354.000,00</h6>
                            </div>
                            <button className="p-2 min-[400px]:p-3 rounded-full bg-white border border-gray-400 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"
                                fill="none">
                                <path
                                    d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                                    stroke="" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                            </button>
                        </div>
                    </Link>     
                  

                    <Link href={"/"} className="max-w-[384px] mx-auto">
                        <div className="w-full max-w-sm aspect-square overflow-hidden">
                            <Image src={"/catalog/polar-roman-lorca.webp"} alt="skateboard" className="w-full h-full  object-cover transition-transform hover hover:scale-[1.3]"></Image>
                        </div>
                        <div className="mt-5 flex items-center justify-between">
                            <div className="">
                                <h6 className="font-medium text-[19px] leading-8 text-black mb-2">Palace 8.375 Chewy Pro S37 Skateboard Deck</h6>
                                <h6 className="font-semibold text-[18px] leading-8 text-gray-800">Rp 1.354.000,00</h6>
                            </div>
                            <button className="p-2 min-[400px]:p-3 rounded-full bg-white border border-gray-400 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"
                                fill="none">
                                <path
                                    d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                                    stroke="" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                            </button>
                        </div>
                    </Link>     

                    <Link href={"/"} className="max-w-[384px] mx-auto">
                        <div className="w-full max-w-sm aspect-square overflow-hidden">
                            <Image src={"/catalog/BLEDSOE.webp"} alt="skateboard" className="w-full h-full  object-cover transition-transform hover hover:scale-[1.3]"></Image>
                        </div>
                        <div className="mt-5 flex items-center justify-between">
                            <div className="">
                                <h6 className="font-medium text-[19px] leading-8 text-black mb-2">Palace 8.375 Chewy Pro S37 Skateboard Deck</h6>
                                <h6 className="font-semibold text-[18px] leading-8 text-gray-800">Rp 1.354.000,00</h6>
                            </div>
                            <button className="p-2 min-[400px]:p-3 rounded-full bg-white border border-gray-400 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"
                                fill="none">
                                <path
                                    d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                                    stroke="" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                            </button>
                        </div>
                    </Link>    
                       

                    <Link href={"/"} className="max-w-[384px] mx-auto">
                        <div className="w-full max-w-sm aspect-square overflow-hidden">
                            <Image src={"/catalog/baker-veneers-8.25.webp"} alt="skateboard" className="w-full h-full  object-cover transition-transform hover hover:scale-[1.3]"></Image>
                        </div>
                        <div className="mt-5 flex items-center justify-between">
                            <div className="">
                                <h6 className="font-medium text-[19px] leading-8 text-black mb-2">Palace 8.375 Chewy Pro S37 Skateboard Deck</h6>
                                <h6 className="font-semibold text-[18px] leading-8 text-gray-800">Rp 1.354.000,00</h6>
                            </div>
                            <button className="p-2 min-[400px]:p-3 rounded-full bg-white border border-gray-400 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"
                                fill="none">
                                <path
                                    d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                                    stroke="" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                            </button>
                        </div>
                    </Link>
                    </div>


                    <div className="flex flex-col items-center p-[50px]">
                    <button className="p-2 min-[400px]:p-3 bg-gray-900 text-white border  flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-white hover:text-gray-950">
                            <h1>VIEW MORE</h1>
                            </button>
                    </div>
            </div>

                    
            
                    
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px- pt-10">
                <h2 className="font-bold text-3xl min-[400px]:text-4xl text-black mb-8 max-lg:text-center">Apparels</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    <Link href={"/"} className="max-w-[384px] mx-auto">
                        <div className="w-full max-w-sm aspect-square overflow-hidden">
                            <Image src={"/catalog/sci-fi-device-tee-royal-01.webp"} alt="skateboard" className="w-full h-full object-cover transition-transform hover hover:scale-[1.3]"></Image>
                        </div>
                        <div className="mt-5 flex items-center justify-between">
                            <div className="">
                                <h6 className="font-medium text-[19px] leading-8 text-black mb-2">Palace 8.375 Charlie Pro S36 Skateboard Deck</h6>
                                <h6 className="font-semibold text-[18px] leading-8  text-gray-800">Rp 1.354.000,00</h6>
                            </div>
                            <button className="p-2 min-[400px]:p-3 rounded-full bg-white border border-gray-400 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"
                                fill="none">
                                <path
                                    d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                                    stroke="" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                            </button>
                        </div>
                    </Link>

                    <Link href={"/"} className="max-w-[384px] mx-auto">
                        <div className="w-full max-w-sm aspect-square overflow-hidden">
                            <Image src={"/catalog/NM480EST_1.webp"} alt="skateboard" className="w-full h-full  object-cover transition-transform hover hover:scale-[1.3]"></Image>
                        </div>
                        <div className="mt-5 flex items-center justify-between">
                            <div className="">
                                <h6 className="font-medium text-[19px] leading-8 text-black mb-2">Palace 8.0 Brady Pro S36 Skateboard Deck</h6>
                                <h6 className="font-semibold text-[18px] leading-8 text-gray-800">Rp 1.354.000,00</h6>
                            </div>
                            <button className="p-2 min-[400px]:p-3 rounded-full bg-white border border-gray-400 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"
                                fill="none">
                                <path
                                    d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                                    stroke="" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                            </button>
                        </div>
                    </Link>     

                    <Link href={"/"} className="max-w-[384px] mx-auto">
                        <div className="w-full max-w-sm aspect-square overflow-hidden">
                            <Image src={"/catalog/01_7277082a-82ce-42a7-9ab6-cab173a2039b.webp"} alt="skateboard" className="w-full h-full  object-cover transition-transform hover hover:scale-[1.3]"></Image>
                        </div>
                        <div className="mt-5 flex items-center justify-between">
                            <div className="">
                                <h6 className="font-medium text-[19px] leading-8 text-black mb-2">Palace 8.375 Chewy Pro S37 Skateboard Deck</h6>
                                <h6 className="font-semibold text-[18px] leading-8 text-gray-800">Rp 1.354.000,00</h6>
                            </div>
                            <button className="p-2 min-[400px]:p-3 rounded-full bg-white border border-gray-400 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"
                                fill="none">
                                <path
                                    d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                                    stroke="" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                            </button>
                        </div>
                    </Link>     
                  

                    <Link href={"/"} className="max-w-[384px] mx-auto">
                        <div className="w-full max-w-sm aspect-square overflow-hidden">
                            <Image src={"/catalog/NM574VBP-01.webp"} alt="skateboard" className="w-full h-full  object-cover transition-transform hover hover:scale-[1.3]"></Image>
                        </div>
                        <div className="mt-5 flex items-center justify-between">
                            <div className="">
                                <h6 className="font-medium text-[19px] leading-8 text-black mb-2">Palace 8.375 Chewy Pro S37 Skateboard Deck</h6>
                                <h6 className="font-semibold text-[18px] leading-8 text-gray-800">Rp 1.354.000,00</h6>
                            </div>
                            <button className="p-2 min-[400px]:p-3 rounded-full bg-white border border-gray-400 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"
                                fill="none">
                                <path
                                    d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                                    stroke="" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                            </button>
                        </div>
                    </Link>     

                    <Link href={"/"} className="max-w-[384px] mx-auto">
                        <div className="w-full max-w-sm aspect-square overflow-hidden">
                            <Image src={"/catalog/Vert-Jersey-Sky-Brown-1.webp"} alt="skateboard" className="w-full h-full  object-cover transition-transform hover hover:scale-[1.3]"></Image>
                        </div>
                        <div className="mt-5 flex items-center justify-between">
                            <div className="">
                                <h6 className="font-medium text-[19px] leading-8 text-black mb-2">Palace 8.375 Chewy Pro S37 Skateboard Deck</h6>
                                <h6 className="font-semibold text-[18px] leading-8 text-gray-800">Rp 1.354.000,00</h6>
                            </div>
                            <button className="p-2 min-[400px]:p-3 rounded-full bg-white border border-gray-400 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"
                                fill="none">
                                <path
                                    d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                                    stroke="" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                            </button>
                        </div>
                    </Link>    
                       

                    <Link href={"/"} className="max-w-[384px] mx-auto">
                        <div className="w-full max-w-sm aspect-square overflow-hidden">
                            <Image src={"/catalog/ANDROMEDA-F-Z-HOODIE_STONE_PF00706_STONE_02.webp"} alt="skateboard" className="w-full h-full  object-cover transition-transform hover hover:scale-[1.3]"></Image>
                        </div>
                        <div className="mt-5 flex items-center justify-between">
                            <div className="">
                                <h6 className="font-medium text-[19px] leading-8 text-black mb-2">HUF Andromeda Hood Stone </h6>
                                <h6 className="font-semibold text-[18px] leading-8 text-gray-800">Rp 2.396.000,00 </h6>
                            </div>
                            <button className="p-2 min-[400px]:p-3 rounded-full bg-white border border-gray-400 flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-gray-50">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"
                                fill="none">
                                <path
                                    d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                                    stroke="" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                            </button>
                        </div>
                    </Link>
                    </div>


                    <div className="flex flex-col items-center p-[50px]">
                    <button className="p-2 min-[400px]:p-3 bg-gray-900 text-white border  flex items-center justify-center group shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-400 hover:bg-white hover:text-gray-950">
                            <h1>VIEW MORE</h1>
                            </button>
                </div>
                    </div>
          </section>
        </div>
    )
} 