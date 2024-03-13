// import { Button } from "@/components/ui/button"

import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/GetMovies";

export default async function Home() {

  const upcomingMovies = await getUpcomingMovies();
  const popularMovies = await getPopularMovies();
  const topRatedMovies = await getTopRatedMovies();

  return (
    <main className="">
      {/* <h1>LETS BUILD</h1> */}
      <div className="flex flex-col space-y-2 xl:mt-48">
        <MoviesCarousel movies={[popularMovies]} title="Popular"/>
        <MoviesCarousel movies={[topRatedMovies]} title="Top Rated got to 1 hour 40"/>
        <MoviesCarousel movies={[upcomingMovies]} title="Upcoming"/>
      
      </div>
      
    </main>
  );
}
