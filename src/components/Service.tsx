import type { FC } from 'react'
import { useEffect } from 'react'
import clsx from 'clsx'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useAnimation, motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { Parallax } from 'react-scroll-parallax'
import { useTranslation, Trans } from 'next-i18next'
import { AnimatedTitle } from './AnimatedTitleH2'
import useMediaQuery from '../../hooks/useMediaQuery'

const Line = motion.div

type Props = {
  image: string | StaticImageData
  title: string[]
  subtitle: string[]
  panel: string[]
  paragraph: string
  image_align: string
  subtitle_align: string
}

export const Service: FC<Props> = ({
  image,
  title,
  subtitle,
  paragraph,
  panel,
  image_align = 'left',
  subtitle_align = 'top',
}) => {
  const { t } = useTranslation('common')

  // Media query for parallax
  const isSmall = useMediaQuery('(max-width: 1024px)')
  // Content parallax
  const contentYOffset = isSmall ? 0 : 5

  const ctrls = useAnimation()

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      ctrls.start('visible')
    }
    if (!inView) {
      ctrls.start('hidden')
    }
  }, [ctrls, inView])

  const serviceCardAnimation = {
    hidden: {},
    visible: {
      transition: { delay: 1 },
    },
  }

  const lineAnimation = isSmall
    ? {
        hidden: {
          opacity: 0,
          height: `0px`,
        },
        visible: {
          opacity: 1,
          height: `30px`,
          transition: {
            duration: 1,
            ease: [0.2, 0.65, 0.3, 0.9],
          },
        },
      }
    : {
        hidden: {
          opacity: 0,
          height: `0px`,
        },
        visible: {
          opacity: 1,
          height: `50px`,
          transition: {
            duration: 1,
            ease: [0.2, 0.65, 0.3, 0.9],
          },
        },
      }

  const imageAnimation = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <>
      <Disclosure>
        {({ open }) => (
          <motion.div
            className="service-panel-container mb-10"
            ref={ref}
            aria-hidden="true"
            initial="hidden"
            animate={ctrls}
            variants={serviceCardAnimation}
          >
            <div className="grid w-full max-w-7xl grid-cols-1 items-center overflow-hidden rounded-xl bg-white px-6 pt-10 shadow-[0_26px_50px_0px_rgba(42,82,143,0.1)] md:grid-cols-2 md:pt-0 md:pb-0 lg:px-24">
              <div
                className={clsx(
                  'service-item-title relative flex h-full items-center',
                  {
                    'md:order-1': image_align == 'left',
                  }
                )}
              >
                <Line
                  variants={lineAnimation}
                  className="line-item absolute top-0 left-0 hidden w-[1px] bg-ak-darkblue lg:block"
                ></Line>
                <Parallax speed={3}>
                  <div className="flex flex-col lg:mt-8">
                    <AnimatedTitle
                      text={subtitle}
                      className={clsx(
                        'service-subtitle font-serif text-xl leading-[1.6] text-[#5E6776] md:text-2xl',
                        {
                          'order-2': subtitle_align == 'bottom',
                        }
                      )}
                    />
                    <AnimatedTitle
                      className="service-title font-serif text-3xl font-black uppercase text-ak-darkblue md:text-4xl lg:text-5xl lg:leading-[1.1]"
                      text={title}
                    />
                  </div>
                  <Disclosure.Button className="mt-8 mb-4 flex justify-between gap-2 rounded-full bg-ak-gold px-5 py-4 text-left text-sm font-bold text-white transition duration-200 hover:bg-ak-darkblue md:px-8 md:py-5">
                    <span className=" ">
                      {[t('hservicessection.services.button')]}
                    </span>
                    <ChevronDownIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-white`}
                    />
                  </Disclosure.Button>
                </Parallax>
              </div>

              {image ? (
                <motion.div
                  variants={imageAnimation}
                  className={clsx('service-item-image flex lg:mt-16', {
                    'justify-start': image_align == 'left',
                    'justify-end': image_align == 'right',
                  })}
                >
                  <Image
                    priority
                    src={image}
                    alt="Picture of the author"
                    quality="90"
                  />
                </motion.div>
              ) : null}
            </div>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform opacity-0"
              enterTo="transform opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform opacity-100"
              leaveTo="transform opacity-0"
            >
              <Disclosure.Panel className="service-panel border-b pt-8 pb-8 text-base text-ak-darkblue lg:px-12 lg:pt-14 lg:pb-8 lg:text-xl">
                {paragraph ? (
                  <p className="mb-5 font-bold">{paragraph}</p>
                ) : null}
                <ul>
                  {panel.map((list, index) => {
                    return (
                      <li key={index} className="mb-2 flex items-center gap-3">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 min-w-[16px]"
                        >
                          <path
                            d="M7.9924 0C8.81369 0.652296 9.66539 1.03774 10 1.66039C11.0646 3.67658 12.5856 5.12942 14.654 6.19681C16.4487 7.11596 16.4487 9.25074 14.654 10.1699C12.5856 11.2373 11.0951 12.6901 10.0304 14.7063C9.08745 16.4557 6.89734 16.426 5.95437 14.647C4.88973 12.6605 3.42966 11.2373 1.39163 10.1995C-0.463878 9.25075 -0.463878 7.14561 1.39163 6.16716C3.42966 5.12942 4.88973 3.67658 5.95437 1.71969C6.31939 1.03774 7.20152 0.652296 7.9924 0ZM7.9924 10.7332C8.81369 9.96234 9.87832 8.95425 10.6084 8.24265C9.78707 7.41246 8.78327 6.34506 8.05323 5.60382C7.20152 6.37471 6.10647 7.38281 5.25476 8.1537C6.13689 8.95425 7.17111 9.93269 7.9924 10.7332Z"
                            fill="#F7B66A"
                          />
                        </svg>
                        {list}
                      </li>
                    )
                  })}
                </ul>
              </Disclosure.Panel>
            </Transition>
          </motion.div>
        )}
      </Disclosure>
    </>
  )
}
