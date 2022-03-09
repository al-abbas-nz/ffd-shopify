import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { Page } from '@commerce/types/page'
import getSlug from '@lib/get-slug'
import {
  Bandcamp,
  Facebook,
  Instagram,
  Soundcloud,
  Spotify,
  Twitter,
  Youtube,
} from '@icons-pack/react-simple-icons'
import { Container } from '@components/ui'

import s from './Footer.module.css'
import DropdownMenu from '../UserNav/DropdownMenu'

interface Props {
  className?: string
  children?: any
  pages?: Page[]
}

const links = [
  {
    name: 'Home',
    url: '/',
  },
]

let date = new Date()

const Footer: FC<Props> = ({ className, pages }) => {
  const { sitePages } = usePages(pages)
  const rootClassName = cn(s.root, className)

  return (
    <footer className={rootClassName}>
      <Container>
        <div className="relative">
          <div className="flex justify-left">
            <div className="">
              {[...links, ...sitePages]
                .filter((page) => page.name == 'Home')
                .map((page) => (
                  <span key={page.url} className="py-3 md:py-0 md:pb-4">
                    <Link href={page.url!}>
                      <a className="text-accent-9 hover:text-accent-6 transition ease-in-out duration-150">
                        {page.name}
                      </a>
                    </Link>
                  </span>
                ))}
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 flex justify-center text-primary">
            <div className="pt-5 flex space-x-2 justify-center h-10">
              <a
                href="https://www.facebook.com/fatfreddysdropnz"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Facebook className={s.socialIcon} />
              </a>
              <a
                href="https://www.instagram.com/fatfreddysdropnz/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Instagram className={s.socialIcon} />
              </a>
              <a
                href="https://twitter.com/fatfreddysdrop1"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Twitter className={s.socialIcon} />
              </a>
              <a
                href="https://www.youtube.com/user/fatfreddysdroptv"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Youtube className={s.socialIcon} />
              </a>
              <a
                href="https://soundcloud.com/fat-freddys-drop"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Soundcloud className={s.socialIcon} />
              </a>
              <a
                href="https://fatfreddysdrop.bandcamp.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Bandcamp className={s.socialIcon} />
              </a>
              <a
                href="https://open.spotify.com/artist/32lo0J8u6KZJTwBOIBrdYS"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Spotify className={s.socialIcon} />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-6 pb-10 flex flex-col md:flex-row justify-between items-center space-y-4 text-accent-6 text-sm">
          <div>
            <span>
              &copy; {date.getFullYear()} Fat Freddys Drop.
            </span>
          </div>
          <div className="flex items-center text-primary text-sm">
            <span className="text-primary"></span>
          </div>
        </div>
      </Container>
    </footer>
  )
}

function usePages(pages?: Page[]) {
  const { locale } = useRouter()
  const sitePages: Page[] = []

  if (pages) {
    pages.forEach((page) => {
      const slug = page.url && getSlug(page.url)
      if (!slug) return
      if (locale && !slug.startsWith(`${locale}/`)) return
      sitePages.push(page)
    })
  }

  return {
    sitePages: sitePages.sort(bySortOrder),
  }
}

// Sort pages by the sort order assigned in the BC dashboard
function bySortOrder(a: Page, b: Page) {
  return (a.sort_order ?? 0) - (b.sort_order ?? 0)
}

export default Footer
