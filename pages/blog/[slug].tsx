import { GetStaticProps, GetStaticPaths} from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import Layout from '../../components/Layout'
import Thumbnail from '../../components/Thumbnail'
import StrayButton from '../../components/StrayButton'
import { IPost } from '../../types/post'
import { getPost, getAllPosts } from '../../utils/mdxUtils'

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IPost, 'slug'>;
}
//trying out injecting components into MDXRemote
const components = { StrayButton }

const PostPage: React.FC<PostPageProps> = ({source, frontMatter}: PostPageProps) => {
  return(
  <Layout pageTitle={frontMatter.title}>
    <article className="prose prose-green">
      <div className="mb-4">
        <Thumbnail title={frontMatter.title} src={frontMatter.thumbnail} />
      </div>

      <h1>{frontMatter.title}</h1>

      <p>{frontMatter.description}</p>

      <MDXRemote {...source} components={components} />
    </article>
  </Layout>
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