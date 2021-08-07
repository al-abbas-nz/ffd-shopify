import React, { FC } from 'react'
import { Container } from '@components/ui'
import { ArrowRight } from '@components/icons'
import s from './Hero.module.css'
import Link from 'next/link'
import Text from '@components/ui/Text'
// import Image from 'next/image'
// import heroImage from '../../../public/assets/FFDHERO.jpg'
interface HeroProps {
  className?: string
  headline?: string
  description?: string
}

const Hero: FC<HeroProps> = ({ headline, description }) => {
  return (
    <div className="flex justify-center">
      <Container>
        <div className={s.root}>
          {/* <h2 className={s.title}>{headline}</h2> */}
          <Text variant="body" html={description} />
          {/* <p>{description}</p> */}
          {/* <Link href="/search">
              <a className="flex items-center text-accent-0 pt-3 font-bold hover:underline cursor-pointer w-max-content">
                View the catalogue here
                <ArrowRight width="20" heigh="20" className="ml-1" />
              </a>
            </Link> */}
        </div>
      </Container>
    </div>
  )
}

export default Hero
