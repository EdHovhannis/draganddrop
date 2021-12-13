import styled from "styled-components";

export const Prev = styled.div`
  position: fixed;
  background: ${(props) => props.theme.background};
  top: ${(props) => props.theme.top};
  left: ${(props) => props.theme.left};
  width: ${(props) => props.theme.width};
  height: ${(props) => props.theme.height};
  border-radius: ${(props) => props.theme.borderRadius};
`;
