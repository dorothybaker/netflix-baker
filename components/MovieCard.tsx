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
      <div className="h-[25vw] md:h-[16vw] lg:h-[12vw]">
        <img
          src={data?.thumbnailUrl}
          alt="thumbnail"
          className="object-cover block h-[25vw] md:h-[16vw] lg:h-[12vw] w-full"
        />
      </div>
      <h1 className="text-white text-center">{data?.title}</h1>
    </div>
  );
};

export default MovieCard;
