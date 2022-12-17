import Head from 'next/head'
import type { FC } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslation, Trans } from 'next-i18next'
import { Parallax } from 'react-scroll-parallax'

import useMediaQuery from '../../hooks/useMediaQuery'
import pageHeaderBg from '../../public/pageheaderbg.jpg'
import pageHeaderBgMob from '../../public/pageheaderbg_mob.jpg'
import leafImg from '../../public/leaf.png'
import { AnimatedTitle } from './AnimatedTitle'
import { Logo } from './Logo'
import { LocaleSwitcher } from './LocaleSwitcher'

type Props = {
  heading: string
  heading2: string
}

export const PageHeader: FC<Props> = ({ heading, heading2 }) => {
  const { t } = useTranslation('common')

  // Media query for parallax
  const isSmall = useMediaQuery('(max-width: 1200px)')
  // Content parallax
  const contentYOffset = isSmall ? 0 : 8
  const imageContentYOffset = isSmall ? 0 : -10

  return (
    <>
      <div className="relative grid h-[60vh] min-h-[650px] w-full grid-cols-1 items-stretch justify-center bg-ak-darkblue 2xl:h-[70vh] 2xl:min-h-[850px]">
        <header className="relative z-10 mx-6 max-w-6xl self-start text-center lg:mx-auto lg:w-full 2xl:max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <LocaleSwitcher />
            <Logo />
          </motion.div>
        </header>

        <div className="mx-auto max-w-7xl self-start pb-32 2xl:pb-52">
          <Parallax speed={contentYOffset} className="relative z-10">
            <AnimatedTitle
              className="page-header-title relative z-10 max-w-7xl text-center font-serif text-white"
              text={[heading, heading2]}
            />
          </Parallax>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 h-full w-full overflow-hidden"
          >
            <Parallax
              speed={imageContentYOffset}
              className="relative h-full w-full"
            >
              <Image
                priority
                fill
                src={pageHeaderBg}
                alt="Picture of the author"
                className="z-0 hidden h-full w-full -translate-y-4 object-cover object-center md:block md:scale-105"
              />
              <Image
                priority
                fill
                src={pageHeaderBgMob}
                alt="Picture of the author"
                className=" z-0 block h-full w-full -translate-y-4 object-cover object-center md:hidden md:scale-105"
              />
            </Parallax>
          </motion.div>
        </div>
      </div>
    </>
  )
}
