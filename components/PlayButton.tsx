import { useRouter } from "next/router";
import { BsFillPlayFill } from "react-icons/bs";

interface PlayButtonProps {
  movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className="text-black bg-white flex items-center px-[10px] gap-1 py-[6px] rounded-md font-semibold"
    >
      <BsFillPlayFill size={20} />
      <span>Play</span>
    </button>
  );
};

export default PlayButton;
