'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { Button, useMediaQuery } from '@relume_io/relume-ui'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width: 991px)')
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)
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
    <header className="container relative z-20   " {...(theme ? { 'data-theme': theme } : {})}>
      <div className="py-8 flex justify-between">
        <Link href="/">
          <Logo loading="eager" priority="high" className="invert dark:invert-0" />
        </Link>
        <HeaderNav data={data} />
      </div>
    </header>
  )
}
