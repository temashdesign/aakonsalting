import Link from 'next/link'
import { useRouter } from 'next/router'
import type { FC } from 'react'
import clsx from 'clsx'

const locales = ['ru', 'en', 'crn']

export const LocaleSwitcher: FC = () => {
  const router = useRouter()
  return (
    <>
      <ul className="top-20 right-6 mt-6 flex justify-center lg:absolute">
        {locales.map((loc, i) => {
          return (
            <li key={loc}>
              <Link href="/" locale={loc}>
                <span
                  className={clsx(
                    'flex h-10 w-10 items-center justify-center rounded-full capitalize text-ak-darkblue transition duration-200',
                    router.locale === loc
                      ? ' active bg-ak-blue text-white  hover:bg-ak-darkblue '
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
