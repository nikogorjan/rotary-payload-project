'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import type React from 'react'
import { Fragment } from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'>

export const CardBig: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const { slug, categories, meta, title } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`

  return (
    <article
      className={cn(
        'overflow-hidden bg-white border border-neutralDarkest15 rounded-xl rb-12 mb-12 md:mb-16',
        className,
      )}
    >
      <div className="grid grid-cols-1 items-center md:grid-cols-2">
        {!metaImage && <div className="">No image</div>}
        {metaImage && typeof metaImage !== 'string' && (
          <Link
            href={href}
            className="block h-full w-full overflow-hidden rounded-lg" // <– 1. ovojnica
          >
            <Media
              resource={metaImage}
              className="h-full w-full" // <– 2. ovoj z relativen položaj
              imgClassName="h-full w-full object-cover" // <– 3. slika raztegnjena
              size="100vw" /* poljubno: za <Image sizes="…"> */
            />
          </Link>
        )}
        <div className="flex h-full flex-col items-start justify-center bg-white p-6 md:p-8">
          {showCategories && hasCategories && (
            <div className="uppercase text-sm mb-4">
              {showCategories && hasCategories && (
                <div>
                  {categories?.map((category, index) => {
                    if (typeof category === 'object') {
                      const { title: titleFromCategory } = category

                      const categoryTitle = titleFromCategory || 'Untitled category'

                      const isLast = index === categories.length - 1

                      return (
                        <Fragment key={category.id}>
                          {categoryTitle}
                          {!isLast && ', &nbsp;'}
                        </Fragment>
                      )
                    }

                    return null
                  })}
                </div>
              )}
            </div>
          )}
          {titleToUse && (
            <div className="prose">
              <h3 className="font-bebas font-normal not-prose mb-2 text-2xl md:text-3xl md:leading-[1.3] lg:text-4xl">
                {titleToUse}
              </h3>
            </div>
          )}
          {description && (
            <div className="mt-2 font-karla">{description && <p>{sanitizedDescription}</p>}</div>
          )}

          <div className="mt-2">
            <CMSLink type="custom" url={href} appearance="blogLink" label="Preberi več" />
          </div>
        </div>
      </div>
    </article>
  )
}
