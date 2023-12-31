import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useMovie = () => {
  const { data, error, isLoading } = useSWR("/api/movie", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, error, isLoading };
};

export default useMovie;
