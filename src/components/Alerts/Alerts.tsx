import styled from "styled-components";
import {ReactNode} from "react";
import React from "react";

const TemplateAlert = styled.div`
  padding: 0.5em 2em;
  border-radius: 0.6em;
  border: none;
`

const BaseAlertWrapper = styled(TemplateAlert)`
  background: var(--light-color);
`

type BaseAlertStyleProps = {
  colorCSSVar?: string,
  backgroundCSSVarRGB?: string,
  fontCSSVar?: string
  opacity?: string
}

const BaseAlertStyled = styled(TemplateAlert)<BaseAlertStyleProps>`
  display: flex;
  color: ${props => props.backgroundCSSVarRGB ? `rgb(var(${props.backgroundCSSVarRGB}))` :
          props.colorCSSVar ? `var(${props.backgroundCSSVarRGB})` : 
                  `var("--light-color")`};
  background: rgba(var(${props => props.backgroundCSSVarRGB ?? "--brand-color-rgb"}), ${props => props.opacity ?? 0.4});
  ${props => props.fontCSSVar ? `font: var(${props.fontCSSVar};` : ""}
  border: 1px solid rgb(var(${props => props.backgroundCSSVarRGB ?? "--brand-color-rgb"}));
`

type BaseAlertProps = BaseAlertStyleProps & {
  children?: string,
  icon?: ReactNode
}

const BaseAlert = (props: BaseAlertProps) => {
  return (
    <BaseAlertWrapper className="basealert-wrapper">
      <BaseAlertStyled {...props} className="basealert">
        {props.children}
      </BaseAlertStyled>
    </BaseAlertWrapper>
  )
}

export {BaseAlert}