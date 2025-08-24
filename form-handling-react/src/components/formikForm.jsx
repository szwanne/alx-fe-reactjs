import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { registerUser } from "../api";

const schema = Yup.object({
  username: Yup.string().trim().required("Username is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "At least 6 characters")
    .required("Password is required"),
});

export default function FormikForm() {
  return (
    <div style={card}>
      <h2 style={title}>Formik + Yup Registration Form</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={schema}
        onSubmit={async (values, { setSubmitting, setStatus, resetForm }) => {
          setStatus(null);
          try {
            const res = await registerUser(values);
            setStatus({
              type: "success",
              message: `Registered! New user id: ${res.id}`,
            });
            resetForm();
          } catch (err) {
            setStatus({ type: "error", message: err.message });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, status }) => (
          <Form style={form}>
            <label style={label}>
              Username
              <Field name="username">
                {({ field, meta }) => (
                  <>
                    <input
                      {...field}
                      type="text"
                      placeholder="jane_doe"
                      style={input(meta.touched && meta.error)}
                    />
                  </>
                )}
              </Field>
              <ErrorMessage
                name="username"
                component="span"
                style={errorText}
              />
            </label>

            <label style={label}>
              Email
              <Field name="email">
                {({ field, meta }) => (
                  <>
                    <input
                      {...field}
                      type="email"
                      placeholder="jane@example.com"
                      style={input(meta.touched && meta.error)}
                    />
                  </>
                )}
              </Field>
              <ErrorMessage name="email" component="span" style={errorText} />
            </label>

            <label style={label}>
              Password
              <Field name="password">
                {({ field, meta }) => (
                  <>
                    <input
                      {...field}
                      type="password"
                      placeholder="••••••••"
                      style={input(meta.touched && meta.error)}
                    />
                  </>
                )}
              </Field>
              <ErrorMessage
                name="password"
                component="span"
                style={errorText}
              />
            </label>

            <button type="submit" style={button} disabled={isSubmitting}>
              {isSubmitting ? "Submitting…" : "Register"}
            </button>

            {status && (
              <p
                style={
                  status.type === "success" ? successText : errorTextStrong
                }
              >
                {status.message}
              </p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

// same tiny styles as before, duplicated for clarity
const card = {
  maxWidth: 420,
  margin: "0 auto",
  padding: 20,
  border: "1px solid #eee",
  borderRadius: 12,
};
const title = { marginBottom: 12 };
const form = { display: "grid", gap: 12 };
const label = { display: "grid", gap: 6, fontSize: 14, fontWeight: 500 };
const input = (hasError) => ({
  padding: "10px 12px",
  borderRadius: 8,
  border: `1px solid ${hasError ? "#e74c3c" : "#ddd"}`,
  outline: "none",
});
const button = {
  padding: "10px 14px",
  borderRadius: 10,
  border: "none",
  background: "#111827",
  color: "white",
  cursor: "pointer",
};
const errorText = { color: "#e74c3c", fontSize: 12 };
const errorTextStrong = { color: "#e74c3c", fontWeight: 600, marginTop: 8 };
const successText = { color: "#059669", fontWeight: 600, marginTop: 8 };
