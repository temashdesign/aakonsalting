import type { FC } from 'react'
import { useTranslation, Trans } from 'next-i18next'
import { AnimatedTitle } from './AnimatedTitleH2'

export const Services: FC = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <section className="h-screen w-full py-20">
        <AnimatedTitle
          className=""
          text={[t('homesection.services.maintitle')]}
        />
        <div className="mx-6 grid max-w-7xl grid-cols-3 gap-4 lg:mx-auto"></div>
      </section>
    </>
  )
}
