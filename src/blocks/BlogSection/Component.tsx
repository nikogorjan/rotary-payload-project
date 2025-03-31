import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'
import type { BlogSection as BlogSectionProps } from '@/payload-types'

export const BlogSection: React.FC<BlogSectionProps> = ({
  tagline,
  heading,
  description,
  links,
  blogPosts,
}) => {
  return (
    <section id="blog-section" className="px-[5%] py-16 md:py-24 lg:py-28 bg-scheme1Background">
      <div className="container">
        <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
          <div className="md:mr-12 lg:mr-0">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-karla font-bold md:mb-4">{tagline}</p>
              <h2 className="mb-3 text-5xl font-bebas md:mb-4 md:text-7xl lg:text-8xl">
                {heading}
              </h2>
              <p className="md:text-md font-karla font-light">{description}</p>
            </div>
          </div>
          <div className="hidden md:flex">
            <div className="flex flex-wrap items-center gap-4">
              {(links || []).map(({ link }, i) => {
                return <CMSLink key={i} size="lg" {...link} />
              })}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {(blogPosts ?? []).map((post, index) => (
            <div key={index} className="flex size-full flex-col items-center justify-start">
              <a href={post.url} className="relative aspect-video mb-6 w-full">
                <Media
                  fill
                  imgClassName="relative size-full object-cover rounded-medium"
                  priority
                  resource={post.image}
                />
              </a>
              <div className="rb-4 mb-4 flex w-full items-center justify-start">
                <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-karla">
                  {post.category}
                </p>
                <p className="inline text-sm font-karla">{post.readTime}</p>
              </div>
              <div className="flex w-full flex-col items-start justify-start">
                <a className="mb-2" href={post.url}>
                  <h2 className="text-xl font-bebas md:text-2xl">{post.title}</h2>
                </a>
                <p className="font-karla font-light">{post.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  {(post.links || []).map(({ link }, i) => {
                    return <CMSLink key={i} size="lg" {...link} />
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
