import * as yup from 'yup';

export const basicSchema = yup.object().shape({
    fullname: yup.string().required('*Required'),
    email: yup.string().email('*Please enter a valid email').required('*Required'),
    batch: yup.string().required('*Required'),
    branch: yup.string().required('*Required'),
    github: yup.string(),
    message: yup.string()
});