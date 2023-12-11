import useInfoModal from "@/hooks/useInfoModal";
import useMovie from "@/hooks/useMovie";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PlayButton from "./PlayButton";
import FavoriteButton from "./FavoriteButton";

interface InfoModalProps {
  visible?: boolean;
  onClose: any;
}

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(!!visible);
  const { movieId } = useInfoModal();
  const { data = {} } = useMovie(movieId);

  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!visible) {
    return null;
  }

  return (
    <div className="z-50 bg-black/80 transition duration-300 flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0">
      <div className="lg:max-w-3xl md:max-w-2xl max-w-full w-auto mx-auto relative rounded-sm">
        <div
          className={`${
            isVisible ? "scale-100" : "scale-0"
          } transform duration-300 flex-auto relative drop-shadow-md bg-zinc-900`}
        >
          <div className="relative h-96">
            <video
              src={data?.videoUrl}
              poster={data?.thumbnailUrl}
              autoPlay
              muted
              loop
              className="w-full brightness-[60%] h-full object-cover"
            ></video>
            <div
              className="cursor-pointer h-7 w-7 top-3 right-3 rounded-full flex items-center justify-center bg-white text-black absolute"
              onClick={handleClose}
            >
              <AiOutlineClose />
            </div>
            <div className="absolute bottom-[10%] left-5">
              <p className="text-white text-2xl h-full mb-2">{data?.title}</p>
              <div className="flex flex-row gap-4 items-center">
                <PlayButton movieId={data?.id} />
                <FavoriteButton movieId={data?.id} />
              </div>
            </div>
          </div>
          <div className="px-3 py-2 text-white">
            <div className="flex flex-row justify-between text-neutral-300 mb-2">
              <div className="flex flex-row gap-2">
                <p>{data?.genre}</p>
                <p>{data?.category}</p>
              </div>
              <p>{data?.duration}</p>
            </div>
            <p>{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
