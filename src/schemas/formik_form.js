import * as yup from 'yup';

export const techtalk = yup.object().shape({
    fullname: yup.string().required('*Required'),
    email: yup.string().email('*Please enter a valid email').required('*Required'),
    batch: yup.string().required('*Required'),
    branch: yup.string().required('*Required'),
    github: yup.string(),
    message: yup.string()
});

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const join_us = yup.object().shape({
    fullname: yup.string().required('*Required'),
    email: yup.string().email('*Please enter a valid email').required('*Required'),
    phone: yup.string().matches(phoneRegExp, '*Invalid Phone Number').required('*Required'),
    social: yup.string().required('*Required')
});