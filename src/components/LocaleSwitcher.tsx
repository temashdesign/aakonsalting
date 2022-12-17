import Link from 'next/link'
import { useRouter } from 'next/router'
import type { FC } from 'react'
import clsx from 'clsx'

const locales = ['ru', 'en', 'cg']

export const LocaleSwitcher: FC = () => {
  const router = useRouter()
  return (
    <>
      <ul className="top-16 right-0 mt-6 flex justify-center lg:absolute">
        {locales.map((loc, i) => {
          return (
            <li key={loc}>
              <Link href="/" locale={loc}>
                <span
                  className={clsx(
                    'flex h-10 w-10 items-center justify-center rounded-full capitalize text-white transition duration-200',
                    router.locale === loc
                      ? ' active cursor-default bg-ak-gold'
                      : ''
                  )}
                >
                  {loc}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
