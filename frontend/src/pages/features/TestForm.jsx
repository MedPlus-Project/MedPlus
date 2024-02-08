import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Formik, Form, useField, Field } from "formik";

import { TextInputWithLabel as TextInput } from "../../components/FormikElements";
import { TextAreaWithLabel as TextArea } from "../../components/FormikElements";
import { SelectWithLabel } from "../../components/FormikElements";

import BackendError from "../../components/backendError";
import { urlSlug } from "../../utils/urlSlug";
import { postMedicalData } from "../../services/medicalService";
import MediSuggestions from "../../components/MediSuggestions/MediSuggestions";

const TestForm = () => {
  const navigate = useNavigate();
  const [resultData, setResultData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await postMedicalData(values);
      setResultData(response.data);
    } catch (error) {
      setError(error);
    }
    setSubmitting(false);
  };

  return (
    <div className="mt-50 grid h-full grid-cols-2  gap-4">
      <div className="mt-50 grid place-items-center p-20">
        <Formik
          initialValues={{
            medicalData: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="mt-3 flex w-full flex-col space-y-6">
              <TextInput
                label="Age :"
                name="age"
                type="number"
                placeholder="Enter age"
                inputMode="numeric"
              />

              <TextArea
                label="Medical Data :"
                name="medicalData"
                type="text"
                placeholder="Enter medical data"
                className=" h-60 resize-none rounded-lg border-2 border-gray-300 px-4 py-3 focus:outline-none"
              />

              <SelectWithLabel label="Select Report Type:" name="reportType">
                <option value="" disabled>
                  Select Report Type
                </option>
                <option value="blood">Blood Report</option>
                <option value="sugar">Sugar Report</option>
                <option value="bloodPressure">Blood Pressure Report</option>
                <option value="fullBody">Full Body Report</option>
              </SelectWithLabel>

              <div className="mt-3 flex">
                <button
                  className="w-full rounded-lg border-none bg-teal p-2 outline-none"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <p className="text-sm font-semibold uppercase text-white">
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </p>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div>
        {resultData && <MediSuggestions resultData={resultData} />}
        {error && <BackendError error={error} />}
      </div>
    </div>
  );
};

export default TestForm;
