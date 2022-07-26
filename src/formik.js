import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './styles/form.css';

export default function FormikForm() {
    return (
        <Formik
            initialValues={{ name: '', email: '', batch: '', branch: '', github: '', message: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form className='form-container'>
                    {/* Full name */}
                    <Field classname='input-field' type="text" name="name" placeholder="Full name" />
                    <ErrorMessage name="name" component="div" />
                    {/* Email */}
                    <Field classname='input-field' type="email" name="email" placeholder="Email" />
                    <ErrorMessage name="email" component="div" />
                    {/* Batch */}
                    <div className='branch-batch-container'>
                        <Field id='branch-batch-left' classname='input-field' type="text" name="batch" placeholder="Batch" />
                        <ErrorMessage name="batch" component="div" />
                        {/* Branch */}
                        <Field id='branch-batch-right' classname='input-field' type="text" name="branch" placeholder="Branch" />
                        <ErrorMessage name="branch" component="div" />
                    </div>
                    {/* GitHub */}
                    <Field classname='input-field' type="text" name="github" placeholder="Link to your GitHub profile" />
                    <ErrorMessage name="github" component="div" />
                    {/* Message */}
                    <Field as="textarea" classname='input-field' type="text" name="message" placeholder="Got questions or suggestions? Put them here!" />
                    <ErrorMessage name="message" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    )
}
