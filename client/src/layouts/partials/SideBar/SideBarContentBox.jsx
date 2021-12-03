import styled from "styled-components";
export const SideBarContentBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: ${(props) => props.theme.display};
  grid-template-rows: ${(props) => props.theme.gridrow};
  grid-template-columns: ${(props) => props.theme.gridcol};
  grid-template-areas: ${(props) => props.theme.gta};
  padding: ${(props) => props.theme.pad};
`;
