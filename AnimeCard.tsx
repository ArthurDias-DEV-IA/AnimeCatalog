import { useState } from 'react';
import { Anime } from '@/data/animeData';

interface AnimeCardProps {
  anime: Anime;
}

const AnimeCard = ({ anime }: AnimeCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="group flex-shrink-0 w-[140px] sm:w-[160px] md:w-[180px] cursor-pointer">
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-secondary transition-all duration-300 group-hover:scale-105 group-hover:shadow-glow">
        {isLoading && (
          <div className="absolute inset-0 bg-secondary animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        
        {imageError ? (
          <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted flex items-center justify-center p-2">
            <span className="text-center text-sm text-muted-foreground font-medium">
              {anime.name}
            </span>
          </div>
        ) : (
          <img
            src={anime.image}
            alt={anime.name}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onError={handleImageError}
            onLoad={handleImageLoad}
            loading="lazy"
          />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <h3 className="mt-2 text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300">
        {anime.name}
      </h3>
    </div>
  );
};

export default AnimeCard;
