import * as Yup from "yup";

const BasicFormSchema = Yup.object().shape({
    newPostText: Yup.string()
        .min(5, "Must be longer than 5 characters")
        .required("Required")
});
export default BasicFormSchema;
