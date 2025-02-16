import React from "react";
import { FloatingDock } from "./ui/dockbar";
import {
  IconBrandBehance,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNews,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export function Dock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-green-500" />
      ),
      href: "#",
    },

    {
      title: "About Me",
      icon: (
        <IconTerminal2 className="h-full w-full text-green-500" />
      ),
      href: "https://about.srinjaymitra.site/",
    },
    // TODO: chnage blogs to projects on projects.srinjaymitra.site
    // {
    //   title: "Blogs",
    //   icon: (
    //     <IconNews className="h-full w-full text-green-500" />
    //   ),
    //   // href: "https://kintsugicodes.hashnode.dev/",
    //   href: "https://about.srinjaymitra.site/",
    // },

    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-green-500" />
      ),
      href: "https://www.linkedin.com/in/srinjay-mitra/",
    },

    // {
    //   title: "Behance",
    //   icon: (
    //     <IconBrandBehance className="h-full w-full text-green-500" />
    //   ),
    //   href: "https://www.behance.net/balibhai",
    // },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-green-500" />
      ),
      href: "https://github.com/SrinjayMitra",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        
        items={links}
      />
    </div>
  );
}
