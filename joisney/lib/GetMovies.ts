import { SearchResults } from "@/typings";

async function fetchFromtmdb(url: URL, cacheTime?: number) {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("include_video", "false");
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("page", "1")
    


const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
        revalidate: cacheTime || 60 * 60 * 24,

    },
  };

    const response = await fetch(url.toString(), options);
    const data = (await response.json()) as SearchResults;

    return data;
}

export async function getUpcomingMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
  const data = await fetchFromtmdb(url);

  return data.results;
}

export async function getPopularMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/popular");
  const data = await fetchFromtmdb(url);

  return data.results;
}

export async function getTopRatedMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/top_rated");
  const data = await fetchFromtmdb(url);

  return data.results;
}

export async function getDiscoveryMovies(id?: string, keyword?: string) {
  const url = new URL("https://api.themoviedb.org/3/discover/movie");
 keyword && url.searchParams.set("with_keywords", keyword);
    id && url.searchParams.set("with_genres", id);

  const data = await fetchFromtmdb(url);

  return data.results;
}

export async function getSearchMovies(query: string) {
  const url = new URL("https://api.themoviedb.org/3/search/movie");
  url.searchParams.set("query", term);
  
  const data = await fetchFromtmdb(url);

  return data.results;
}