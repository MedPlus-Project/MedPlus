import SymptomCheckerImg from "../assets/SymptomChecker.png";
import HealthDirectoryImg from "../assets/directory.png";
import LabReportAnalyzerImg from "../assets/LabReportAnalyzer.png";
import HospitalDetailsImg from "../assets/HospitalDetails.png";
import ContactDoctorImg from "../assets/ContactDoctor.png";

import { urlSlug } from "../utils/urlSlug";
import { userRoles } from "../utils/userRoles";

export const navbarTabs = [
  {
    name: "home",
    link: urlSlug.HOME,
    users: [userRoles.USER, userRoles.DOCTOR, userRoles.ADMIN],
  },
  {
    name: "about us",
    link: urlSlug.ABOUT_US,
    users: [userRoles.USER, userRoles.DOCTOR, userRoles.ADMIN],
  },
  {
    name: "features",
    link: urlSlug.FEATURE.BASE,
    users: [userRoles.USER, userRoles.DOCTOR, userRoles.ADMIN],
  },
  {
    name: "contact us",
    link: urlSlug.CONTACT_US,
    users: [userRoles.USER, userRoles.DOCTOR, userRoles.ADMIN],
  },
  {
    name: "admin dashboard",
    link: urlSlug.ADMIN_DASHBOARD.BASE,
    users: [userRoles.ADMIN],
  },
];

export const featuresTabs = [
  {
    name: "health directory",
    img: HealthDirectoryImg,
    link: urlSlug.FEATURE.HEALTH_DIRECTORY,
  },
  {
    name: "symptom checker",
    img: SymptomCheckerImg,
    link: urlSlug.FEATURE.SYMPTOM_CHECKER,
  },
  {
    name: "lab report analyzer",
    img: LabReportAnalyzerImg,
    link: urlSlug.FEATURE.LAB_REPORT_ANALYSER,
  },
  {
    name: "Hospital Details",
    img: HospitalDetailsImg,
    link: urlSlug.FEATURE.HOSPITAL_DETAILS,
  },
  {
    name: "contact Doctor",
    img: ContactDoctorImg,
    link: urlSlug.FEATURE.CONTACT_DOCTOR,
  },
];

export const specialization = [
  {
    choices: [
      { value: "Cardiologist", label: "Cardiologist" },
      { value: "Dermatologist", label: "Dermatologist" },
      // Add more options in the same format
    ],
  },
];

export const adminDashboardTabs = [
  { name: "symptoms", link: urlSlug.ADMIN_DASHBOARD.SYMPTOMS },
  { name: "diseases", link: urlSlug.ADMIN_DASHBOARD.DISEASES },
  { name: "health reports", link: urlSlug.ADMIN_DASHBOARD.HEALTH_REPORTS },
  { name: "clinic", link: urlSlug.ADMIN_DASHBOARD.CLINIC },
  { name: "hospitals", link: urlSlug.ADMIN_DASHBOARD.HOSPITAL },
  { name: "doctors", link: urlSlug.ADMIN_DASHBOARD.DOCTORS },
  { name: "messages", link: urlSlug.ADMIN_DASHBOARD.MESSAGES },
];
