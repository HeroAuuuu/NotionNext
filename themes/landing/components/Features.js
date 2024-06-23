/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import CONFIG from '../config'
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
// import FeaturesElement from '@/public/images/features-element.png'

export default function Features() {
  const [tab, setTab] = useState(1)

  const tabs = useRef(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section className="relative" id="main">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 dark:bg-black pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
  
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h4 mb-3 text-custom-blue">{siteConfig('LANDING_FEATURES_HEADER_0', null, CONFIG)}</h1>
            <h1 className="h2 mb-4 dark:text-white">{siteConfig('LANDING_FEATURES_HEADER_1', null, CONFIG)}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: siteConfig('LANDING_FEATURES_HEADER_1_P', null, CONFIG) }}></p>
          </div>


          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3 dark:text-white">{siteConfig('LANDING_FEATURES_HEADER_2', null, CONFIG)}</h3>
                <p className="text-xl text-gray-600  dark:text-gray-400">{siteConfig('LANDING_FEATURES_HEADER_2_P', null, CONFIG)}</p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1) }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">{siteConfig('LANDING_FEATURES_CARD_1_TITLE', null, CONFIG)}</div>
                    <div className="text-gray-600">{siteConfig('LANDING_FEATURES_CARD_1_P', null, CONFIG)}</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
<svg t="1719121935958" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3066" width="256" height="256"><path d="M511.402667 72.789333a85.333333 85.333333 0 0 0-70.186667 36.821334l-259.413333 375.466666a85.333333 85.333333 0 0 0 21.717333 118.698667l6.229333 3.968a85.333333 85.333333 0 0 0 42.24 11.178667l173.952-0.042667v205.226667a85.333333 85.333333 0 0 0 155.392 48.810666l260.266667-373.632a85.333333 85.333333 0 0 0-21.205333-118.784l-6.314667-3.968a85.333333 85.333333 0 0 0-42.496-11.349333h-174.848V158.122667a85.333333 85.333333 0 0 0-85.333333-85.333334z m-259.413334 460.8l259.413334-375.466666V386.56a64 64 0 0 0 64 64h196.181333l-260.266667 373.589333v-226.56a64 64 0 0 0-64-64H251.989333z" fill="#2c2c2c" p-id="3067"></path></svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2) }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">{siteConfig('LANDING_FEATURES_CARD_2_TITLE', null, CONFIG)}</div>
                    <div className="text-gray-600">{siteConfig('LANDING_FEATURES_CARD_2_P', null, CONFIG)}</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
<svg t="1719122381396" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4206" width="256" height="256"><path d="M362.666667 533.333333a128 128 0 0 1 127.786666 120.490667l0.213334 7.509333v128a128 128 0 0 1-120.490667 127.786667L362.666667 917.333333h-128a128 128 0 0 1-127.786667-120.490666L106.666667 789.333333v-128a128 128 0 0 1 120.490666-127.786666L234.666667 533.333333h128z m426.666666 0a128 128 0 0 1 127.786667 120.490667l0.213333 7.509333v128a128 128 0 0 1-120.490666 127.786667l-7.509334 0.213333h-128a128 128 0 0 1-127.786666-120.490666L533.333333 789.333333v-128a128 128 0 0 1 120.490667-127.786666l7.509333-0.213334h128z m-426.666666 85.333334h-128a42.666667 42.666667 0 0 0-42.368 37.674666L192 661.333333v128a42.666667 42.666667 0 0 0 37.674667 42.368l4.992 0.298667h128a42.666667 42.666667 0 0 0 42.368-37.674667L405.333333 789.333333v-128a42.666667 42.666667 0 0 0-37.674666-42.368L362.666667 618.666667z m426.666666 0h-128a42.666667 42.666667 0 0 0-42.368 37.674666l-0.298666 4.992v128a42.666667 42.666667 0 0 0 37.674666 42.368l4.992 0.298667h128a42.666667 42.666667 0 0 0 42.368-37.674667l0.298667-4.992v-128a42.666667 42.666667 0 0 0-37.674667-42.368L789.333333 618.666667zM725.333333 106.666667a192 192 0 1 1 0 384 192 192 0 0 1 0-384z m-362.666666 0a128 128 0 0 1 127.786666 120.490666l0.213334 7.509334v128a128 128 0 0 1-120.490667 127.786666L362.666667 490.666667h-128a128 128 0 0 1-127.786667-120.490667L106.666667 362.666667v-128a128 128 0 0 1 120.490666-127.786667L234.666667 106.666667h128z m362.666666 85.333333a106.666667 106.666667 0 1 0 0 213.333333 106.666667 106.666667 0 0 0 0-213.333333z m-362.666666 0h-128a42.666667 42.666667 0 0 0-42.368 37.674667L192 234.666667v128a42.666667 42.666667 0 0 0 37.674667 42.368L234.666667 405.333333h128a42.666667 42.666667 0 0 0 42.368-37.674666L405.333333 362.666667v-128a42.666667 42.666667 0 0 0-37.674666-42.368L362.666667 192z" fill="#2c2c2c" p-id="4207"></path></svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3) }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">{siteConfig('LANDING_FEATURES_CARD_3_TITLE', null, CONFIG)}</div>
                    <div className="text-gray-600">{siteConfig('LANDING_FEATURES_CARD_3_P', null, CONFIG)}</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
<svg t="1719122404811" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4482" width="256" height="256"><path d="M486.784 68.693333c12.586667-5.333333 26.538667-6.101333 39.552-2.389333l6.4 2.261333 327.68 136.362667c20.992 8.789333 34.048 28.032 35.456 48.768l0.128 5.674667v273.066666c-2.133333 63.744-27.434667 127.530667-69.888 189.44l-8.746667 12.373334-7.338666 10.154666a454.570667 454.570667 0 0 1-123.477334 116.266667l-14.592 8.96-140.202666 82.218667a59.349333 59.349333 0 0 1-55.168 2.56l-5.717334-3.072-135.808-82.773334A454.912 454.912 0 0 1 213.333333 760.448l-9.813333-13.098667-9.472-13.056a346.112 346.112 0 0 1-65.706667-188.586666L128 531.029333V259.413333c0-21.76 11.946667-41.557333 30.805333-51.797333l5.290667-2.56L486.826667 68.693333z m23.168 82.773334L213.333333 276.821333v254.293334c0 46.421333 12.458667 91.904 35.925334 131.84l6.656 10.752 7.210666 10.453333 9.429334 13.056a369.066667 369.066667 0 0 0 93.141333 89.728l13.738667 8.789333 122.496 74.624 126.848-74.368a369.92 369.92 0 0 0 93.269333-77.781333l9.685333-11.733333 9.216-12.16 7.338667-10.154667c35.84-49.365333 57.557333-98.432 61.738667-142.933333l0.64-10.154667V276.693333L509.952 151.466667z m204.288 225.152a42.666667 42.666667 0 0 1 0.853333 56.448l-3.712 3.84-234.666666 213.333333a42.666667 42.666667 0 0 1-53.162667 3.413333l-4.266667-3.413333-106.666666-96.938667a42.666667 42.666667 0 0 1 53.205333-66.474666l4.181333 3.328 77.994667 70.826666 205.952-187.221333a42.666667 42.666667 0 0 1 60.288 2.858667z" fill="#2c2c2c" p-id="4483"></path></svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 pt-24">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <LazyImage src='/images/feature1.webp'/>
                    </div>

                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                        <LazyImage src='/images/feature3.webp'/>
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                        <LazyImage src='/images/feature2.webp'/>
                    </div>
                  </Transition>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
