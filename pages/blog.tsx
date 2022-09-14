import React from 'react'
import { NextPage } from 'next'
import fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'

const Blog: NextPage = () => {
  return (
    <div>blog</div>
  )
}

export default Blog

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('blog-posts'))

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('blog-posts', filename))
    const { data: frontMatter } = matter(markdownWithMeta)
    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  return {
    props: {
      posts
    }
  }
}