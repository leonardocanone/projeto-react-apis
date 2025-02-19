import styled from "styled-components";

export const StyleHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 3;
  background-color: white;
  min-height: 10rem;
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;

  @media only screen and (min-width: 480px) and (max-width: 768px){
    min-height: 8rem;
  }
  
  @media only screen and (max-width: 480px){
    min-height: 6rem;
    }


  .logo {
  width: 320px;
  height: 120px;

  
  @media only screen and (min-width: 480px) and (max-width: 768px){
  width: 250px;
  height: 100px;
  }
  
  @media only screen and (max-width: 480px){
  width: 130px;
  height: 50px;  
    }

  }

  .pokedexButton {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    height: 80px;
    width: 280px;
    margin-right: 40px;
    padding: 4px 10px;
    border-radius: 8px;
    border: none;
    background: #33A4F5;
    cursor: pointer;

    p {
      color: white;
      font-family: Poppins;
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      letter-spacing: 0em;
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px){
    height: 65px;
    width: 180px;
    margin-right: 40px;

    p {
    font-size: 24px;
    }
    }

    @media only screen and (min-width: 480px) and (max-width: 768px){
    height: 60px;
    width: 170px;
    margin-right: 40px;

    p {
    font-size: 24px;
    }
    }
  
  @media only screen and (max-width: 480px){
    height: 40px;
    width: 94px;
    margin-right: 12px; 

  p {
    font-size: 16px;
  }
    }
  }

  .buttonAllPokemons {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    height: 74px;
    width: 287px;
    margin-left: 40px;
    padding: 4px 10px;
    cursor: pointer;
    border: none;
    background: none;

    p {
      color: #1A1A1A;
      font-family: Poppins;
      font-size: 24px;
      font-weight: 700;
      letter-spacing: 0em;
      text-decoration: underline;
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px){
    height: 70px;
    width: 220px;
    margin-left: 8px;
    
    p {
    font-size: 24px;
    }
    }

    @media only screen and (min-width: 480px) and (max-width: 768px){
    height: 70px;
    width: 220px;
    margin-left: 8px;
    
    p {
    font-size: 24px;
    }
    }

    @media only screen and (max-width: 480px){
    height: 40px;
    width: 80px;
    margin-left: 18px;

    p {
    font-size: 14px;
    }
    }
    }

  .pageNotFound {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    height: 74px;
    width: 287px;
    margin-left: 40px;
    padding: 4px 10px;
    cursor: pointer;
    border: none;
    background: none;
    
    p {
      color: #1A1A1A;
      font-family: Poppins;
      font-size: 16px;
      font-weight: 700;
      line-height: 36px;
      letter-spacing: 0em;
      text-decoration: underline;
    }

    @media only screen and (max-width: 480px){
    height: 40px;
    width: 80px;
    margin-left: 8px; 

  p {
    font-size: 16px;
  }
    }
    
  }


  .adicionar {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    height: 80px;
    width: 280px;
    margin-right: 40px;
    padding: 4px 10px;
    border-radius: 8px;
    border: none;
    background: green;
    cursor: pointer;

    p {
      color: white;
      font-family: Poppins;
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      letter-spacing: 0em;
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px){
    height: 65px;
    width: 180px;
    margin-right: 40px;

    p {
    font-size: 24px;
    }
    }

    @media only screen and (min-width: 480px) and (max-width: 768px){
    height: 60px;
    width: 170px;
    margin-right: 40px;
    
    p {
    font-size: 24px;
    }
    }
  
  @media only screen and (max-width: 480px){
    height: 40px;
    width: 95px;
    margin-right: 12px; 

  p {
    font-size: 16px;
  }
    }
  }

  .excluir {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    height: 80px;
    width: 280px;
    margin-right: 40px;
    padding: 4px 10px;
    border-radius: 8px;
    border: none;
    background: red;
    cursor: pointer;

    p {
      color: white;
      font-family: Poppins;
      font-size: 24px;
      font-weight: 700;
      line-height: 36px;
      letter-spacing: 0em;
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px){
    height: 65px;
    width: 180px;
    margin-right: 40px;

    p {
    font-size: 24px;
    }
    }

    @media only screen and (min-width: 480px) and (max-width: 768px){
    height: 60px;
    width: 170px;
    margin-right: 40px;
    
    p {
    font-size: 24px;
    }
    }
  
  @media only screen and (max-width: 480px){
    height: 40px;
    width: 95px;
    margin-right: 12px; 

  p {
    font-size: 16px;
  }
    }
  }
`;

export const CapturarOverlay = styled.div` 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`