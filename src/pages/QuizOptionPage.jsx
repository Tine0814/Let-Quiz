import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import CardComponent from "../components/CardComponent";
import catNewbie from "../assets/img/catNewbie.png";
import catIntermediate from "../assets/img/catIntermediate.png";
import catAdvance from "../assets/img/catAdvance.png";
import LockIcon from "@mui/icons-material/Lock";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { motion } from "framer-motion";
import ViewLevelComponent from "../components/ViewLevelComponent";
import Lottie from "lottie-react";
import commingsoon from "../assets/lottie/commingsoon.json";
import codingIsFun from "../assets/img/codingIsFun.png";
import ButtonComponent from "../components/button/ButtonComponent";

const QuizOptionPage = () => {
  const [pickLevel, setPickLevel] = useState(0);

  const ShowQuizLevel = () => {
    pickLevel === 0
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
    if (pickLevel === 1) {
      return (
        <ViewLevelComponent
          background="bg-gradient-to-r from-[#eec746] to-[#d7cc52]"
          img={codingIsFun}
          button={<ButtonComponent />}
          level="Level 1"
          title="JavaScript Newbie"
          description="Ready for the Challenge? Test Your Basic JavaScript Knowledge in
      a Fun Quiz Game! Let's Play!"
          onClick={() => setPickLevel(0)}
        />
      );
    }
    if (pickLevel === 2) {
      return (
        <ViewLevelComponent
          background="bg-gradient-to-r from-[#5477eb] to-[#0cb6fc]"
          level="Level 2"
          title="JavaScript Intermediate"
          lottie={<Lottie animationData={commingsoon} />}
          onClick={() => setPickLevel(0)}
        />
      );
    }
    if (pickLevel === 3) {
      return (
        <ViewLevelComponent
          background="bg-gradient-to-r from-[#af95d6] to-[#e6b6e6]"
          level="Level 3"
          title="JavaScript Advanced"
          lottie={<Lottie animationData={commingsoon} />}
          onClick={() => setPickLevel(0)}
        />
      );
    }
  };

  return (
    <>
      {ShowQuizLevel()}
      <div className="py-6 px-2">
        <HeaderComponent />
        <CardComponent
          background="bg-gradient-to-r from-[#eec746] to-[#d7cc52]"
          level="Level 1"
          titleCard="JavaScript Newbie"
          img={catNewbie}
          icon={<PlayArrowIcon />}
          onClick={() => setPickLevel(1)}
        />
        <CardComponent
          background="bg-gradient-to-r from-[#5477eb] to-[#0cb6fc]"
          level="Level 2"
          titleCard="JavaScript Intermediate"
          img={catIntermediate}
          icon={<LockIcon />}
          onClick={() => setPickLevel(2)}
        />
        <CardComponent
          background="bg-gradient-to-r from-[#af95d6] to-[#e6b6e6]"
          level="Level 3"
          titleCard="JavaScript Advanced"
          img={catAdvance}
          icon={<LockIcon />}
          onClick={() => setPickLevel(3)}
        />
      </div>
    </>
  );
};

export default QuizOptionPage;
