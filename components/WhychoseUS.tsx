"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Discover New Music",
    description:
      "Explore trending tracks, new releases, and hidden gems across every mood and genre. Get personalized recommendations based on your taste.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--violet-500),var(--fuchsia-500))] text-white font-semibold text-lg">
        🎧 Discover Music
      </div>
    ),
  },
  {
    title: "Real-Time Lyrics Sync",
    description:
      "Sing along with songs using real-time lyrics syncing. Perfect for karaoke and smooth listening experience.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img src="/music-lyrics.webp" className="h-full w-full object-cover" alt="lyrics" />
      </div>
    ),
  },
  {
    title: "High Quality Streaming",
    description:
      "Experience lossless HD sound. Feel every beat with studio-level clarity & rich bass.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--blue-500))] text-white font-semibold text-lg">
        🔊 HD Streaming
      </div>
    ),
  },
  {
    title: "Personalized Playlists",
    description:
      "Auto curated playlists based on mood — Chill, Workout, Focus, Party, Romantic and more.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--rose-500),var(--amber-500))] text-white font-semibold text-lg">
        🎵 Smart Playlists
      </div>
    ),
  },
  {
    title: "Offline Downloads",
    description:
      "Save your favorite tracks and listen without internet — anytime, anywhere.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] text-white font-semibold text-lg">
        ↓ Offline Mode
      </div>
    ),
  },
  {
    title: "Music for Every Mood",
    description:
      "Choose music based on vibe — Calm, Sad, LoFi, Motivation, Study, Festival, Roadtrip & more.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--orange-500))] text-white font-semibold text-lg">
        💛 Mood Music
      </div>
    ),
  },
  {
    title: "Artist Profiles",
    description:
      "Follow your favorite artists. View albums, bios, latest releases & concerts updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--slate-600),var(--purple-600))] text-white font-semibold text-lg">
        👤 Artist Hub
      </div>
    ),
  },
  {
    title: "Like & Save Songs",
    description:
      "One tap to save music you love. Build your personal library faster.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--blue-500))] text-white font-semibold text-lg">
        ❤️ Save Songs
      </div>
    ),
  },
  {
    title: "Daily Mix",
    description:
      "Enjoy automatically refreshed mixes based on your listening habits — new playlist every day.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--amber-600),var(--rose-600))] text-white font-semibold text-lg">
        🔁 Daily Mix
      </div>
    ),
  },
  {
    title: "Trending Charts",
    description:
      "Global top 50, India top 100, Viral Hits — stream what's trending right now.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-600),var(--lime-600))] text-white font-semibold text-lg">
        📈 Top Charts
      </div>
    ),
  },
  {
    title: "Cross-Device Sync",
    description:
      "Start music on phone, continue on PC or TV instantly with cloud sync.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--cyan-500))] text-white font-semibold text-lg">
        🔄 Multi Device
      </div>
    ),
  },
  {
    title: "Custom Queue Control",
    description:
      "Rearrange queue, play next, remove or add songs easily while listening.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-600),var(--red-500))] text-white font-semibold text-lg">
        📋 Queue Manager
      </div>
    ),
  },
  {
    title: "Equalizer",
    description:
      "Boost bass, enhance vocals or set presets for earbuds, car, home speakers.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--green-600),var(--cyan-600))] text-white font-semibold text-lg">
        🎚 Equalizer
      </div>
    ),
  },
  {
    title: "Podcast Streaming",
    description:
      "Listen to podcasts & audio stories with playback speed control.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--violet-600),var(--rose-500))] text-white font-semibold text-lg">
        🎙 Podcasts
      </div>
    ),
  },
  {
    title: "Radio Stations",
    description:
      "24/7 music radio — Bollywood, Pop, Retro, Lofi, English & regional.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--gray-600))] text-white font-semibold text-lg">
        📻 Radio
      </div>
    ),
  },
  {
    title: "Background Play",
    description:
      "Minimize app & keep music running while browsing or gaming.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--teal-600))] text-white font-semibold text-lg">
        ▶ Background Play
      </div>
    ),
  },
  {
    title: "Sleep Timer",
    description:
      "Set timer to stop music after a duration. Perfect for night listeners.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--gray-700),var(--purple-500))] text-white font-semibold text-lg">
        🌙 Sleep Timer
      </div>
    ),
  },
  {
    title: "Smart Search",
    description:
      "Search by song, artist, lyrics line, mood or genre with fast results.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-600),var(--amber-600))] text-white font-semibold text-lg">
        🔍 Smart Search
      </div>
    ),
  },
  {
    title: "Share Music",
    description:
      "Share songs & playlists with friends in one tap — social vibes on!",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-600),var(--yellow-500))] text-white font-semibold text-lg">
        🔗 Share Track
      </div>
    ),
  },
  {
    title: "Concert & Event Updates",
    description:
      "Get notifications for live concerts of your favorite artists nearby.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--red-500),var(--indigo-500))] text-white font-semibold text-lg">
        🎤 Live Events
      </div>
    ),
  },
   {
    title: "Discover New Music",
    description:
      "Explore trending tracks, new releases, and hidden gems across every mood and genre. Get personalized recommendations based on your taste.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--violet-500),var(--fuchsia-500))] text-white font-semibold text-lg">
        🎧 Discover Music
      </div>
    ),
  },
  {
    title: "Real-Time Lyrics Sync",
    description:
      "Sing along with songs using real-time lyrics syncing. Perfect for karaoke and smooth listening experience.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img src="/music-lyrics.webp" className="h-full w-full object-cover" alt="lyrics" />
      </div>
    ),
  },
  {
    title: "High Quality Streaming",
    description:
      "Experience lossless HD sound. Feel every beat with studio-level clarity & rich bass.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--blue-500))] text-white font-semibold text-lg">
        🔊 HD Streaming
      </div>
    ),
  },
  {
    title: "Personalized Playlists",
    description:
      "Auto curated playlists based on mood — Chill, Workout, Focus, Party, Romantic and more.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--rose-500),var(--amber-500))] text-white font-semibold text-lg">
        🎵 Smart Playlists
      </div>
    ),
  },
  {
    title: "Offline Downloads",
    description:
      "Save your favorite tracks and listen without internet — anytime, anywhere.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] text-white font-semibold text-lg">
        ↓ Offline Mode
      </div>
    ),
  },
  {
    title: "Music for Every Mood",
    description:
      "Choose music based on vibe — Calm, Sad, LoFi, Motivation, Study, Festival, Roadtrip & more.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--orange-500))] text-white font-semibold text-lg">
        💛 Mood Music
      </div>
    ),
  },
  {
    title: "Artist Profiles",
    description:
      "Follow your favorite artists. View albums, bios, latest releases & concerts updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--slate-600),var(--purple-600))] text-white font-semibold text-lg">
        👤 Artist Hub
      </div>
    ),
  },
  {
    title: "Like & Save Songs",
    description:
      "One tap to save music you love. Build your personal library faster.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--blue-500))] text-white font-semibold text-lg">
        ❤️ Save Songs
      </div>
    ),
  },
  {
    title: "Daily Mix",
    description:
      "Enjoy automatically refreshed mixes based on your listening habits — new playlist every day.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--amber-600),var(--rose-600))] text-white font-semibold text-lg">
        🔁 Daily Mix
      </div>
    ),
  },
  {
    title: "Trending Charts",
    description:
      "Global top 50, India top 100, Viral Hits — stream what's trending right now.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-600),var(--lime-600))] text-white font-semibold text-lg">
        📈 Top Charts
      </div>
    ),
  },
  {
    title: "Cross-Device Sync",
    description:
      "Start music on phone, continue on PC or TV instantly with cloud sync.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--cyan-500))] text-white font-semibold text-lg">
        🔄 Multi Device
      </div>
    ),
  },
  {
    title: "Custom Queue Control",
    description:
      "Rearrange queue, play next, remove or add songs easily while listening.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-600),var(--red-500))] text-white font-semibold text-lg">
        📋 Queue Manager
      </div>
    ),
  },
  {
    title: "Equalizer",
    description:
      "Boost bass, enhance vocals or set presets for earbuds, car, home speakers.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--green-600),var(--cyan-600))] text-white font-semibold text-lg">
        🎚 Equalizer
      </div>
    ),
  },
  {
    title: "Podcast Streaming",
    description:
      "Listen to podcasts & audio stories with playback speed control.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--violet-600),var(--rose-500))] text-white font-semibold text-lg">
        🎙 Podcasts
      </div>
    ),
  },
  {
    title: "Radio Stations",
    description:
      "24/7 music radio — Bollywood, Pop, Retro, Lofi, English & regional.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--gray-600))] text-white font-semibold text-lg">
        📻 Radio
      </div>
    ),
  },
  {
    title: "Background Play",
    description:
      "Minimize app & keep music running while browsing or gaming.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--teal-600))] text-white font-semibold text-lg">
        ▶ Background Play
      </div>
    ),
  },
  {
    title: "Sleep Timer",
    description:
      "Set timer to stop music after a duration. Perfect for night listeners.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--gray-700),var(--purple-500))] text-white font-semibold text-lg">
        🌙 Sleep Timer
      </div>
    ),
  },
  {
    title: "Smart Search",
    description:
      "Search by song, artist, lyrics line, mood or genre with fast results.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-600),var(--amber-600))] text-white font-semibold text-lg">
        🔍 Smart Search
      </div>
    ),
  },
  {
    title: "Share Music",
    description:
      "Share songs & playlists with friends in one tap — social vibes on!",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-600),var(--yellow-500))] text-white font-semibold text-lg">
        🔗 Share Track
      </div>
    ),
  },
  {
    title: "Concert & Event Updates",
    description:
      "Get notifications for live concerts of your favorite artists nearby.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--red-500),var(--indigo-500))] text-white font-semibold text-lg">
        🎤 Live Events
      </div>
    ),
  },
   {
    title: "Discover New Music",
    description:
      "Explore trending tracks, new releases, and hidden gems across every mood and genre. Get personalized recommendations based on your taste.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--violet-500),var(--fuchsia-500))] text-white font-semibold text-lg">
        🎧 Discover Music
      </div>
    ),
  },
  {
    title: "Real-Time Lyrics Sync",
    description:
      "Sing along with songs using real-time lyrics syncing. Perfect for karaoke and smooth listening experience.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img src="/music-lyrics.webp" className="h-full w-full object-cover" alt="lyrics" />
      </div>
    ),
  },
  {
    title: "High Quality Streaming",
    description:
      "Experience lossless HD sound. Feel every beat with studio-level clarity & rich bass.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--blue-500))] text-white font-semibold text-lg">
        🔊 HD Streaming
      </div>
    ),
  },
  {
    title: "Personalized Playlists",
    description:
      "Auto curated playlists based on mood — Chill, Workout, Focus, Party, Romantic and more.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--rose-500),var(--amber-500))] text-white font-semibold text-lg">
        🎵 Smart Playlists
      </div>
    ),
  },
  {
    title: "Offline Downloads",
    description:
      "Save your favorite tracks and listen without internet — anytime, anywhere.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] text-white font-semibold text-lg">
        ↓ Offline Mode
      </div>
    ),
  },
  {
    title: "Music for Every Mood",
    description:
      "Choose music based on vibe — Calm, Sad, LoFi, Motivation, Study, Festival, Roadtrip & more.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--orange-500))] text-white font-semibold text-lg">
        💛 Mood Music
      </div>
    ),
  },
  {
    title: "Artist Profiles",
    description:
      "Follow your favorite artists. View albums, bios, latest releases & concerts updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--slate-600),var(--purple-600))] text-white font-semibold text-lg">
        👤 Artist Hub
      </div>
    ),
  },
  {
    title: "Like & Save Songs",
    description:
      "One tap to save music you love. Build your personal library faster.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--blue-500))] text-white font-semibold text-lg">
        ❤️ Save Songs
      </div>
    ),
  },
  {
    title: "Daily Mix",
    description:
      "Enjoy automatically refreshed mixes based on your listening habits — new playlist every day.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--amber-600),var(--rose-600))] text-white font-semibold text-lg">
        🔁 Daily Mix
      </div>
    ),
  },
  {
    title: "Trending Charts",
    description:
      "Global top 50, India top 100, Viral Hits — stream what's trending right now.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-600),var(--lime-600))] text-white font-semibold text-lg">
        📈 Top Charts
      </div>
    ),
  },
  {
    title: "Cross-Device Sync",
    description:
      "Start music on phone, continue on PC or TV instantly with cloud sync.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--cyan-500))] text-white font-semibold text-lg">
        🔄 Multi Device
      </div>
    ),
  },
  {
    title: "Custom Queue Control",
    description:
      "Rearrange queue, play next, remove or add songs easily while listening.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-600),var(--red-500))] text-white font-semibold text-lg">
        📋 Queue Manager
      </div>
    ),
  },
  {
    title: "Equalizer",
    description:
      "Boost bass, enhance vocals or set presets for earbuds, car, home speakers.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--green-600),var(--cyan-600))] text-white font-semibold text-lg">
        🎚 Equalizer
      </div>
    ),
  },
  {
    title: "Podcast Streaming",
    description:
      "Listen to podcasts & audio stories with playback speed control.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--violet-600),var(--rose-500))] text-white font-semibold text-lg">
        🎙 Podcasts
      </div>
    ),
  },
  {
    title: "Radio Stations",
    description:
      "24/7 music radio — Bollywood, Pop, Retro, Lofi, English & regional.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--gray-600))] text-white font-semibold text-lg">
        📻 Radio
      </div>
    ),
  },
  {
    title: "Background Play",
    description:
      "Minimize app & keep music running while browsing or gaming.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--teal-600))] text-white font-semibold text-lg">
        ▶ Background Play
      </div>
    ),
  },
  {
    title: "Sleep Timer",
    description:
      "Set timer to stop music after a duration. Perfect for night listeners.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--gray-700),var(--purple-500))] text-white font-semibold text-lg">
        🌙 Sleep Timer
      </div>
    ),
  },
  {
    title: "Smart Search",
    description:
      "Search by song, artist, lyrics line, mood or genre with fast results.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-600),var(--amber-600))] text-white font-semibold text-lg">
        🔍 Smart Search
      </div>
    ),
  },
  {
    title: "Share Music",
    description:
      "Share songs & playlists with friends in one tap — social vibes on!",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-600),var(--yellow-500))] text-white font-semibold text-lg">
        🔗 Share Track
      </div>
    ),
  },
  {
    title: "Concert & Event Updates",
    description:
      "Get notifications for live concerts of your favorite artists nearby.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--red-500),var(--indigo-500))] text-white font-semibold text-lg">
        🎤 Live Events
      </div>
    ),
  },
   {
    title: "Discover New Music",
    description:
      "Explore trending tracks, new releases, and hidden gems across every mood and genre. Get personalized recommendations based on your taste.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--violet-500),var(--fuchsia-500))] text-white font-semibold text-lg">
        🎧 Discover Music
      </div>
    ),
  },
  {
    title: "Real-Time Lyrics Sync",
    description:
      "Sing along with songs using real-time lyrics syncing. Perfect for karaoke and smooth listening experience.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img src="/music-lyrics.webp" className="h-full w-full object-cover" alt="lyrics" />
      </div>
    ),
  },
  {
    title: "High Quality Streaming",
    description:
      "Experience lossless HD sound. Feel every beat with studio-level clarity & rich bass.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--blue-500))] text-white font-semibold text-lg">
        🔊 HD Streaming
      </div>
    ),
  },
  {
    title: "Personalized Playlists",
    description:
      "Auto curated playlists based on mood — Chill, Workout, Focus, Party, Romantic and more.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--rose-500),var(--amber-500))] text-white font-semibold text-lg">
        🎵 Smart Playlists
      </div>
    ),
  },
  {
    title: "Offline Downloads",
    description:
      "Save your favorite tracks and listen without internet — anytime, anywhere.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] text-white font-semibold text-lg">
        ↓ Offline Mode
      </div>
    ),
  },
  {
    title: "Music for Every Mood",
    description:
      "Choose music based on vibe — Calm, Sad, LoFi, Motivation, Study, Festival, Roadtrip & more.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--orange-500))] text-white font-semibold text-lg">
        💛 Mood Music
      </div>
    ),
  },
  {
    title: "Artist Profiles",
    description:
      "Follow your favorite artists. View albums, bios, latest releases & concerts updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--slate-600),var(--purple-600))] text-white font-semibold text-lg">
        👤 Artist Hub
      </div>
    ),
  },
  {
    title: "Like & Save Songs",
    description:
      "One tap to save music you love. Build your personal library faster.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--blue-500))] text-white font-semibold text-lg">
        ❤️ Save Songs
      </div>
    ),
  },
  {
    title: "Daily Mix",
    description:
      "Enjoy automatically refreshed mixes based on your listening habits — new playlist every day.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--amber-600),var(--rose-600))] text-white font-semibold text-lg">
        🔁 Daily Mix
      </div>
    ),
  },
  {
    title: "Trending Charts",
    description:
      "Global top 50, India top 100, Viral Hits — stream what's trending right now.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-600),var(--lime-600))] text-white font-semibold text-lg">
        📈 Top Charts
      </div>
    ),
  },
  {
    title: "Cross-Device Sync",
    description:
      "Start music on phone, continue on PC or TV instantly with cloud sync.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--cyan-500))] text-white font-semibold text-lg">
        🔄 Multi Device
      </div>
    ),
  },
  {
    title: "Custom Queue Control",
    description:
      "Rearrange queue, play next, remove or add songs easily while listening.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-600),var(--red-500))] text-white font-semibold text-lg">
        📋 Queue Manager
      </div>
    ),
  },
  {
    title: "Equalizer",
    description:
      "Boost bass, enhance vocals or set presets for earbuds, car, home speakers.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--green-600),var(--cyan-600))] text-white font-semibold text-lg">
        🎚 Equalizer
      </div>
    ),
  },
  {
    title: "Podcast Streaming",
    description:
      "Listen to podcasts & audio stories with playback speed control.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--violet-600),var(--rose-500))] text-white font-semibold text-lg">
        🎙 Podcasts
      </div>
    ),
  },
  {
    title: "Radio Stations",
    description:
      "24/7 music radio — Bollywood, Pop, Retro, Lofi, English & regional.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--gray-600))] text-white font-semibold text-lg">
        📻 Radio
      </div>
    ),
  },
  {
    title: "Background Play",
    description:
      "Minimize app & keep music running while browsing or gaming.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--teal-600))] text-white font-semibold text-lg">
        ▶ Background Play
      </div>
    ),
  },
  {
    title: "Sleep Timer",
    description:
      "Set timer to stop music after a duration. Perfect for night listeners.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--gray-700),var(--purple-500))] text-white font-semibold text-lg">
        🌙 Sleep Timer
      </div>
    ),
  },
  {
    title: "Smart Search",
    description:
      "Search by song, artist, lyrics line, mood or genre with fast results.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-600),var(--amber-600))] text-white font-semibold text-lg">
        🔍 Smart Search
      </div>
    ),
  },
  {
    title: "Share Music",
    description:
      "Share songs & playlists with friends in one tap — social vibes on!",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-600),var(--yellow-500))] text-white font-semibold text-lg">
        🔗 Share Track
      </div>
    ),
  },
  {
    title: "Concert & Event Updates",
    description:
      "Get notifications for live concerts of your favorite artists nearby.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--red-500),var(--indigo-500))] text-white font-semibold text-lg">
        🎤 Live Events
      </div>
    ),
  }
];


const WhychoseUS = () => {
  return (
   <div >
      <StickyScroll content={content} />
    </div>
  )
}

export default WhychoseUS