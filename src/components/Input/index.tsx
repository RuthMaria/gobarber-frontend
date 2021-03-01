import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons'; // tem todas as propriedades que o icone pode receber
import { Container } from './styles';

// recebe todas as propriedades de um Input
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    {Icon && <Icon size={20} />}
    <input {...rest} />
  </Container>
);

export default Input;
