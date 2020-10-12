import React from "react";
import { useFormik } from "formik";
import RenderProps from "../../lib/renderProps";

export default function Settings() {
  const formik = useFormik({
    initialValues: {
      name: "",
      avatar: "",
    },
    onSubmit: (e) => {
      console.log(e);
    },
  });
  return (
    <div>
      <img src={formik?.values?.avatar?.path} />
      <form onSubmit={formik.handleSubmit}>
        <input
          type="file"
          name="avatar"
          onChange={(e) => {
            formik.setFieldValue("avatar", e.currentTarget.files[0]);
          }}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
