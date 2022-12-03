import styled from "styled-components";
import {ReactNode} from "react";
import React from "react";

const TemplateButton = styled.button`
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5em 2em;
  border-radius: 0.6em;
  border: none;
`

type BaseButtonStyledProps = {
    /**
     * Expects CSS Variable for font color
     * @default inherit
     */
    colorCSSVar?: string,
    /**
     * Expects CSS Variable for font color
     * @default
     */
    backgroundCSSVar?: string,
    /**
     * Expects CSS Variable for font
     * @default
     */
    fontCSSVar?: string,
    /**
     * Expects CSS Variable for outline of button on focus element
     * @default 1px solid blue
     */
    focusedCSSVar?: string
}
const BaseButtonStyled = styled(TemplateButton)<BaseButtonStyledProps>`
  color: ${({colorCSSVar}) => colorCSSVar ? `var(${colorCSSVar})` : "inherit"};
  background: ${({backgroundCSSVar}) => backgroundCSSVar ? `var(${backgroundCSSVar})` : ""};
  font: var(${props => props.fontCSSVar ?? ""});
  transition: filter 0.1s, transform 0.1s;
  :hover {
    filter: ${({backgroundCSSVar}) => backgroundCSSVar ? `brightness(120%);` : "brightness(80%);"};
  }
  :active {
    filter: ${({backgroundCSSVar}) => backgroundCSSVar ? `brightness(120%);` : "brightness(80%);"};
    transform: scale(0.8);
  }
  :focus {
    outline: ${({focusedCSSVar}) => focusedCSSVar ? `var(${focusedCSSVar})` : "1px solid blue"};
  }
`

type BaseButtonProps = BaseButtonStyledProps & {
    children: ReactNode
}

const BaseButton = (props: BaseButtonProps) => {
    return (
        <BaseButtonStyled className={"base-button"} {...props}>
            {props.children}
        </BaseButtonStyled>
    )
}

export {BaseButton}
