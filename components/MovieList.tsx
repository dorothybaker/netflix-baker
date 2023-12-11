import { isEmpty } from "lodash";
import MovieCard from "./MovieCard";

interface MovieListProps {
  data: Record<string, any>[];
  title?: string;
}

const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
  if (isEmpty(data)) {
    return null;
  }
  return (
    <div className="px-3 space-y-8 mt-4">
      <div>
        <h1 className="text-white text-2xl mb-3">{title}</h1>
        <div className="grid grid-col-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
          {data.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
