import { GetStaticProps, GetStaticPaths} from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import Navbar from '../../components/Navbar'
import Layout from '../../components/Layout'
import Thumbnail from '../../components/Thumbnail'
import StrayButton from '../../components/StrayButton'
import { IPost } from '../../types/post'
import { getPost, getAllPosts } from '../../utils/mdxUtils'
import Link from 'next/link'

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, 'slug'>;
}
//trying out injecting components into MDXRemote
const components = { StrayButton }

const PostPage: React.FC<PostPageProps> = ({source, frontMatter}: PostPageProps) => {
  return(
  <div className="ml-4 mr-4 md:ml-28 md:mr-28">
    <Navbar/>
    
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
      <article className="">
 
 
      <p className="text-sm text-gray-300">{frontMatter.date}</p>
      <p className='font-bold'>{frontMatter.description}</p>

      <MDXRemote {...source} components={components} />
      </article>
      <Link href="/blog">
          <a href="/blog" className="text-lg bg-black-500 br-9 font-bold text-gray-300 mr-3">Back</a>
      </Link>
    </div>
  </div>
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