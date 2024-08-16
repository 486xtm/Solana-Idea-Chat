import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SolanaConnect } from "../components/ConnectButton";
import { Box, useMediaQuery } from "@mui/material";

import bgVideoMobile from "../assets/videos/mobile-blue-bg.mp4";
import bgVideoDesktop from "../assets/videos/pc-blue-bg.mp4";
import AnimatedLogo from "../components/buttons/AnimatedLogo";

export default function Landing() {
  const isMobile = useMediaQuery("(max-width:768px)");

  const [bgSource, setBgSource] = useState(
    isMobile ? bgVideoMobile : bgVideoDesktop
  );

  useEffect(() => {
    setBgSource(isMobile ? bgVideoMobile : bgVideoDesktop);
  }, [isMobile]);

  return (
    <div className="relative w-full h-screen isolate bg-[#0000FF]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover object-center -z-10"
        src={bgSource}
        autoPlay
        loop
        muted
      />

      <Box className="flex centre justify-center h-full w-full">
        <Box className="m-auto">
          <div className="text-white text-center flex flex-col justify-between">
            <AnimatedLogo />
            <h1 className="text-[40px] lg:text-[80px] font-bold font-jbm uppercase">
              Idea chat
            </h1>
            <p className="text-[15px] lg:text-[24px] uppercase font-jbm">
              autism friendly chat interface from the future
            </p>
            <SolanaConnect />
          </div>
        </Box>
      </Box>
    </div>
  );
}
