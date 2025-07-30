import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { CardBig } from '@/components/CardBig'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    sort: '-publishedAt',
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
      publishedAt: true,
    },
  })

  const [featuredPost, ...otherPosts] = posts.docs

  return (
    <div className="px-[5%] pb-16 pt-32 md:pb-24 md:pt-32 lg:pb-28 lg:pt-36 bg-scheme1Background">
      <div className="container">
        <PageClient />
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4 font-karla">Dogodki</p>
            <h1 className="font-bebas mb-5 text-6xl md:mb-6 md:text-9xl lg:text-10xl">
              Srce dobrodelnosti
            </h1>
            <p className="font-karla md:text-md">
              Vsak dogodek nosi zgodbo o solidarnosti. Delimo trenutke, ideje in uspehe, ki kažejo,
              kako lahko majhna dejanja ustvarijo velik učinek.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-start">
          <CardBig className="h-full" doc={featuredPost} relationTo="posts" showCategories />
        </div>

        <div className="container mb-8">
          <PageRange
            collection="posts"
            currentPage={posts.page}
            limit={2}
            totalDocs={posts.totalDocs}
          />
        </div>

        <CollectionArchive posts={posts.docs} />

        <div className="container">
          {posts.totalPages > 1 && posts.page && (
            <Pagination page={posts.page} totalPages={posts.totalPages} />
          )}
        </div>
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Dogodki Rotary Martjanci',
  }
}
