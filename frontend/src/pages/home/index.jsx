import React, { useEffect } from "react";
import { LargeText } from "../../styling/common";
import { getUserData } from "../../localredux/user";
import withBase from "hocs/base_page";
import { HomeParent } from "./styles";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loading from "images/lotties/loading.json";
import { AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { t } from "i18next";

function Home() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      navigation("/signup");
    }, 1000);
  });

  return (
    <HomeParent>
      <AnimatePresence>
        <LargeText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
         {t("home.loading")}
        </LargeText>
      </AnimatePresence>
      <Lottie animationData={loading} loop={true} />
    </HomeParent>
  );
}

export default withBase(Home);
