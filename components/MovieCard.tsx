import useInfoModal from "@/hooks/useInfoModal";

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const { openModal } = useInfoModal();

  return (
    <div
      className="bg-zinc-900 cursor-pointer"
      onClick={() => openModal(data?.id)}
    >
      <div className="lg:h-[12vw] h-[17vh]">
        <img
          src={data?.thumbnailUrl}
          alt="thumbnail"
          className="object-cover lg:h-[12vw] w-full h-[17vh]"
        />
      </div>
      <h1 className="text-white text-center">{data?.title}</h1>
    </div>
  );
};

export default MovieCard;
