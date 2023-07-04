import React from 'react';
import './index.scss'
const Home = () => {
  return (
    <div name='home' className='home-page z-10 w-full h-screen mb-[40px]'>
      {/* Container */}
      <div className='w-full mx-auto px-8 flex flex-col justify-center h-full'>
        <div className="cont">
          <div className="text-zone">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="700px" height="360px">
              <defs>
                <text id="text" x="10%" y="50%" fontFamily='Poiret One' fontSize="46px" fontWeight="800" textAnchor="start" alignmentBaseline="middle">
                  <tspan x="5%" dy="-1.2em">Hi, </tspan>
                  <tspan x="5%" dy="1.2em">I'm Melquisedec G.</tspan>
                  <tspan x="5%" dy="1.2em">Software Engineer</tspan>
                </text>
              </defs>
              <filter id="glow">
                <feGaussianBlur id="glowBlur" stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="shock">
                <feTurbulence type="fractalNoise" baseFrequency="0.2" numOctaves="1" seed="2" result="noise" id="noise">
                  <animate attributeType="XML" attributeName="seed" from="2" to="120" dur="12s" repeatCount="indefinite" />
                </feTurbulence>
                <feMorphology id="morph1" in="SourceGraphic" operator="dilate" radius="10" result="morph1" />
                <feMorphology id="morph2" in="morph1" operator="dilate" radius="2" result="morph2" />
                <feComposite operator="out" in="morph2" in2="morph1" result="strokeText" />
                <feDisplacementMap
                  xChannelSelector="R"
                  yChannelSelector="G"
                  in="strokeText"
                  in2="noise"
                  result="displacementMap"
                  colorInterpolationFilters="sRGB"
                  scale="10"
                />
                <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="displacementMap" />
                </feMerge>
              </filter>
              <filter id="shock2">
                <feTurbulence type="fractalNoise" baseFrequency="0.2" numOctaves="1" seed="2" result="noise" id="noise">
                  <animate attributeType="XML" attributeName="seed" from="2" to="120" dur="10s" repeatCount="indefinite" />
                </feTurbulence>
                <feMorphology id="morph3" in="SourceGraphic" operator="dilate" radius="1" result="morph1" />
                <feMorphology id="morph4" in="morph1" operator="dilate" radius="1" result="morph2" />
                <feComposite operator="out" in="morph2" in2="morph1" result="strokeText" />
                <feDisplacementMap
                  xChannelSelector="R"
                  yChannelSelector="G"
                  in="strokeText"
                  in2="noise"
                  result="displacementMap"
                  colorInterpolationFilters="sRGB"
                  scale="2"
                />
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="displacementMap" />
                </feMerge>
              </filter>
              <use xlinkHref="#text" fill="#cbc9ca" />
              <use xlinkHref="#text" fill="none" stroke="#5295a7" strokeWidth="3" filter="url(#shock)" />
              <use xlinkHref="#text" fill="none" stroke="#36675d" strokeWidth="1" filter="url(#shock2)" />
            </svg>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Home;
