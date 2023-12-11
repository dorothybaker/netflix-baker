import InfoModal from "@/components/InfoModal";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import useFavorites from "@/hooks/useFavorites";
import useInfoModal from "@/hooks/useInfoModal";

const List = () => {
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <div className="pt-16 px-3">
        <h1 className="text-2xl text-white mb-2 pl-3">My List</h1>
        <MovieList data={favorites} />
      </div>
    </>
  );
};

export default List;
