import type { FC } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import { useTranslation, Trans } from 'next-i18next'
import { AnimatedTitle } from './AnimatedTitleH2'
import useMediaQuery from '../../hooks/useMediaQuery'
import pageHeaderBg from '../../public/pageheaderbg-2.jpg'

import serviceImg01 from '../../public/service-img-01.jpg'

export const Services: FC = () => {
  const { t } = useTranslation('common')

  // Media query for parallax
  const isSmall = useMediaQuery('(max-width: 1200px)')
  // Content parallax
  const contentYOffset = isSmall ? 4 : 8
  const imageContentYOffset = isSmall ? 0 : 10
  return (
    <>
      <section className="relative mt-20 h-[2000px] w-full overflow-hidden bg-neutral-50 py-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-0 top-0 min-h-[50vh] w-full overflow-hidden md:min-h-[40vw] lg:min-h-[40vw] 2xl:min-h-[24vw]"
        >
          <Image
            priority
            fill
            src={pageHeaderBg}
            alt="Services"
            className="z-0 h-full w-full object-cover object-top"
          />
        </motion.div>

        <div className="relative mx-auto max-w-7xl">
          <Parallax speed={contentYOffset} className="relative z-10">
            <AnimatedTitle
              className="mx-auto px-6 font-serif text-4xl font-black uppercase text-white md:mt-28 lg:text-[64px] lg:leading-[74px]"
              text={[
                t('homeservices.services.maintitle-1'),
                t('homeservices.services.maintitle-2'),
              ]}
            />
          </Parallax>
          <div className="mt-10 grid grid-cols-1 gap-8 px-6 md:mt-20 lg:mx-auto 2xl:px-0">
            <Parallax speed={contentYOffset} className="relative z-10">
              <div className="w-full ">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <div className="grid w-full max-w-7xl grid-cols-1 items-center overflow-hidden rounded-lg bg-white px-10 py-10 shadow-xl lg:grid-cols-2 lg:py-0 lg:px-24">
                        <div className="service-item-title relative flex h-full items-center">
                          <div className="line-item bg-primary absolute top-0 left-0 hidden w-[2px] lg:block"></div>
                          <Parallax speed={3} className="">
                            <AnimatedTitle
                              className="service-subtitle font-serif text-2xl leading-[1.6] text-[#5E6776]"
                              text={['Оформление']}
                            />
                            <AnimatedTitle
                              className="service-title font-serif text-4xl font-black uppercase text-ak-darkblue lg:text-5xl lg:leading-[1.1]"
                              text={['ВНЖ', 'Черногории']}
                            />

                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                              <span>Подробнее</span>
                              <ChevronUpIcon
                                className={`${
                                  open ? 'rotate-180 transform' : ''
                                } h-5 w-5 text-purple-500`}
                              />
                            </Disclosure.Button>
                          </Parallax>
                        </div>
                        <div className="service-item-image">
                          <Image
                            priority
                            src={serviceImg01}
                            alt="Picture of the author"
                            className=""
                          />
                        </div>
                      </div>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          If you're unhappy with your purchase for any reason,
                          email us within 90 days and we'll refund you in full,
                          no questions asked.
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </div>
            </Parallax>
          </div>
        </div>
      </section>
    </>
  )
}
