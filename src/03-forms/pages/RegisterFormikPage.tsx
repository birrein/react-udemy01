import { ErrorMessage, Field, Form, Formik } from 'formik';
import '../styles/styles.css';
import * as Yup from 'yup';

type Props = {};
export const RegisterFormikPage = (props: Props) => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };

  return (
    <div>
      <h1>Register Page</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(
            '🚀 ~ file: RegisterFormikPage.tsx ~ line 39 ~ RegisterFormikPage ~ values',
            values
          );
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Must be at least 2 characters')
            .max(15, 'Must be 15 characters or less')
            .required(),
          email: Yup.string().email().required(),
          password: Yup.string().min(6).required(),
          passwordConfirm: Yup.string()
            .min(6, 'Must be at least 6 characters')
            .required('Password confirmation is required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="span" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="span" />

            <label htmlFor="passwordConfirm">Repeat Password</label>
            <Field name="passwordConfirm" type="password" />
            <ErrorMessage name="passwordConfirm" component="span" />

            <button type="submit">Create</button>
            <button type="button" onClick={handleReset}>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
