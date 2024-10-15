
import { useState, useEffect } from 'react';

// Define the wallpaper types
export interface WallpaperType {
  url: string;
  name: string;
}

interface FullWallpaper extends WallpaperType {
  liked: boolean;
  suggested: boolean;
  library: boolean;
}

// Custom hook to manage wallpapers
export function useWallpaper() {
  const [wallpapers, setWallpapers] = useState<FullWallpaper[]>([]);
  const [randomWallpaper, setRandomWallpaper] = useState<FullWallpaper | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

 
  const fetchWallpapers = () => {
    const staticWallpapers: FullWallpaper[] = [
      {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/5z-RDaoCTfK45Bpw8TEBYQ",
        name: "Colors Eyes",
        liked: true,
        suggested: true,
        library: true,
      },
      {
        url: "https://ideogram.ai/assets/image/lossless/response/TVSlKZYUQrKd6O9uPzVyEw",
        name: "Last Night",
        liked: false,
        suggested: true,
        library: false,
      },
      {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/JNKysdHPQg-dwbTbXwfhJg",
        name: "Sunrise Bliss",
        liked: true,
        suggested: false,
        library: true,
      },
      {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/sILKkQb9QXOHbfuaT83EVQ",
        name: "Mountain Escape",
        liked: false,
        suggested: true,
        library: true,
      },
      {
        url: "https://ideogram.ai/assets/image/lossless/response/9Gnlqd1aQFiLc4800qsIjg",
        name: "Ocean Serenity",
        liked: false,
        suggested: false,
        library: true,
      },
    ];

    setWallpapers(staticWallpapers);
    setRandomWallpaper(staticWallpapers[Math.floor(Math.random() * staticWallpapers.length)]);
    setIsLoading(false);
  };

  // Effect to simulate data fetching on component mount
  useEffect(() => {
    fetchWallpapers();
  }, []);

  return { randomWallpaper, wallpapers, isLoading };
}

// Custom hooks to filter wallpapers
export function useSuggestedWallpaper() {
  const { wallpapers } = useWallpaper();
  return wallpapers.filter((wallpaper: FullWallpaper) => wallpaper.suggested);
}

export function useLikedWallpaper() {
  const { wallpapers } = useWallpaper();
  return wallpapers.filter((wallpaper: FullWallpaper) => wallpaper.liked);
}

export function useLikedLibrary() {
  const { wallpapers } = useWallpaper();
  return wallpapers.filter((wallpaper: FullWallpaper) => wallpaper.library);
}
