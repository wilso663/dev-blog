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
  //Because there will always be 4 featured articles, I'm hard coding the reference to them here
  const mainArticle = posts[0]
  const articleTwo = posts[1]
  const articleThree = posts[2]
  const articleFour = posts[3]
  const otherArticles = posts.slice(4)

  return (
    <div className="blog--container ml-4 mr-4 md:ml-28 md:mr-28">
      <Navbar />
      <div className="articles__container">
      <h1 className="text-3xl font-bold mb-4">Featured Articles</h1>
        <div className="articles__featured--main w-full grid md:grid-cols-2">
          <article className="main-article md:mr-4 mb-4">
  
            <div className="mb-4">
              <div className="mb-4">
                <Thumbnail
                  slug={mainArticle.slug}
                  title={mainArticle.title}
                  src={mainArticle.thumbnail}
                />
              </div>
              <div className="article__attributes flex mb-2 align-middle justify-between">
                <p className="text-sm text-gray-300">{mainArticle.date}</p>
              </div>
              <p className="text-2xl lg:text-4xl font-bold mb-2">{mainArticle.title}</p>
              <p className="md:text-sm lg:text-lg">{mainArticle.description}</p>
            </div>
          </article>
          <div className="articles__featured--other md:col-start-2 ">
            <article className='border-b-gray-300 border-b-2 grid grid-cols-2 pb-5'>
              <div className="mr-4">
                <Thumbnail
                  slug={articleTwo.slug}
                  title={articleTwo.title}
                  src={articleTwo.thumbnail}
                />
              </div>
              <div className="article__featured--other-info " >
                <p className="text-sm text-gray-300">{articleTwo.date}</p>
                <p className="xs:text-sm sm:text-2xl md:text-lg lg:text-2xl font-bold">{articleTwo.title}</p>
              </div>
            </article>

            <article className='border-b-gray-300 border-b-2 grid grid-cols-2 mt-5 pb-5'>
              <div className=" mr-4">
                <Thumbnail
                  slug={articleThree.slug}
                  title={articleThree.title}
                  src={articleThree.thumbnail}
                  />
              </div>
              <div className="article__featured--other-info ">
                <p className="text-sm text-gray-300">{articleThree.date}</p>
                <p className="xs:text-sm sm:text-2xl md:text-lg lg:text-2xl font-bold">{articleThree.title}</p>
              </div>
            </article>
            <article className='border-b-gray-300 border-b-2 grid grid-cols-2 mt-5 pb-5'>
              <div className=" mr-4">
                <Thumbnail
                  slug={articleFour.slug}
                  title={articleFour.title}
                  src={articleFour.thumbnail}
                  />
              </div>
              <div className="article__featured--other-info ">
                <p className="text-sm text-gray-300">{articleFour.date}</p>
                <p className="xs:text-sm sm:text-2xl md:text-lg lg:text-2xl font-bold">{articleFour.title}</p>
              </div>
            </article>
          </div>
        </div>
        <h2 className="text-3xl font-bold mt-8 mb-8">Previous Articles</h2>
        <div className="articles__previous--main w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          
          {otherArticles.map((article, index) => {
            return (
            <article key={index} className='grid grid-cols-1 pb-5 mr-4 mb-5'>
              <div className="">
                <Thumbnail
                  slug={article.slug}
                  title={article.title}
                  src={article.thumbnail}
                />
              </div>
              <div className="article__previous--other-info " >
                <p className="text-sm text-gray-300 mt-2">{article.date}</p>
                <p className="text-3xl sm:text-2xl md:text-lg lg:text-2xl font-bold">{article.title}</p>
              </div>
            </article>

            )
          })}
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