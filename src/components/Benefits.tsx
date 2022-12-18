import type { FC } from 'react'
import { useRef, useEffect } from 'react'
import { useTranslation, Trans } from 'next-i18next'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Parallax } from 'react-scroll-parallax'
import { AnimatedTitle } from './AnimatedTitleH2'
import useMediaQuery from '../../hooks/useMediaQuery'
import { Benefit } from './Benefit'

import benefitItem1 from '../../public/benefits/benefit-1.svg'
import benefitItem2 from '../../public/benefits/benefit-2.svg'
import benefitItem3 from '../../public/benefits/benefit-3.svg'
import benefitItem4 from '../../public/benefits/benefit-4.svg'
import benefitItem5 from '../../public/benefits/benefit-5.svg'
import benefitItem6 from '../../public/benefits/benefit-6.svg'

const BenefitsContainer = motion.div
const BenefitItem = motion.div
const SvgImage = motion.div

export const Benefits: FC = () => {
  const { t } = useTranslation('common')

  // Media query for parallax
  const isSmall = useMediaQuery('(max-width: 1200px)')
  // Content parallax
  const contentYOffset = isSmall ? 1 : 2

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  const ctrls = useAnimation()

  useEffect(() => {
    if (inView) {
      ctrls.start('visible')
    }
    if (!inView) {
      ctrls.start('hidden')
    }
  }, [ctrls, inView])

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <>
      <section className="w-full pb-10">
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute -top-[30px] left-1/2 h-[3px] w-[64px] -translate-x-1/2 bg-ak-gold md:-top-[30px]"
          ></motion.div>

          <AnimatedTitle
            className=" mx-auto max-w-3xl px-6 text-center font-serif text-3xl text-ak-darkblue lg:text-[44px] lg:leading-[52px]"
            text={[t('homesection.benefits.maintitle')]}
          />
          <motion.ul
            ref={ref}
            variants={container}
            initial="hidden"
            animate="visible"
            className="mt-14 grid grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:mx-auto xl:grid-cols-3 2xl:px-0"
          >
            <Benefit
              icon={benefitItem1}
              heading={[t('homesection.benefits.benefit-1')]}
            />

            <Benefit
              icon={benefitItem2}
              heading={[t('homesection.benefits.benefit-2')]}
            />
            <Benefit
              icon={benefitItem3}
              heading={[t('homesection.benefits.benefit-3')]}
            />
            <Benefit
              icon={benefitItem4}
              heading={[t('homesection.benefits.benefit-4')]}
            />
            <Benefit
              icon={benefitItem5}
              heading={[t('homesection.benefits.benefit-5')]}
            />
            <Benefit
              icon={benefitItem6}
              heading={[t('homesection.benefits.benefit-6')]}
            />
          </motion.ul>
        </div>
      </section>
    </>
  )
}
