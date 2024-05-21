import styled from "styled-components";
import { motion } from "framer-motion";
import Colors from "./color";

const Background = styled.div`
  height: 100vh;
  min-height: 100vh;
`;

const XLargeText = styled(motion.span)`
  font-family: "Pacifico", cursive;
  color: ${Colors.rich_black};
  font-size: 24px;
  font-weight: 600;
`;

const WhiteHeading = styled(motion.span)`
  font-family:"Encode Sans Expanded", sans-serif;
  color: ${Colors.ghost_white};
  font-size: 30px;
  font-weight: 700;
`;

const RegularText = styled(motion.span)`
  font-family: "Encode Sans Expanded", sans-serif;
  color: ${(props) => props.$color};
  font-size: 16px;
  font-weight: 600;
`;

const XSmallText = styled.div`
  font-family: "Cormorant Garamond", serif;
  color: green;
  font-size: 8px;
`;

const SmallText = styled(motion.span)`
  font-family: "Cormorant Garamond", serif;
  color: 10px;
  font-size: 12px;
`;

const LargeText = styled(motion.span)`
  font-family: "Pacifico", cursive;
  color: ${Colors.rich_black};
  font-size: 20px;
  font-weight: 600;
`;

const CustomATag = styled(motion.a)`
  text-decoration: none;
`;

const Bold = styled.span`
  font-weight: 700;
`;

export {
  RegularText,
  Background,
  CustomATag,
  XSmallText,
  LargeText,
  SmallText,
  XLargeText,
  Bold,
  WhiteHeading
};
