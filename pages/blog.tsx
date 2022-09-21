import { useState, useEffect } from 'react'
import {GetStaticProps} from 'next'
import { IPost } from '../types/post'
import { getAllPosts } from '../utils/mdxUtils'
import Thumbnail from '../components/Thumbnail'
import BlogNav from '../components/BlogNav'
import Footer from '../components/Footer'

type PostProps = {
  posts: IPost[];
}

const Blog: React.FC<PostProps> = ({posts}: PostProps) => {

  const [pageNumber, setPageNumber] = useState(0)
  //Because there will always be 4 featured articles, I'm hard coding the reference to them here
  const mainArticle = posts[0]
  const articleTwo = posts[1]
  const articleThree = posts[2]
  const articleFour = posts[3]
  const otherArticles = posts.slice(4)
  const grayTextClass = 'text-gray-400'
  const whiteTextClass = 'text-white'
  //I'm wanting the previous article pagination to hold 6 articles at a time
  const PAGE_LENGTH = 6
  //Get the articles that will be displayed on the pagination portion of the page
  let currentOtherArticles = otherArticles.slice(pageNumber * PAGE_LENGTH, PAGE_LENGTH * (pageNumber+1))
  
  useEffect(() => {
    currentOtherArticles = otherArticles.slice(pageNumber * PAGE_LENGTH, PAGE_LENGTH * (pageNumber+1))
  }, [pageNumber])

  const handlePrevClick = () => {
    if(pageNumber === 0){
      //Do nothing
    } else if(pageNumber > 0){
      setPageNumber(pageNumber - 1)
    } else {
      //in case pageNumber has been set to something it shouldn't, reset it to 0
      setPageNumber(0)
    }
  }

  const handleNextClick = () => {
    if(pageNumber === Math.ceil(otherArticles.length/PAGE_LENGTH)-1){
      //Do nothing
    } else if(pageNumber < Math.ceil(otherArticles.length/PAGE_LENGTH)-1){
      setPageNumber(pageNumber + 1)
    } else {
      //in case pageNumber has been set to something it shouldn't, reset it to the last page
      setPageNumber(Math.ceil(otherArticles.length/PAGE_LENGTH)-1)
    }
  }

  return (
    <>    
    <div className="blog--container ml-4 mr-4 md:ml-28 md:mr-28">
      {/* <Navbar isBlogPage={true} /> */}
      <BlogNav/>
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
        <div className="articles__previous--main w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
          
          {currentOtherArticles.map((article, index) => {
            return (
            <article key={index} className='pb-5 mr-4 lg:mr-8 mb-5'>
              <div className="">
                <Thumbnail
                  slug={article.slug}
                  title={article.title}
                  src={article.thumbnail}
                />
              </div>
              <div className="article__previous--other-info " >
                <p className="text-sm text-gray-300 mt-2">{article.date}</p>
                <p className="xs:text-lg sm:text-xl md:text-lg lg:text-2xl font-bold">{article.title}</p>
              </div>
            </article>
            )
          })}

        </div>
        <div className="page--buttons flex align-center justify-center mb-5">
            <button className={`rounded-l-lg p-2 bg-slate-800 ${pageNumber === 0 ? grayTextClass : whiteTextClass}`} onClick={handlePrevClick}>&lt;&lt; Prev</button>
            <span className="p-2 bg-slate-800 text-white">Page {pageNumber+1}</span>
            <button  className={`rounded-r-lg p-2 bg-slate-800 ${pageNumber === Math.ceil(otherArticles.length/PAGE_LENGTH)-1 ? grayTextClass : whiteTextClass}`} onClick={handleNextClick}> Next &gt;&gt;</button>
        </div>
      </div>
    </div>
    <Footer/>
    </>

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