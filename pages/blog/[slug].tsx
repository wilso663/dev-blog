import { GetStaticProps, GetStaticPaths} from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import BlogNav from '../../components/BlogNav'
import Footer from '../../components/Footer'
import MTGCard from '../../components/MTGCard'
import StrayButton from '../../components/StrayButton'
import { IPost } from '../../types/post'
import { getPost, getAllPosts } from '../../utils/mdxUtils'
import Link from 'next/link'

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, 'slug'>;
}
//trying out injecting components into MDXRemote
const components = { MTGCard, StrayButton, Link, Image }

const PostPage: React.FC<PostPageProps> = ({source, frontMatter}: PostPageProps) => {
  return(
    <>
  <div className="ml-4 mr-4 mb-8 md:ml-28 md:mr-28">
    <BlogNav/>
    
    <div className="mb-4 mt-10 w-full max-w-5xl mx-auto">
    <h1 className="font-bold text-3xl md:text-5xl mb-6">{frontMatter.title}</h1>  
        <Image
        src={frontMatter.thumbnail}
        alt={`Cover image for ${frontMatter.title}`}
        width={3200}
        height={2000}
        layout="responsive"
        object-fit="cover"
        />
      </div>
    <div className="prose pt-4 w-full max-w-5xl mx-auto" style={{width: '100%'}}>
      <article className="mb-4 pb-8">
 
      <div className="flex flex-col md:flex-row justify-between">
        <p className="text-sm text-gray-300 my-0">{frontMatter.date}</p>
        <p className="text-sm text-gray-300 mt-1 md:my-0 md:mr-1 ">Photo by: {frontMatter ? frontMatter.thumbnailAttr: 'Unknown'}</p>
      </div>
      <p className='font-bold'>{frontMatter.description}</p>

      <MDXRemote {...source} components={components} /> 
      </article>
      <Link className="" href="/blog">
          <a href="/blog" className="drop-shadow-lg px-5 py-2 rounded-md text-lg bg-black font-bold text-gray-300 mr-3 no-underline">Return to blog</a>
      </Link>
    </div>
  </div>
  <Footer/>
  </>
  )
}

export default PostPage;

export const getStaticProps: GetStaticProps = async({params}) => {
  const {content, data} = getPost(params?.slug as string)
  const mdxSource = await serialize(content, {scope: data})

  return {
    props: {
      source: mdxSource,
      frontMatter: data
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug'])

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }))

  return {
    paths, 
    fallback: false,
  }
}