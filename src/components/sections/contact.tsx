"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { Button } from "../ui/button";
import Link from "next/link";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-[100dvh] max-w-7xl mx-auto ">
      <SectionHeader id='contact' className="relative mb-14" title={
        <>
          LET&apos;S WORK <br />
          TOGETHER
        </>} />
      <div className="grid grid-cols-1 md:grid-cols-2 z-[9999] mx-4">
        <Card className="min-w-7xl bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-10 md:mt-20">
          <CardHeader>
            <CardTitle className="text-4xl">Get in Touch</CardTitle>
            <CardDescription>
              Reach out directly — fastest way to talk is WhatsApp.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Link href={config.social.whatsapp} target="_blank">
              <Button className="flex items-center gap-2 w-full">
                <SiWhatsapp size={20} />
                <p>Message on WhatsApp</p>
              </Button>
            </Link>
            <Link href={config.social.instagramPersonal} target="_blank">
              <Button variant={"outline"} className="flex items-center gap-2 w-full">
                <SiInstagram size={20} />
                <p>Instagram — Personal</p>
              </Button>
            </Link>
            <Link href={config.social.instagramBrand} target="_blank">
              <Button variant={"outline"} className="flex items-center gap-2 w-full">
                <SiInstagram size={20} />
                <p>Instagram — Pyramid Pixel</p>
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
