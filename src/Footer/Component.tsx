import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import { Media } from '@/components/Media'
import type { Footer } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { FaXTwitter } from 'react-icons/fa6'
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from 'react-icons/bi'

const renderSocialIcon = (icon: string): React.ReactNode => {
  switch (icon) {
    case 'facebook':
      return <BiLogoFacebookCircle className="size-6 text-white" />
    case 'instagram':
      return <BiLogoInstagram className="size-6 text-white" />
    case 'twitter':
      return <FaXTwitter className="size-6 p-0.5 text-white" />
    case 'linkedin':
      return <BiLogoLinkedinSquare className="size-6 text-whitetext-white" />
    case 'youtube':
      return <BiLogoYoutube className="size-6 text-white" />
    default:
      return null
  }
}

export async function Footer() {
  const footerData = (await getCachedGlobal('footer', 1)()) as Footer

  const navItems = footerData?.navItems || []

  return (
    <footer id="footer" className="px-[5%] py-12 md:py-18 lg:py-20 bg-abbeyBackground">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div>
            <div className="rb-6 mb-6 md:mb-8 relative size-9 aspect-square">
              <Link href={footerData.logo.url ?? ''}>
                <div className="relative size-9">
                  <Media
                    fill
                    imgClassName="relative size-full object-cover rounded-medium"
                    priority
                    resource={footerData.logo.src}
                  />
                </div>
              </Link>
            </div>
            <div className="rb-6 mb-6 md:mb-8">
              <div>
                <p className="mb-1 text-sm font-semibold font-karla text-white">
                  {footerData.address.label}
                </p>
                <p className="mb-5 text-sm md:mb-6 font-karla text-white">
                  {footerData.address.value}
                </p>
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold font-karla text-white">
                  {footerData.contact.label}
                </p>
                <p className="font-karla text-white flex flex-col text-sm underline decoration-black underline-offset-1 md:mb-6">
                  <Link href={`tel:${footerData.contact.phone}`}>{footerData.contact.phone}</Link>
                  <Link href={`mailto:${footerData.contact.email}`}>
                    {footerData.contact.email}
                  </Link>
                </p>
              </div>
            </div>
            <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
              {(footerData.socialMediaLinks ?? []).map((link, index) => (
                <Link key={index} href={link.url}>
                  {renderSocialIcon(link.icon)}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink className=" lg:text-right font-karla text-white" key={i} {...link} />
            })}
          </div>
        </div>

        <div className="h-px w-full bg-white" />
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
          <p className="font-karla text-white mt-8 md:mt-0">{footerData.footerText}</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            {(footerData.footerLinks ?? []).map((link, index) => (
              <li key={index} className="underline">
                <Link className="font-karla text-white" href={link.url}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
