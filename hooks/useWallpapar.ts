import { useEffect, useState } from 'react';

// Define the WallpaperType interface
export interface WallpaperType {
  url: string;
  name: string;
}
 interface fullwallpaper extends WallpaperType {
   liked: boolean,
   suggested: boolean
   library: boolean

}

// Custom hook to manage wallpapers
export function useWallpaper() {
  const [wallpapers, setWallpapers] = useState<WallpaperType[]>([]);
  const [randomWallpaper, setRandomWallpaper] = useState<WallpaperType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Function to fetch wallpapers (could be replaced with an API call in the future)
  const fetchWallpapers = () => {
    const staticWallpapers: fullwallpaper[] = [
      {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/5z-RDaoCTfK45Bpw8TEBYQ",
        name: "Colors Eyes",
        liked: true,
        suggested: true,
         library: true

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
        library: true,
        suggested: true,
        liked: false,
      },
      {
        url: "https://ideogram.ai/assets/image/lossless/response/9Gnlqd1aQFiLc4800qsIjg",
        name: "Ocean Serenity",
        liked: false,
        suggested: false,
        library:  true,
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
