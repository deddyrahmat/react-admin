import { memo } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

// configs
import { FormikControl } from "./../../../configs";

function CreateFlightStandardMarkup() {
    const initialValues = {
        preset_name: "",
        description: "",
        password: "",
    };

    const validationSchema = Yup.object({
        preset_name: Yup.string().min(3, "Mininum 3 characters").required("Required"),
        description: Yup.string(),
        password: Yup.string()
            .min(8, "Mininum 8 characters")
            .required("Required"),
    });

    const onSubmit = async (values) => {
        console.log("values", values);
    };
    return (
        <div className="w-100 ">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {(formik) => {
                    return (
                        <Form>
                            <div className="card">
                                <div className="card-body">
                                    <FormikControl
                                        control="input"
                                        type="text"
                                        label="Preset Name*"
                                        name="preset_name"
                                        error={
                                            formik.errors.preset_name
                                                ? formik.touched.preset_name
                                                    ? formik.errors.preset_name
                                                    : ""
                                                : ""
                                        }
                                    />
                                    <FormikControl
                                        control="textarea"
                                        label="Description"
                                        name="description"
                                        error={
                                            formik.errors.description
                                                ? formik.touched.description
                                                    ? formik.errors.description
                                                    : ""
                                                : ""
                                        }
                                    />
                                </div>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}

export default memo(CreateFlightStandardMarkup);
