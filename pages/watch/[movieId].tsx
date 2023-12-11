import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const { data } = useMovie(movieId as string);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full bg-black/70 flex flex-row items-center gap-3 z-10 p-4">
        <div className="h-7 w-7 text-black bg-white flex items-center justify-center rounded-full cursor-pointer">
          <AiOutlineArrowLeft onClick={() => router.push("/")} />
        </div>
        <p className="text-neutral-300 text-2xl ">
          <span className="text-white">Watching: </span>
          {data?.title}
        </p>
      </nav>
      <video
        src={data?.videoUrl}
        className="h-full w-full"
        autoPlay
        controls
      ></video>
    </div>
  );
};

export default Watch;
