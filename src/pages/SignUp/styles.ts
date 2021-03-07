import styled from 'styled-components';
import { shade } from 'polished';
import signUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch; //ocupa todo o conteúdo disponível
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center; // centraliza todo o conteudo no centro

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      text-decoration: none;
      display: block;
      margin-top: 24px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
        font-weight: 500;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
      }
    }
  }

  // apenas o 'a' que está diretamente dentro do content e não em outros subníveis
  > a {
    color: #f4ede8;
    text-decoration: none;
    display: block;
    margin-top: 24px;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
      font-weight: 500;
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover; // image cobre todo o conteúdo disponível da div
`;
