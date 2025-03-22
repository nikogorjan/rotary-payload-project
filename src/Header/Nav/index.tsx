import React from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

interface HeaderNavProps {
  data: HeaderType
  onLinkClick?: () => void
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ data, onLinkClick }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex gap-3 flex-col lg:flex-row lg:items-center lg:justify-center">
      {navItems.map(({ link }, i) => (
        <CMSLink key={i} {...link} appearance="link" onClick={onLinkClick} />
      ))}
    </nav>
  )
}
