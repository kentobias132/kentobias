import { InputIcon } from "@radix-ui/react-icons";
import { BellIcon, CalendarIcon, FileTextIcon, GlobeIcon } from "lucide-react";
import { BentoCard, BentoGrid } from "./ui/bento-grid";

export default function Projects() {
  const projects = [
    {
      Icon: FileTextIcon,
      image:
        "https://spotiplay-nine.vercel.app/_next/image?url=%2Flogo.png&w=48&q=75",
      name: "SpotiPlay",
      description:
        "A playlist app that lets users create and send custom playlists to their Spotify accounts using the Spotify API",
      href: "https://spotiplay-nine.vercel.app/",
      cta: "View Application",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: InputIcon,
      image: "https://rocket-crypto.vercel.app/Frame.png",
      name: "Rocket Crypto",
      description:
        "A cryptocurrency landing page with real-time market updates, a conversion tool, and a 'Learn and Earn' section featuring educational videos",
      href: "https://rocket-crypto.vercel.app/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: GlobeIcon,
      image: "/dedors.png",
      name: "DeDors Collection",
      description:
        "An e-commerce app for Dedor Collections, featuring categorized products, customizable options, and secure Stripe-powered checkout",
      href: "/",
      cta: "Visit Store",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: CalendarIcon,
      image: "/oversight.png",
      name: "Oversight",
      description: "Project management for productive teams.",
      href: "https://oversight-beta.vercel.app",
      cta: "Get Started",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: BellIcon,
      image:
        "https://nft-marketplace-psi-sandy.vercel.app/_next/image?url=%2FSygnet.png&w=32&q=75",
      name: "NFT Market place",
      description:
        "An NFT Market place app for NFT lover, featuring NFT categorized options, auction and creators",
      href: "https://nft-marketplace-psi-sandy.vercel.app/",
      cta: "Learn more",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];
  return (
    <div>
      <h4 className="uppercase">Projects</h4>
      <h4 className="font-semibold text-darkText text-4xl tracking-tighter">
        Some cool projects I have built.
      </h4>
      <BentoGrid className="lg:grid-rows-3 mt-5">
        {projects.map((project) => (
          <BentoCard key={project.name} {...project} />
        ))}
      </BentoGrid>
    </div>
  );
}
