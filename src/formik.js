import { useState } from 'react'
import { Formik } from 'formik';
import './styles/form.css';
import { basicSchema } from './schemas/formik_form';
import { database } from './firebase';
import Modal from "./components/modal/Modal";

export default function FormikForm() {
    
    const [ modalOpen , setModalOpen ] = useState(false);
    
    async function sendData(data, setSubmitting){
        setSubmitting(true);
        await database.collection('responses').doc(`${data.form_id}_${data.fullname}_${data.batch}_${data.branch}`).set(data)
    // .then(alert('Response submitted!'))
    .then(console.log(data))
    .catch((e)=>alert(e));}
    return (
        <Formik
            initialValues={{ form_id: '01', fullname: '', email: '', batch: '', branch: '', github: '', message: '' }}
            onSubmit={(values, { resetForm, setSubmitting }) => {
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
                setModalOpen(true);
                resetForm({values: ''});
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
                        value={values.fullname}
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
                    <select
                        type="text"
                        name="batch"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.batch}
                        placeholder="Batch"
                    >
                        <option value=''>Select Batch</option>
                        <option value='2019-23'>2019-23</option>
                        <option value='2020-24'>2020-24</option>
                        <option value='2021-25'>2021-25</option>
                        <option value='2022-26'>2022-26</option>
                    </select>
                    <p className="error-msg">{errors.batch && touched.batch && errors.batch}</p>
                    {/* Branch */}
                    <select
                        type="text"
                        name="branch"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.branch}
                        placeholder="Branch"
                    >
                        <option value=''>Select Branch</option>
                        <option value='CS'>CS</option>
                        <option value='IT'>IT</option>
                        <option value='AIML'>AIML</option>
                        <option value='ENTC'>ENTC</option>
                        <option value='RNA'>RNA</option>
                        <option value='MECH'>MECH</option>
                        <option value='CIVIL'>CIVIL</option>
                    </select>
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
                    <p className='github-register'>Don't have a GitHub account? Create one now! <a href={"https://www.github.com/"} rel="noreferrer" target={"_blank"}>Click here</a></p>
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

                    {modalOpen && <Modal setModalOpen={setModalOpen}/>}

                </form>
            )}
        </Formik>
    );
}
