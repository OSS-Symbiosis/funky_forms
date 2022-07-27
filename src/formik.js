import React from 'react'
import { Formik } from 'formik';
import './styles/form.css';
import { basicSchema } from './schemas/formik_form';
import { database } from './firebase';

export default function FormikForm() {
    async function sendData(data, setSubmitting){
        setSubmitting(true);
        await database.collection('responses').doc(`${data.form_id}_${data.fullname}_${data.batch}_${data.branch}`).set(data)
    .then(alert('Response submitted!'))
                .catch((e)=>alert(e));}
    return (
        <Formik
            initialValues={{ form_id: '01', fullname: '', email: '', batch: '', branch: '', github: '', message: '' }}
            onSubmit={(values, { setSubmitting }) => {
                const data = {
                    form_id: values.form_id,
                    fullname: values.fullname,
                    email: values.email,
                    batch: values.batch,
                    branch: values.branch,
                    github: values.github,
                    message: values.message
                };
                sendData(data, setSubmitting);
            }}
            validationSchema={basicSchema}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form className='form-container' onSubmit={handleSubmit} autoComplete="off">
                    {/* Name */}
                    <input
                        type="text"
                        name="fullname"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        placeholder="Fullname"
                    />
                    <p className="error-msg">{errors.fullname && touched.fullname && errors.fullname}</p>
                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="Email"
                    />
                    <p className="error-msg">{errors.email && touched.email && errors.email}</p>
                    {/* Batch */}
                    <input
                        type="text"
                        name="batch"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.batch}
                        placeholder="Batch"
                    />
                    <p className="error-msg">{errors.batch && touched.batch && errors.batch}</p>
                    {/* Branch */}
                    <input
                        type="text"
                        name="branch"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.branch}
                        placeholder="Branch"
                    />
                    <p className="error-msg">{errors.branch && touched.branch && errors.branch}</p>
                    {/* Github */}
                    <input
                        type="text"
                        name="github"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.github}
                        placeholder="GitHub username"
                    />
                    <p className="error-msg">{errors.github && touched.github && errors.github}</p>
                    {/* message */}
                    <textarea
                        type="text"
                        name="message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                        placeholder="Got questions or suggestions? Put them here!"
                    />
                    <p className="error-msg">{errors.message && touched.message && errors.message}</p>
                    <button className="submit-btn" type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    );
}
