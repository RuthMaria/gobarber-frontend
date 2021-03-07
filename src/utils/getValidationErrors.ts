import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string; // nome do campo pode ser qualquer nome mas tem que ser uma string
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    validationErrors[`${error.path}`] = error.message;
  });

  return validationErrors;
}
