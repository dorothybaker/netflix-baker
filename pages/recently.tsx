import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import useMovieList from "@/hooks/useMovieList";

const Recently = () => {
  const { data: movies = [] } = useMovieList();

  return (
    <>
      <Navbar />
      <div className="pt-16 px-3">
        <h1 className="text-2xl text-white mb-2 pl-3">Recently Added</h1>
        <MovieList data={movies} />
      </div>
    </>
  );
};

export default Recently;
