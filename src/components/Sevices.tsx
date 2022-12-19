import type { FC } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import { useTranslation, Trans } from 'next-i18next'
import { AnimatedTitle } from './AnimatedTitleH2'
import useMediaQuery from '../../hooks/useMediaQuery'
import pageHeaderBg from '../../public/pageheaderbg-2.jpg'
import pageHeaderBg3 from '../../public/pageheaderbg-3.jpg'

import { Service } from './Service'

import serviceImg01 from '../../public/service-img-01.jpg'
import serviceImg02 from '../../public/service-img-02.jpg'
import serviceImg03 from '../../public/service-img-03.jpg'
import serviceImg04 from '../../public/service-img-04.jpg'
import serviceImg05 from '../../public/service-img-05.jpg'

export const Services: FC = () => {
  const { t } = useTranslation('common')

  // Media query for parallax
  const isSmall = useMediaQuery('(max-width: 1200px)')
  // Content parallax
  const contentYOffset = isSmall ? 3 : 5
  const imageContentYOffset = isSmall ? 0 : 10
  return (
    <>
      <section className="relative mt-20 w-full overflow-hidden bg-neutral-50 py-10 pb-0 lg:pb-10">
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

        <div className="relative mx-auto max-w-6xl">
          <Parallax speed={contentYOffset} className="relative z-10">
            <AnimatedTitle
              className="mx-auto mt-10 px-6 font-serif text-4xl font-black uppercase text-white md:mt-28 lg:text-[64px] lg:leading-[74px]"
              text={[
                t('hservicessection.services.maintitle-1'),
                t('hservicessection.services.maintitle-2'),
              ]}
            />
          </Parallax>
          <div className="mt-10 grid grid-cols-1 gap-10 px-6 md:mt-20 lg:mx-auto 2xl:px-0">
            <div className="w-full ">
              <Service
                image={serviceImg01}
                title={[
                  t('homeservices.service-1.title-1'),
                  t('homeservices.service-1.title-2'),
                ]}
                subtitle={[t('homeservices.service-1.subtitle')]}
                paragraph={t('homeservices.service-1.panel-p')}
                panel={t('homeservices.service-1.panel-ul', {
                  returnObjects: true,
                })}
                image_align="left"
                subtitle_align="top"
              />

              <Service
                image={serviceImg02}
                title={[
                  t('homeservices.service-2.title-1'),
                  t('homeservices.service-2.title-2'),
                ]}
                subtitle={[t('homeservices.service-2.subtitle')]}
                panel={t('homeservices.service-2.panel-ul', {
                  returnObjects: true,
                })}
                image_align="right"
                subtitle_align="bottom"
              />

              <Service
                image={serviceImg03}
                title={[
                  t('homeservices.service-3.title-1'),
                  t('homeservices.service-3.title-2'),
                ]}
                subtitle={[t('homeservices.service-3.subtitle')]}
                panel={t('homeservices.service-3.panel-ul', {
                  returnObjects: true,
                })}
                image_align="left"
                subtitle_align="bottom"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-neutral-50 py-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-0 top-0 hidden min-h-[550px]  w-full overflow-hidden lg:block 2xl:min-h-[510px]"
        >
          <Image
            priority
            fill
            src={pageHeaderBg3}
            alt="Services"
            className="z-0 h-full w-full object-cover object-top"
          />
        </motion.div>

        <div className="relative mx-auto max-w-6xl lg:mt-16">
          <div className="grid grid-cols-1 gap-10 px-6 lg:mx-auto 2xl:px-0">
            <div className="service-panel-wsbg w-full ">
              <Service
                image={serviceImg04}
                title={[t('homeservices.service-4.title-1')]}
                subtitle={[t('homeservices.service-4.subtitle')]}
                panel={t('homeservices.service-4.panel-ul', {
                  returnObjects: true,
                })}
                image_align="right"
                subtitle_align="top"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="testsection"
        className="relative w-full overflow-hidden bg-neutral-50 py-10 pt-0 lg:pt-10"
      >
        <div className="relative mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-10 px-6 lg:mx-auto lg:mt-10 2xl:px-0">
            <div className="w-full ">
              <Service
                image={serviceImg05}
                title={[
                  t('homeservices.service-5.title-1'),
                  t('homeservices.service-5.title-2'),
                ]}
                subtitle={[t('homeservices.service-5.subtitle')]}
                panel={t('homeservices.service-5.panel-ul', {
                  returnObjects: true,
                })}
                image_align="left"
                subtitle_align="top"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
