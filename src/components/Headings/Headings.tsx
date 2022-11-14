import React from "react";
import styled, {css} from "styled-components";

type HeadingStyleProps = {
  colorCSSVar?: string,
  backgroundCSSVar?: string,
  fontCSSVar?: string,
}

const TemplateHeading = css<HeadingStyleProps>`
  color: var(${props => props.colorCSSVar ?? "--dark-color"});
  background: var(${props => props.backgroundCSSVar ?? "transparent"});
  font: var(${props => props.fontCSSVar ?? "--font1"});
  margin: 0;
`

const HeadingH1 = styled.h1`${TemplateHeading}`
const HeadingH2 = styled.h2`${TemplateHeading}`
const HeadingH3 = styled.h3`${TemplateHeading}`
const HeadingH4 = styled.h4`${TemplateHeading}`
const HeadingH5 = styled.h5`${TemplateHeading}`
const HeadingH6 = styled.h6`${TemplateHeading}`

type HeadingProps = HeadingStyleProps & {
  headingType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
  children: React.ReactNode
}

const BaseHeading = (props: HeadingProps) => {
  switch (props.headingType) {
    case "h1": return <HeadingH1 {...props}>{props.children}</HeadingH1>
    case "h2": return <HeadingH2 {...props}>{props.children}</HeadingH2>
    case "h3": return <HeadingH3 {...props}>{props.children}</HeadingH3>
    case "h4": return <HeadingH4 {...props}>{props.children}</HeadingH4>
    case "h5": return <HeadingH5 {...props}>{props.children}</HeadingH5>
    case "h6": return <HeadingH6 {...props}>{props.children}</HeadingH6>
  }
  return  <HeadingH1 {...props}>{props.children}</HeadingH1>
}

export {BaseHeading}
