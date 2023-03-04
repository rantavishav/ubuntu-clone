import { SPOTIFY_PNG } from "@/images";
import Spotify from "@/spotify";

export const appsList: any = [
  {
    id: "spotify",
    title: "Spotify",
    icon: SPOTIFY_PNG,
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: Spotify, // India Top 50 Playlist 😅
  },
];
