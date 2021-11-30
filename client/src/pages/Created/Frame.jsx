import styled, { css } from "styled-components";

export const Frame = styled.div`
  position: absolute;
  background: ${(props) => props.theme.background};
  top: ${(props) => props.theme.top};
  left: ${(props) => props.theme.left};
  width: ${(props) => props.theme.width};
  height: ${(props) => props.theme.height};
  border-radius: ${(props) => props.theme.borderRadius};
  border: 2px solid transparent;
  &:hover {
    border: 2px solid blue;
  } 
  ${(props) =>
    props?.allowframetools &&
    css`
      border: 2px solid blue;
    `};
  ${(props) =>
    props?.nonedisp &&
    css`
      display: none;
    `};
  ${(props) =>
    props?.dispnone &&
    css`
      display: none;
    `};
`;
