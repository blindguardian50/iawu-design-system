import styled from "styled-components";

const TemplateButton = styled.button`
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5em 2em;
  border-radius: 0.6em;
  border: none;
`

type BaseButtonProps = {
    colorCSSVar?: string,
    backgroundCSSVar?: string,
}
const BaseButton = styled(TemplateButton)<BaseButtonProps>`
  color: var(${props => props.colorCSSVar ?? "--light-color"});
  background: var(${props => props.backgroundCSSVar ?? "--brand-color"});
  transition: filter 0.5s, transform 0.1s;
  :hover {
    filter: brightness(120%);
  }
  :active {
    transform: scale(0.8);
  }
  :focus {
    outline: 1px solid blue;
  }
`

type IconButtonProps = {
    radius?: string,
    icon?: string,
}
const IconButton = styled(TemplateButton)<BaseButtonProps>`
  color: var(${props => props.colorCSSVar ?? "--light-color"});
  background: var(${props => props.backgroundCSSVar ?? "--brand-color"});
  transition: filter 0.5s, transform 0.1s;
  border-radius: 50%;
  :hover {
    filter: brightness(120%);
  }
  :active {
    transform: scale(0.8);
  }
  :focus {
    outline: 1px solid blue;
  }
`

export {BaseButton, TemplateButton}
