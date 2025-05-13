import React from "react";

const SpotifyBox = () => (
  <div className="relative mt-6 mx-auto w-full rounded-2xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl flex flex-col items-center gap-4 px-6 py-4">
    <div className="w-full">
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/6lduaK3BGZEcqWMFaQ33sU?utm_source=generator&theme=0"
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Playlist"
      ></iframe>
    </div>
  </div>
);

export default SpotifyBox; 