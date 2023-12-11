import InfoModal from "@/components/InfoModal";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import useInfoModal from "@/hooks/useInfoModal";
import useMovie from "@/hooks/useMovies";

const Movies = () => {
  const { data: movies = [] } = useMovie();
  const { isOpen, closeModal } = useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <div className="pt-16 px-3">
        <h1 className="text-2xl text-white mb-2 pl-3">Movies</h1>
        <MovieList data={movies} />
      </div>
    </>
  );
};

export default Movies;
