/* eslint-disable react/prop-types */
import { StyleSheetManager, styled } from "styled-components";

const LabelGradient = styled.label`
  background-image: var(--linear-gradient-black);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* cursor: pointer; */
  /* z-index: -1; */
  
  &::before {
    content: "";
    transition: 0.4s;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: var(--linear-gradient-pink);
    clip-path: ${(props) =>
      props.focus === "true"
        ? "circle(100% at 50% 50%)"
        : "circle(0% at 50% 50%)"};
  }
`;
function ButtonGradient({
  children,
  focus,
  onFocus,
  offFocus,
  className
}) {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "focus"}>
      <button
        className={"w-fit relative font-[700] text-white dark:text-black dark:hover:text-white overflow-hidden shadow-lg dark:shadow-none hover:shadow-rose-500/30 transition-all duration-300 rounded-3xl " + className}
        onMouseEnter={onFocus}
        onMouseLeave={offFocus}
      >
        <span className="z-10 relative cursor-pointer flex gap-5 items-center justify-center">{children}</span>
        <LabelGradient className="" focus={focus.toString()} style={{cursor:'pointer'}}></LabelGradient>
      </button>
    </StyleSheetManager>
  );
}

export default ButtonGradient;
