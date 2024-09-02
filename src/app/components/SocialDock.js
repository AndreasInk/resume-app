import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconHome,
} from "@tabler/icons-react";

export default function SocialDock() {
  const links = [
    {
      title: "Resume",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://andreas.craft.me/QNAYKoY63A64Gl",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/andreas-ink/",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/AndreasInk",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/AndreasInk",
    },
  ];

  return (
    <div className="flex justify-start h-[35rem] w-full p-4"> {/* Added padding for spacing */}
      <div className="w-auto"> {/* Ensure the FloatingDock doesn't take the full width */}
        <FloatingDock items={links} />
      </div>
    </div>
  );
}