import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import * as path from 'path'

type Items = {
  [key: string]: string
}

type Post = {
  data: {
    [key: string]: string;
  }
  content: string;
}

const POSTS_PATH = join(process.cwd(), 'blog-posts');

function getPostFilePaths(): string[] {
  return (
    fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path))
  )
}

export function getPost(slug: string): Post {
  
  const fullPath = join(POSTS_PATH, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(fileContents)
  
  return {data, content}

}

export function getPostItems(filePath: string, fields: string[] = []): Items {
  const slug = filePath.replace(/\.mdx?$/,'')
  const {data, content} = getPost(slug)

  const items: Items = {}

  fields.forEach((field) => {
    if(field === 'slug') 
      items[field] = slug

    if(field === 'content')
      items[field] = content

    if(data[field])
      items[field] = data[field]

  })

  return items
}

export function getAllPosts(fields: string[] = []): Items[] {
  const filePaths = getPostFilePaths()
  const posts = filePaths
                .map((filePath) => getPostItems(filePath, fields))
                .sort((post1,post2) => (Date.parse(post1.date) > Date.parse(post2.date) ? -1 : 1))
  return posts
}

