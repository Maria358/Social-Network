import * as Yup from "yup";

const BasicFormSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
    password: Yup.string()
        .min(8, '"Must be longer than 8 characters"')
        .max(30, 'Too Long!')
        .required('Required')
});
export default BasicFormSchema;