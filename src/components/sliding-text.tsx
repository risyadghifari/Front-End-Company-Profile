import { useState } from 'react';

export default function SlidingText() {
  const [] = useState(true);

  return (
    <div className="relative font-inter antialiased">
      <main className="relative flex flex-col justify-center items-center overflow-hidden h-screen">
        <div className="text-center pt-[30px]">
          {/* Sliding Text Animation */}
          <div className="font-extrabold text-3xl md:text-4xl lg:text-5xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
            <span className="text-slate-200 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] overflow-hidden">
              <ul className="block animate-text-slide text-center leading-tight [&_li]:block">
                <li>&quot;Every visit to The Berrics is unforgettable.&quot;</li>
                <li>&quot;Best indoor skatepark ever.&quot;</li>
                <li>&quot;The vibe and the ramps are next-level!&quot;</li>
                <li>&quot;Perfect for learning, pushing limits, and having fun.&quot;</li>
              </ul>
            </span>
          </div>
          {/* End: Sliding Text Animation */}
        </div>
      </main>

      {/* Custom CSS for nth-child animation delays */}
      <style>
        {`
          .animate-text-slide li:nth-child(1) {
            animation-delay: 0s;
          }

          .animate-text-slide li:nth-child(2) {
            animation-delay: 5s; /* Delay for 5 seconds */
          }

          .animate-text-slide li:nth-child(3) {
            animation-delay: 10s; /* Delay for 10 seconds */
          }

          .animate-text-slide li:nth-child(4) {
            animation-delay: 15s; /* Delay for 15 seconds */
          }
        `}
      </style>
    </div>
  );
}
