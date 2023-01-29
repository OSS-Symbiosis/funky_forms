import { useState } from 'react'
import { Formik } from 'formik';
import { join_us } from '../schemas/formik_form';
import { database } from '../firebase';
import Modal from "./modal/Modal";
import './../styles/form.css';
import firebase from '../firebase';

const getTimeString = () => {
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1 // months start from 0
	const day = date.getDay();
	const hour = date.getHours();
	const minutes = date.getMinutes();
	console.log(`${year}-${month}-${day} ${hour}:${minutes}`);
	return `${year}-${month}-${day} ${hour}:${minutes}`;
}

export default function TechTalkForm() {

	const [modalOpen, setModalOpen] = useState(false);
	const id = firebase.firestore().collection('join_us').doc().id
	async function sendData(data, setSubmitting) {
		setSubmitting(true);
		await database.collection('responses').doc(`${data.form_id}_${data.fullname}_${data.batch}_${data.branch}`).set(data)
			// .then(alert('Response submitted!'))
			.then(console.log(data))
			.catch((e) => alert(e));
	}
	return (
		<Formik
			initialValues={{ form_id: id, fullname: '', email: '', phone: '', social: '', submittedAt: getTimeString() }}
			onSubmit={(values, { resetForm, setSubmitting }) => {
				const data = {
					form_id: values.form_id,
					fullname: values.fullname,
					email: values.email,
					batch: values.batch,
					branch: values.branch,
					social: values.social,
					message: values.message,
					submittedAt: values.submittedAt
				};
				data.submittedAt = getTimeString();
				sendData(data, setSubmitting);
				setModalOpen(true);
				resetForm({ values: '', id: firebase.firestore().collection('join_us').doc().id });
			}}
			validationSchema={join_us}
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
					{/* Email */}
					<input
						type="phone"
						name="phone"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.phone}
						placeholder="Phone Number"
					/>
					<p className="error-msg">{errors.phone && touched.phone && errors.phone}</p>
					{/* Social */}
					<input
						type="text"
						name="social"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.social}
						placeholder="GitHub or LinkedIn Username"
					/>
					<p className="error-msg">{errors.social && touched.social && errors.social}</p>
					<button className="submit-btn" type="submit" disabled={isSubmitting}>
						Submit
					</button>

					{modalOpen && <Modal setModalOpen={setModalOpen} />}

				</form>
			)}
		</Formik>
	);
}
