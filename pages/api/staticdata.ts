import path from 'path';
import { promises as fs } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next'

//API Handler for static json files in the project-data directory. Currently, I'm using this just for the portfolio project data.
export default async function handler(req:NextApiRequest, res: NextApiResponse) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'project-data');
  //Read the json data file data.json
  const data = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
  //Return the content of the data file in json format
  res.status(200).json(data);
}