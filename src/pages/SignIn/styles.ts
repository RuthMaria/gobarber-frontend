import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch; //ocupa todo o conteúdo disponível
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center; // centraliza todo o conteudo no centro

  width: 100%;
  max-width: 700px;
`;

export const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

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
    color: #ff9000;
    text-decoration: none;
    display: block;
    margin-top: 24px;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
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
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover; // image cobre todo o conteúdo disponível da div
`;
