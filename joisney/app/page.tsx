// import { Button } from "@/components/ui/button"

import MoviesCarousel from "@/components/MoviesCarousel";

export default function Home() {
  return (
    <main className="">
      <h1>LETS BUILD</h1>
      <div className="flex flex-col space-y-2 xl:mt-48">
        <MoviesCarousel movies={[]} title="popular got to 1 hour 33 mins "/>
        <MoviesCarousel movies={[]} title="top rated"/>
        <MoviesCarousel movies={[]} title="upcoming"/>
      
      </div>
      
    </main>
  );
}
