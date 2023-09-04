/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { styled } from "styled-components";
const TextDegrade = styled.h2`
  background-color: #000000;
  
  background-image: ${props => props.color ? `var(--radial-gradient-${props.color})` : "var(--linear-gradient-pink)"};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  padding-bottom: ${(props) => (props.err ? "15px" : "0px")};
`;

const TextContraGrade = styled.h3`
  position: absolute;
  content: "Daniel Mosvich";
  transform-origin: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding-bottom: ${(props) => (props.err ? "15px" : "0px")};
  background-color: #000000;
  background-image: var(--linear-gradient-black);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;
function TextGradient({ children, className, focus, transition, err, color }) {
  return (
    <div className={`relative select-none ${className}`} style={{}}>
      <div
        style={{
          opacity: focus ? "1" : "0",
          transition: transition ? transition : "0.4s",
        }}
      >
        <TextDegrade color={color} err={err}>{children}</TextDegrade>
      </div>
      <div
        style={{
          opacity: focus ? "0" : "1",
          transition: transition ? transition : "0.4s",
        }}
      >
        <TextContraGrade color={color} err={err}>{children}</TextContraGrade>
      </div>
    </div>
  );
}

export default TextGradient;
