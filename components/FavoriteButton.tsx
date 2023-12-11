import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";
import axios from "axios";
import { useCallback, useMemo } from "react";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";

interface FavoriteButtonProps {
  movieId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
  const { mutate: mutateFavorites } = useFavorites();
  const { data: currentUser, mutate } = useCurrentUser();

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds;

    if (list) {
      return list.includes(movieId);
    } else {
      return null;
    }
  }, [currentUser, movieId]);

  const toggleFavorites = useCallback(async () => {
    let response;

    if (isFavorite) {
      response = await axios.delete("/api/favorite", { data: { movieId } });
    } else {
      response = await axios.post("/api/favorite", { movieId });
    }

    const updatedFavoriteIds = response?.data?.favoriteIds;

    mutate({ ...currentUser, favoriteIds: updatedFavoriteIds });
    mutateFavorites();
  }, [movieId, mutate, mutateFavorites, isFavorite, currentUser]);

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
      onClick={toggleFavorites}
      className="cursor-pointer w-7 h-7 border-white border-2 rounded-full flex items-center justify-center transition hover:border-neutral-300"
    >
      <Icon color="white" />
    </div>
  );
};

export default FavoriteButton;
