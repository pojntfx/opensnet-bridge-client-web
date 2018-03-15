import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

// Style constants
import { light, borderRadius } from "../constants";

// Components
import DialogHeader from "./DialogHeader";
import DialogBody from "./DialogBody";

export const Dialog = styled(
  ({
    open,
    fullscreen,
    leftButtonValue,
    leftButtonColor,
    leftButtonIcon,
    onLeftButtonClick,
    title,
    rightButtonValue,
    rightButtonColor,
    rightButtonIcon,
    onRightButtonClick,
    children,
    className
  }) => (
    <dialog open={open} className={className}>
      <form method="dialog">
        <DialogHeader
          leftButtonValue={leftButtonValue}
          leftButtonColor={leftButtonColor}
          leftButtonIcon={leftButtonIcon}
          onLeftButtonClick={onLeftButtonClick}
          title={title}
          rightButtonValue={rightButtonValue}
          rightButtonColor={rightButtonColor}
          rightButtonIcon={rightButtonIcon}
          onRightButtonClick={onRightButtonClick}
          fullscreen={fullscreen}
        />
      </form>
      <section>
        <DialogBody>{children}</DialogBody>
      </section>
    </dialog>
  )
)`
  border: 0;
  padding: 0;
  background: ${light};
  ${props =>
    props.fullscreen
      ? `    
  position: fixed;
  border-radius: 0;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;`
      : `border-radius: ${borderRadius}`};
`;

Dialog.propTypes = {
  open: PropTypes.bool,
  className: PropTypes.string,
  leftButtonValue: PropTypes.string.isRequired,
  leftButtonColor: PropTypes.string.isRequired,
  leftButtonIcon: PropTypes.string,
  onLeftButtonClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  rightButtonValue: PropTypes.string.isRequired,
  rightButtonColor: PropTypes.string.isRequired,
  rightButtonIcon: PropTypes.string,
  onRightButtonClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.arrayOf(PropTypes.node.isRequired).isRequired
  ]),
  fullscreen: PropTypes.bool
};