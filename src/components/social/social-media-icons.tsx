"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiInstagram, SiWhatsapp, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";
import Link from "next/link";

const BUTTONS = [
  {
    name: "WhatsApp",
    href: config.social.whatsapp,
    icon: <SiWhatsapp size={"24"} color={"#fff"} />,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    icon: <SiLinkedin size={"24"} color={"#fff"} />,
  },
  {
    name: "Instagram (Personal)",
    href: config.social.instagramPersonal,
    icon: <SiInstagram size={"24"} color={"#fff"} />,
  },
  {
    name: "Instagram (Pyramid Pixel)",
    href: config.social.instagramBrand,
    icon: <SiInstagram size={"24"} color={"#fff"} />,
  }
];

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  return (
    <div ref={ref} className="z-10">
      {show &&
        BUTTONS.map((button) => (
          <Link href={button.href} key={button.name} target="_blank">
            <Button variant={"ghost"}>{button.icon}</Button>
          </Link>
        ))}
    </div>
  );
};

export default SocialMediaButtons;
