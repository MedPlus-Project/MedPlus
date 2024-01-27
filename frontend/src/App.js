import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/Contactus";
import DoctorDetails from "./pages/doctor/DoctorDetails";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";

import FeaturesLayout from "./layouts/FeaturesLayout";
import FeaturesHomePage from "./pages/features/FeaturesHomePage";
import SymptomChecker from "./pages/features/SymptomChecker";
import LabReportAnalyser from "./pages/features/LabReportAnalyzer";
import HospitalDetails from "./pages/features/HospitalDetails";
import ContactDoctor from "./pages/features/ContactDoctor";

import UserChat from "./pages/ChatPage/UserChat";

import AdminDashboardLayout from "./layouts/AdminDashboardLayout";
import DashboardHomePage from "./pages/adminDashboard/DashboardHomePage";

import Symptoms from "./pages/adminDashboard/Symptoms";
import Diseases from "./pages/adminDashboard/Diseases";
import Messages from "./pages/adminDashboard/Messages";
import Doctors from "./pages/adminDashboard/Doctors";
import Clinic from "./pages/adminDashboard/Clinic";

const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <p>services</p>,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
        // loader: teamLoader,
      },
      {
        path: "/doctor/:id",
        element: <DoctorDetails />,
      },

      {
        path:"/user-chat",
        element:<UserChat/>
      },
      
      
      {
        path: "/features",
        element: <FeaturesLayout />,
        children: [
          {
            path: "/features/",
            element: <FeaturesHomePage />,
          },
          {
            path: "/features/symptom-checker",
            element: <SymptomChecker />,
          },
          {
            path: "/features/lab-report-analyzer",
            element: <LabReportAnalyser />,
          },
          {
            path: "/features/hospital-details",
            element: <HospitalDetails />,
          },
          {
            path: "/features/contact-doctor",
            element: <ContactDoctor />,
          },
        ],
      },
      {
        path: "/admin-dashboard",
        element: <AdminDashboardLayout />,
        children: [
          {
            path: "/admin-dashboard/",
            element: <DashboardHomePage />,
          },
          {
            path: "/admin-dashboard/symptoms",
            element: <Symptoms />,
          },
          {
            path: "/admin-dashboard/diseases",
            element: <Diseases />,
          },
          {
            path: "/admin-dashboard/messages",
            element: <Messages />,
          },
          {
            path:"/admin-dashboard/doctors",
            element: <Doctors/>
          },
          {
            path: "/admin-dashboard/clinic",
            element: <Clinic />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
