export interface wallpaper{
  url: string,
  name: string

}
export function useWallpaper() {
  const wallpapers = [
    {
      url: "https://ideogram.ai/assets/image/lossless/response/TVSlKZYUQrKd6O9uPzVyEw",
      "name": "Last Night"
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/JNKysdHPQg-dwbTbXwfhJg",
      "name": "Sunrise Bliss"
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/sILKkQb9QXOHbfuaT83EVQ",
      "name": "Mountain Escape"
    },
    {
      url: "https://ideogram.ai/assets/image/lossless/response/9Gnlqd1aQFiLc4800qsIjg",
      "name": "Ocean Serenity"
    }
  ];

  // Randomly select a wallpaper
  const randomWallpaper = wallpapers[Math.floor(Math.random() * wallpapers.length)];

  return randomWallpaper;
}
