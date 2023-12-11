import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useShow = () => {
  const { data, error, isLoading } = useSWR("/api/show", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, error, isLoading };
};

export default useShow;
