import styled from "styled-components";

export const StyleCard = styled.div`
  
  background-color: rgb(110, 110, 110);

  padding: 16px;
  min-width: 440px;
  max-width: 450px;
  height: 208px;
  border-radius: 10px;
  display: flex;
  position: relative;
  margin: 20px 1px;
  color: #ffffff;

  @media only screen and (max-width: 480px){
    min-width: 360px;
    }

    @media only screen and (max-width: 375px){
      height: 200px;
      min-width: 340px;
    }  

  h2 {
    color: white;
    font-size: 18px;
    margin-left: 15px;
  }

  .linkDetalhes{
    
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-decoration: underline;
    text-underline-offset: 2px;
    cursor: pointer;

    appearance: none;
    background: none;
    border: none;
    color: inherit;
    color: white;
  }

`;

export const PokemonNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  line-height: 19.36px;
`;

export const PokemonName = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
`;

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
`;

export const TypesContainer = styled.div`
  margin-bottom: 52px;
  display: flex;
`;

export const PokemonImage = styled.img`
width: 190px;
height: 190px;
/* width: 160px; */
/* height: 160px; */
position: absolute;
top: -60px;
/* top: -50px; */
right: 10px;
z-index: 2;

@media only screen and (max-width: 480px){
  width: 170px;
  height: 170px;
  right: -17px;
    }

`

export const CatchButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000;
`;

export const ExcludeButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: white;
  background-color: #FF6262;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
`;

export const Pokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 210px;
  height: 180px;
`;

export const CapturarOverlay = styled.div` 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`


