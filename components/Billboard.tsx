import useBillboard from "@/hooks/useBillboard";
import { MdInfoOutline } from "react-icons/md";
import PlayButton from "./PlayButton";
import { useCallback } from "react";
import useInfoModal from "@/hooks/useInfoModal";

const Billboard = () => {
  const { data } = useBillboard();
  const { openModal } = useInfoModal();

  const handleOpenModal = useCallback(() => {
    openModal(data?.id);
  }, [openModal, data?.id]);

  return (
    <div className="relative h-[56.25vw] lg:h-[80vh]">
      <video
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
        className="w-full object-cover h-[100%] brightness-[60%]"
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute top-[40%] ml-4">
        <h1 className="text-2xl md:text-5xl text-white lg:w-[50%] md:w-[70%] w-full h-full">
          {data?.title}
        </h1>
        <p className="text-white mt-3 w-[70%] lg:block md:block hidden">
          {data?.description}
        </p>
        <div className="mt-3 flex flex-row gap-3 items-center">
          <button
            className="text-white bg-white/30 flex items-center px-3 gap-1 py-2 rounded-md hover:bg-opacity-40"
            onClick={handleOpenModal}
          >
            <MdInfoOutline />
            <span>More</span>
          </button>
          <PlayButton movieId={data?.id} />
        </div>
      </div>
    </div>
  );
};

export default Billboard;
