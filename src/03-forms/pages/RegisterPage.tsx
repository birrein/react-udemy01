import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

type Props = {};
export const RegisterPage = (props: Props) => {
  const {
    formData,
    onChange,
    name,
    email,
    password,
    passwordConfirm,
    reset,
    isValidEmail,
  } = useForm({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>Este campo es obligatorio</span>}

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>Email no es válido</span>}

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
        />
        {password.trim().length <= 0 && <span>Este campo es obligatorio</span>}
        {password.trim().length <= 6 && password.trim().length > 0 && (
          <span>La contraseña debe tener más de 6 caracteres</span>
        )}

        <input
          type="password"
          placeholder="Repeat Password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={onChange}
        />
        {passwordConfirm.trim().length <= 0 && (
          <span>Este campo es obligatorio</span>
        )}
        {passwordConfirm.trim().length > 0 && passwordConfirm !== password && (
          <span>Las contraseñas no coinciden</span>
        )}

        <button type="submit">Create</button>
        <button type="button" onClick={reset}>
          Reset Form
        </button>
      </form>
    </div>
  );
};
