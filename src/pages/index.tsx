import Link from 'next/link'
import { ParallaxProvider } from 'react-scroll-parallax'
import { useRouter } from 'next/router'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Raleway } from '@next/font/google'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { LocaleSwitcher } from 'src/components/LocaleSwitcher'
import { PageHeader } from 'src/components/PageHeader'
import { Services } from 'src/components/Services'

const raleway = Raleway({
  subsets: ['cyrillic', 'latin-ext', 'latin'],
  variable: '--font-raleway',
  display: 'swap',
})

type Props = {
  // Add custom props here
}

const Homepage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  const { t } = useTranslation('common')

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  const changeTo = router.locale === 'en' ? 'de' : 'en'

  return (
    <ParallaxProvider>
      <div className={`${raleway.variable} w-full font-sans`}>
        <Header title={t('title')} description={t('description')} />
        <PageHeader heading={t('h1')} heading2={t('h1-2')} />
        <Services />
      </div>
    </ParallaxProvider>
  )
}

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'ru', ['common', 'footer'])),
  },
})

export default Homepage
