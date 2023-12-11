import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import useFavorites from "@/hooks/useFavorites";

const List = () => {
  const { data: favorites = [] } = useFavorites();
  return (
    <>
      <Navbar />
      <div className="pt-16 px-3">
        <h1 className="text-2xl text-white mb-2 pl-3">My List</h1>
        <MovieList data={favorites} />
      </div>
    </>
  );
};

export default List;
