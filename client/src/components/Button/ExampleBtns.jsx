import styled from "styled-components";

export const ExampleBtns = styled.div`
  grid-area: ${(props) => props.theme.ga};
  align-self: center;
  justify-self: center;
  padding: 10px;
  & > button {
    width: 128px;
    background: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.cl};
    padding: ${(props) => props.theme.pad};
    border: ${(props) => props.theme.bor};
    outline: ${(props) => props.theme.outl};
    border-radius: ${(props) => props.theme.br};
    cursor: ${(props) => props.theme.cursor};
  }
  & > input {
    width: 160px;
    color: ${(props) => props.theme.cl};
    padding: ${(props) => props.theme.pad};
    border: ${(props) => props.theme.bor};
    outline: ${(props) => props.theme.outl};
    border-radius: ${(props) => props.theme.br};
    cursor: ${(props) => props.theme.cursor};
  }
  & > span {
    width: 160px;
    color: ${(props) => props.theme.cl};
    padding: ${(props) => props.theme.pad};
  }
  & > button:hover {
    opacity: 0.8;
  }
`;
