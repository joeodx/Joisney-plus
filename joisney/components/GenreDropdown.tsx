'use client'
import { Genres } from '@/typings';
import React from 'react';
import { DropdownMenu, DropdownMenuContent,  DropdownMenuItem,  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { ChevronDown } from "lucide-react";
import Link from 'next/link';



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

  const response = await fetch(url, options);
  const data = (await response.json()) as Genres ;

  return (
    <DropdownMenu>
    <DropdownMenuTrigger className="text-white flex justify-center items-center">
    Genre <ChevronDown className="m1-1" /> 
    </DropdownMenuTrigger>

    <DropdownMenuContent>
      <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
     <DropdownMenuSeparator />
     {data.genres.map(genre => (
      <DropdownMenuItem key={genre.id}>
        <Link
        href={`/genre/${genre.id}?genre=${genre.name}`}>
          {genre.name}
        </Link>
      </DropdownMenuItem>
     ))}
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default GenreDropdown 