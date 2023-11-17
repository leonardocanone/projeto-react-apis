import { Header } from "../../components/Header/Header";
import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  gap: 10px;
`;

export function ErrorPage() {
    return (
        <>
        <Header/>
        <ErrorContainer>
        <h2>Página não encontrada!</h2>
        <p>Retorne para a lista com Todos os Pokémons clicando no canto esquerdo do cabeçalho.</p>
        </ErrorContainer>
        </>
    )
} 