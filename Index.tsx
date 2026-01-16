import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import GenreSection from '@/components/GenreSection';
import SearchResults from '@/components/SearchResults';
import { genres, searchAnimes } from '@/data/animeData';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = useMemo(() => {
    return searchAnimes(searchQuery);
  }, [searchQuery]);

  const isSearching = searchQuery.trim().length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {isSearching ? (
          <SearchResults results={searchResults} query={searchQuery} />
        ) : (
          <div className="space-y-2">
            {genres.map((genre) => (
              <GenreSection key={genre.id} genre={genre} />
            ))}
          </div>
        )}
      </main>
      
      <footer className="border-t border-border py-8 mt-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="text-sm">
            © 2024 AnimeCatalog - Catálogo de Animes
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
