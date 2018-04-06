import React from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

// Components
import { ToolBar } from "../toolbar/ToolBar";
import { Button } from "../button/Button";

/**
 * A Dialog with actions.
 * @param {title} title Title of the dialog
 * @param {leftLabel} leftLabel Text of the button on the top left of the dialog
 * @param {onLeftLabelClick} onLeftLabelClick Event handler (gets fired when the user clicks the left button)
 * @param {rightLabel} rightLabel Text of the button on the top right of the dialog
 * @param {onRightLabelClick} onRightLabelClick Event handler (gets fired when the user clicks the right button)
 * @param {body} body Items in the main area of the Dialog
 * @param {active} active Whether the dialog is open or not
 * @param {fullscreen} fullscreen Whether the dialog fills the whole screen or not
 * @param {...otherProps} ...otherProps Other (HTML5) props that should be passed to the dialog
 */
export const Dialog = ({
  title,
  leftLabel,
  onLeftLabelClick,
  rightLabel,
  onRightLabelClick,
  body,
  active,
  fullscreen,
  ...otherProps
}) => (
  <DialogWrapper open={active} fullscreen={fullscreen} {...otherProps}>
    <DialogHeader
      title={title}
      leftItems={[
        <Button value={leftLabel} onClick={onLeftLabelClick} key="leftLabel" />
      ]}
      rightItems={[
        <Button
          value={rightLabel}
          onClick={onRightLabelClick}
          type="submit"
          key="rightLabel"
        />
      ]}
    />
    <DialogBodyWrapper>{body}</DialogBodyWrapper>
  </DialogWrapper>
);

const DialogWrapper = styled.dialog`
  ${({ fullscreen }) =>
    fullscreen
      ? "position: fixed; top: 0; left: 0;height: 100%; width: 100%; overflow-y: auto"
      : "position: relative; height: auto; width: auto"};
  padding: 0;
  border: 0;
  box-sizing: border-box;
  border: 1px solid #000000;
  & > menu {
    margin-top: 0;
    border-left: 0;
    border-top: 0;
    border-right: 0;
  }
`;

const DialogBodyWrapper = styled.div`
  padding: 1rem;
  padding-top: 0;
`;
const DialogHeader = styled(ToolBar)``;

Dialog.propTypes = {
  title: PropTypes.string,
  leftLabel: PropTypes.string,
  onLeftLabelClick: PropTypes.func,
  rightLabel: PropTypes.string,
  onRightLabelClick: PropTypes.func,
  body: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  active: PropTypes.bool,
  fullscreen: PropTypes.bool
};
