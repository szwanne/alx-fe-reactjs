// src/App.jsx
import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm.jsx";
import FormikForm from "./components/formikForm.jsx";

export default function App() {
  const [tab, setTab] = useState("controlled");

  return (
    <div style={{ maxWidth: 920, margin: "40px auto", padding: 20 }}>
      <h1 style={{ marginBottom: 16 }}>
        React Form Handling — Controlled vs Formik
      </h1>

      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        <button
          onClick={() => setTab("controlled")}
          style={tab === "controlled" ? activeBtn : idleBtn}
        >
          Controlled
        </button>
        <button
          onClick={() => setTab("formik")}
          style={tab === "formik" ? activeBtn : idleBtn}
        >
          Formik + Yup
        </button>
      </div>

      {tab === "controlled" ? <RegistrationForm /> : <FormikForm />}
    </div>
  );
}

const baseBtn = {
  padding: "8px 12px",
  borderRadius: 10,
  border: "1px solid #ddd",
  cursor: "pointer",
  background: "#fff",
};
const activeBtn = { ...baseBtn, background: "#111827", color: "#fff" };
const idleBtn = baseBtn;
