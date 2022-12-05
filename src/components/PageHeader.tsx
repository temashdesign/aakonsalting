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

type Props = {
  heading: string
  heading2: string
}

export const PageHeader: FC<Props> = ({ heading, heading2 }) => {
  const { t } = useTranslation('common')

  // Media query for parallax
  const isSmall = useMediaQuery('(max-width: 1200px)')
  // Content parallax
  const contentYOffset = isSmall ? 5 : 10

  return (
    <>
      <div className="relative grid w-full grid-cols-1 flex-col content-between justify-center bg-ak-darkblue md:h-[100vh] md:min-h-[800px]">
        <header className="relative z-10 mx-6 max-w-7xl text-center lg:mx-auto lg:w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <LocaleSwitcher />
            <Logo />
          </motion.div>
        </header>

        <div className=" mx-auto max-w-7xl">
          <AnimatedTitle
            className="page-header-title relative z-10 my-16 max-w-7xl text-center text-4xl text-white lg:text-7xl"
            text={[heading, heading2]}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 h-full w-full">
              <Image
                priority
                fill
                src={pageHeaderBg}
                alt="Picture of the author"
                className="z-0 h-full w-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="overflow-hidden">
            <div className="relative z-10 mx-0 grid grid-cols-1 items-center gap-7 bg-ak-darkblue/80 p-10 pt-16 pb-10 backdrop-blur-sm md:mx-6 md:mb-24 md:rounded-2xl md:bg-ak-darkblue/80 lg:px-20 lg:pb-20 xl:mx-auto xl:max-w-7xl">
              <div className="absolute left-[calc(50%-30px)] top-[30px] h-[2px] w-[60px] bg-[#DBAEA0] md:top-[50px]"></div>
              <p className="relative z-10 mx-auto max-w-4xl text-center text-base text-white lg:text-xl">
                {t('page-header-text')}
              </p>
              <h3 className="relative z-10 mx-auto max-w-3xl text-center text-2xl font-bold text-white lg:text-4xl">
                {t('page-header-text-2')}
              </h3>
              <Image
                priority
                src={leafImg}
                alt="Picture of the author"
                className=" absolute right-0 bottom-0 z-0 opacity-60 md:opacity-100 lg:-right-14"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
