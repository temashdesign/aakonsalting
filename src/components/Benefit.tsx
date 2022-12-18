import type { FC } from 'react'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { useTranslation, Trans } from 'next-i18next'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Parallax } from 'react-scroll-parallax'
import { AnimatedTitle } from './AnimatedTitleH2'
import useMediaQuery from '../../hooks/useMediaQuery'

const BenefitItem = motion.li
const BenefitItemText = motion.p
const SvgImage = motion.div

type Props = {
  icon: string
  heading: string[]
}

export const Benefit: FC<Props> = ({ icon, heading }) => {
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

  const CardAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.2 },
    },
  }

  const SvgAnimation = {
    hidden: {
      opacity: 0,
      scale: 1.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  const TextAnimation = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <>
      <BenefitItem
        ref={ref}
        aria-hidden="true"
        initial="hidden"
        animate={ctrls}
        variants={CardAnimation}
        className="flex flex-col items-center justify-center gap-5 rounded-xl bg-white py-12 px-10 text-center shadow-[0_26px_50px_0px_rgba(42,82,143,0.1)] lg:py-24"
      >
        <SvgImage variants={SvgAnimation}>
          <Image priority src={icon} alt="benefit" className="" />
        </SvgImage>
        <BenefitItemText
          variants={TextAnimation}
          className="text-lg font-bold text-ak-darkblue lg:text-xl"
        >
          {heading}
        </BenefitItemText>
      </BenefitItem>
    </>
  )
}
