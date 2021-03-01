import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

// recebe todas as propriedades de um button
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
