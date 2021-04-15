import * as Yup from "yup";

const BasicFormSchema = Yup.object().shape({
    newMessageBody: Yup.string()
        .required("Required"),

});
export default BasicFormSchema;