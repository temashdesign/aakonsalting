import Head from 'next/head'
import type { FC } from 'react'

type Props = {
  title: string
  description: string
}

export const Header: FC<Props> = ({ title, description }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  </>
)
