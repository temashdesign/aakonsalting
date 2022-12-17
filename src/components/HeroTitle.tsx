import Head from 'next/head'
import type { FC } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslation, Trans } from 'next-i18next'
import { Parallax } from 'react-scroll-parallax'

import useMediaQuery from '../../hooks/useMediaQuery'
import pageHeaderBg from '../../public/pageheaderbg.jpg'
import leafImg from '../../public/leaf.png'
import { AnimatedTitle } from './AnimatedTitle'
import { Logo } from './Logo'
import { LocaleSwitcher } from './LocaleSwitcher'

export const HeroTitle: FC = () => {
  const { t } = useTranslation('common')

  // Media query for parallax
  const isSmall = useMediaQuery('(min-width: 480px)')
  // Content parallax
  const contentYOffset = isSmall ? 0 : 10

  const variants = isSmall
    ? {
        initial: {
          opacity: 1,
          y: 0,
        },
        animate: {
          opacity: 1,
          y: 0,
        },
      }
    : {
        initial: {
          opacity: 0,
          y: 50,
        },
        animate: {
          opacity: 1,
          y: 0,
        },
      }

  return (
    <>
      <motion.div
        initial={variants.initial}
        animate={variants.animate}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="relative -mt-[100px] w-full overflow-hidden 2xl:-mt-[250px]">
          <div className=" relative mx-auto mb-24 grid max-w-6xl grid-cols-1 items-center gap-7 rounded-3xl bg-white px-10 pt-16 pb-16 shadow-[0_26px_50px_0px_rgba(42,82,143,0.1)] lg:w-full lg:rounded-2xl lg:p-10 lg:px-20 lg:pt-20 lg:pb-20 2xl:max-w-[1280px]">
            <div className="absolute left-[calc(50%-30px)] top-[30px] h-[2px] w-[60px] bg-[#DBAEA0] md:top-[50px]"></div>
            <p className="relative z-10 mx-auto max-w-4xl text-center text-base text-ak-darkblue lg:text-xl">
              {t('page-header-text')}
            </p>
            <h3 className="relative z-10 mx-auto max-w-3xl text-center font-serif text-3xl text-ak-darkblue lg:text-4xl">
              {t('page-header-text-2')}
            </h3>

            <Image
              priority
              src={leafImg}
              alt="Picture of the author"
              className=" absolute -right-24 -right-24 bottom-0 z-0 hidden max-w-[250px] opacity-50 md:block md:opacity-100 2xl:max-w-none "
            />
          </div>
        </div>
      </motion.div>
    </>
  )
}
