'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { Button, useMediaQuery } from '@relume_io/relume-ui'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { HeaderNav } from './Nav'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width: 991px)')

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)
  // New function to just close the menu
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev)
  }
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true)
  }
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false)
  }
  const animateMobileMenu = isMobileMenuOpen ? 'open' : 'close'
  const animateMobileMenuButtonSpan = isMobileMenuOpen ? ['open', 'rotatePhase'] : 'closed'
  const animateDropdownMenu = isDropdownOpen ? 'open' : 'close'
  const animateDropdownMenuIcon = isDropdownOpen ? 'rotated' : 'initial'
  return {
    toggleMobileMenu,
    closeMobileMenu, // add the close function here
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  }
}

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const useActive = useRelume()

  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <section
      id="relume"
      className="fixed top-0 left-0 z-[999] flex w-full items-center border-b border-border-neutralDarkest15 bg-background-primary lg:min-h-18 lg:px-[5%]"
    >
      <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <Link href="/">
            <div className="relative w-24 h-9">
              <Media
                fill
                imgClassName="relative size-full object-cover"
                priority
                resource={data.rotaryLogo}
              />
            </div>
          </Link>
          <div className="flex items-center gap-4 lg:hidden">
            <div>
              <Button
                className="bg-chatmansBlue font-karla border border-chatmansBlue rounded-xl"
                title="Learn More"
                size="sm"
              >
                Kontakt
              </Button>
            </div>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
              onClick={useActive.toggleMobileMenu}
            >
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: 8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={useActive.animateMobileMenu}
                variants={{
                  open: { width: 0, transition: { duration: 0.1 } },
                  closed: {
                    width: '1.5rem',
                    transition: { delay: 0.3, duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={useActive.animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: -8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
            </button>
          </div>
        </div>
        <motion.div
          variants={{
            open: { height: 'var(--height-open, 100dvh)' },
            close: { height: 'var(--height-closed, 0)' },
          }}
          animate={useActive.animateMobileMenu}
          initial="close"
          exit="close"
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] text-left flex flex-col lg:flex-row lg:items-center lg:justify-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          <HeaderNav data={data} onLinkClick={useActive.closeMobileMenu} />
        </motion.div>
        <div className="hidden justify-self-end lg:block">
          {(data?.links ?? []).map(({ link }, i) => (
            <CMSLink {...link} key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
