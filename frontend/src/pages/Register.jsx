import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Formik, Form, useField } from "formik";

import { TextInputWithLabel as TextInput } from "../components/FormikElements";
import BackendError from "../components/backendError";

import { registerSchema } from "../schemas/registerSchema";

import { useSignUpMutation } from "../services/authService";

import { urlSlug } from "../utils/urlSlug";

const Register = () => {
  const navigate = useNavigate();
  const [signUp, { isError, isSuccess, error }] = useSignUpMutation();

  useEffect(() => {
    isSuccess && navigate(urlSlug.LOGIN);
  }, [isSuccess]);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // handleLogin(values, resetForm);
    signUp(values);
    setSubmitting(false);
  };

  return (
    <div className="w-full">
      <Formik
        initialValues={{
          email: "",
          userName: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        <Form className="mt-3 flex w-full flex-col">
          <TextInput
            label="User Name"
            name="userName"
            type="text"
            placeholder="John Doe"
          />

          <TextInput
            label="Email"
            name="email"
            type="text"
            placeholder="johndoe@gmail.com"
          />

          <TextInput
            label="Password"
            name="password"
            type="password"
            placeholder="********"
          />

          <TextInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="********"
          />

          <div className="mt-3 flex">
            <button
              className="w-full rounded-lg border-none bg-teal p-2 outline-none"
              type="submit"
            >
              <p className="text-sm font-semibold uppercase text-white">
                create new account
              </p>
            </button>
          </div>
          {isError && <BackendError errorMessage={error.data.error} />}
        </Form>
      </Formik>

      <p className="mt-5 text-sm font-semibold">
        Already have an account?{" "}
        <Link to={urlSlug.LOGIN}>
          <span className="capitalize text-teal underline">sign in</span>
        </Link>
      </p>
    </div>
  );
};

export default Register;
