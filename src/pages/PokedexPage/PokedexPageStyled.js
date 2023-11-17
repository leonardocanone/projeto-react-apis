import styled from "styled-components";

export const StylePokedex = styled.div`
  
  background-color: #5E5E5E;
  min-height: 100vh;
  width: 100%;

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 0 40px;
    transition-duration: 400ms;
  }
`;

export const MeusPokemons = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 45px;
  line-height: 72px;
  padding-top: 40px;
  padding-bottom: 30px;
  padding-left: 40px;
  transition-duration: 400ms;
`;