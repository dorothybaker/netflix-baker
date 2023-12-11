import InfoModal from "@/components/InfoModal";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import useInfoModal from "@/hooks/useInfoModal";
import useShow from "@/hooks/useShow";

const Shows = () => {
  const { data: shows = [] } = useShow();
  const { isOpen, closeModal } = useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <div className="pt-16 px-3">
        <h1 className="text-2xl text-white mb-2 pl-3">Tv Shows</h1>
        <MovieList data={shows} />
      </div>
    </>
  );
};

export default Shows;
