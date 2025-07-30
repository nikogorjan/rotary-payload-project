'use client'

import { Button, Checkbox, Input, Label, Textarea } from '@relume_io/relume-ui'
import type { Page } from '@/payload-types'
import { useState } from 'react'

export const ContactHero: React.FC<Page['hero']> = ({ contactHeroProps }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [acceptTerms, setAcceptTerms] = useState<boolean | 'indeterminate'>(false)
  if (!contactHeroProps) return null

  const { tagline, heading, description, mapEmbed } = contactHeroProps

  /* form state ---------------------------------------------------------- */

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ name, email, message, acceptTerms })
  }

  return (
    <section
      id="contact-hero"
      className="px-[5%] pb-16 pt-32 md:pb-24 md:pt-32 lg:pb-28 lg:pt-36 bg-scheme1Background"
    >
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
        {/* copy + form (left) */}
        <div>
          <div className="mb-6 md:mb-8">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-5xl font-bebas md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            <p className="md:text-md">{description}</p>
          </div>

          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <div className="grid">
              <Label htmlFor="name" className="mb-2">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className=" rounded-2xl  border-border-primary/15"
              />
            </div>

            <div className="grid">
              <Label htmlFor="email" className="mb-2">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" rounded-2xl border-border-primary/15"
              />
            </div>

            <div className="grid">
              <Label htmlFor="message" className="mb-2">
                Message
              </Label>
              <Textarea
                id="message"
                className="min-h-[11.25rem] overflow-auto rounded-2xl border-border-primary/15"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
              <Checkbox id="terms" checked={acceptTerms} onCheckedChange={setAcceptTerms} />
              <Label htmlFor="terms" className="cursor-pointer">
                I accept the {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                <a className="text-link-primary underline" href="#">
                  Terms
                </a>
              </Label>
            </div>

            <div>
              <Button
                type="submit"
                variant="primary"
                className="w-full md:w-auto rounded-2xl bg-chatmansBlue border-0"
              >
                Pošlji
              </Button>
            </div>
          </form>
        </div>

        {/* Google Map (right) */}
        <div className="flex items-center h-full justify-center">
          {' '}
          {/* ← new flex wrapper */}
          <div className="relative w-full aspect-[4/5]  overflow-hidden rounded-2xl self-center">
            <div
              className="absolute inset-0"
              // eslint-disable-next-line react/no-danger
              // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
              dangerouslySetInnerHTML={{ __html: mapEmbed ?? '' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
