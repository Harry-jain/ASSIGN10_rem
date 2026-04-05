import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Harsh Jain Portfolio",
    short_name: "HMJ Portfolio",
    description: "Portfolio website showcasing projects, GitHub repositories, and REM work.",
    start_url: "/",
    display: "standalone",
    background_color: "#120a07",
    theme_color: "#fb923c",
    icons: [
      {
        src: "/next.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
