import { Anime } from '@/data/animeData';
import AnimeCard from './AnimeCard';
import { Search } from 'lucide-react';

interface SearchResultsProps {
  results: Anime[];
  query: string;
}

const SearchResults = ({ results, query }: SearchResultsProps) => {
  if (results.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4">
        <Search className="w-16 h-16 text-muted-foreground mb-4" />
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Nenhum anime encontrado
        </h2>
        <p className="text-muted-foreground text-center">
          Não encontramos resultados para "{query}". Tente outra busca.
        </p>
      </div>
    );
  }

  return (
    <section className="py-6">
      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
        Resultados para "{query}" ({results.length} {results.length === 1 ? 'anime' : 'animes'})
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        {results.map((anime) => (
          <AnimeCard key={`${anime.id}-${anime.genre}`} anime={anime} />
        ))}
      </div>
    </section>
  );
};

export default SearchResults;
