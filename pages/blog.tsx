import {GetStaticProps} from 'next'
import { NextPage } from 'next'
import fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import { IPost } from '../types/post'
import { getAllPosts } from '../utils/mdxUtils'
import Thumbnail from '../components/Thumbnail'
import Navbar from '../components/Navbar'

type PostProps = {
  posts: IPost[];
}
const FeaturedArticles:React.FC<PostProps> = ({posts}) => {
  return (
      <div className="articles__featured">
        <article className="main-article">
          <p></p>
        </article>
        <div className="articles__other">
          <article></article>
          <article></article>
          <article></article>
        </div>
      </div>
  )
}
const Blog: React.FC<PostProps> = ({posts}: PostProps) => {
  
  console.log(posts)
  //Because there will always be 4 featured articles, I'm hard coding the reference to them here
  const mainArticle = posts[0]
  const articleTwo = posts[1]
  const articleThree = posts[2]
  const articleFour = posts[3]
  const otherArticles = posts.slice(4)

  return (
    <div className="blog--container ml-4 mr-4 md:ml-32 md:mr-32">
      <Navbar/>
      <div className="articles__container">
        <div className="articles__featured--main w-full">
          <article className="main-article">
            <h1 className="text-3xl font-bold mb-4">Featured Articles</h1>
            <div className="">
              <div className="mb-4">
                <Thumbnail
                  slug={mainArticle.slug}
                  title={mainArticle.title}
                  src={mainArticle.thumbnail}
                />
              </div>
              <div className="article__attributes flex mb-2 align-middle justify-between">
                <p className="text-sm text-gray-300">{mainArticle.date}</p>
                <p className="text-sm text-gray-300">Image by {mainArticle.thumbnailAttr} </p>
              </div>
              <p className="text-2xl font-bold mb-2">{mainArticle.title}</p>
              <p className="text-xs sm:text-lg">{mainArticle.description}</p>
            </div>
          </article>
          <div className="articles__featured--other">
            <article></article>
            <article></article>
            <article></article>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    'slug',
    'date',
    'thumbnail',
    'thumbnailAttr',
    'title',
    'description',
  ]);

  return { props: { posts } };
};