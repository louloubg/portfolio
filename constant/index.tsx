import { redirect } from "next/navigation";

export const Social_Icons = [
  {
    link: "https://github.com/ibrahimmemonn",
    image: "/Github.svg",
    alt: "Ibrahim Memon - Social Media",
  },
  {
    link: "https://www.instagram.com/ibii.memon/?hl=en",
    image: "/Instagram.svg",
    alt: "Ibrahim Memon - Social Media",
  },
  {
    link: "https://www.linkedin.com/in/ibrahimmemonn/",
    image: "/LinkedIn.svg",
    alt: "Ibrahim Memon - Social Media",
  },
  {
    link: "https://twitter.com/Ibrahimmemonnn",
    image: "/Twitter.svg",
    alt: "Ibrahim Memon - Social Media",
  },
];

export default function Home() {
  redirect("/about"); // Redirige toujours vers la page À PROPOS
}