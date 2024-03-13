import { Genres } from '@/typings';
import React from 'react'

async function GenreDropdown() {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZWQ0NTYwYzI2MWUxNDEyZDdlYmI4OTVkNTYyNzcyZiIsInN1YiI6IjY1ZjFlYjRmZDY0YWMyMDE0YjVkOGQyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qIr2miB_Tift2JgbXzKLFeRKaC1mtibxEfDAiNXUoIU`
    },
   
    next: {
      revalidate: 60 * 60 * 24,
    }
    
  };

  const response = await fetch(url, options)
  const data = (await response.json()) as Genres 

  console.log(data)
  return (
    <div>Genre</div>
  )
}

export default GenreDropdown