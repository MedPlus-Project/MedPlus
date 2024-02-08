import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { urlSlug } from "../utils/urlSlug";

// Layout
const AuthLayout = React.lazy(() => import("../layouts/AuthLayout"));
const FeaturesLayout = React.lazy(() => import("../layouts/FeaturesLayout"));

// pages
const LoginPage = React.lazy(() => import("../pages/SignIn"));
const RegisterPage = React.lazy(() => import("../pages/Register"));
const TestPage = React.lazy(() => import("../pages/features/TestForm"));
// const ForgotPasswordPage = React.lazy(
//   () => import("../pages/public/ForgotPassword"),
// )

const AuthRoutes = () =>
  useRoutes([
    {
      element: <FeaturesLayout />,
      children: [
        { path: urlSlug.LOGIN, element: <LoginPage /> },
        { path: urlSlug.REGISTER, element: <RegisterPage /> },
        { path: urlSlug.FORM, element: <TestPage /> },
      ],
    },
    { path: "*", element: <Navigate to={urlSlug.LOGIN} /> },
  ]);

export default AuthRoutes;
