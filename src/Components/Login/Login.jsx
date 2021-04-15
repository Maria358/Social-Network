import { Formik, Form, Field } from 'formik';
import BasicFormSchema from "../FormControls/formControlLogin";
import s from "../FormControls/formControl.module.css";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return <div>
        <Formik
            initialValues={{
                email: "",
                password: "",
                rememberMe: '',
            }}
            validationSchema={BasicFormSchema}
            onSubmit={values => {
               /* setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                }, 500);*/
                props.login(values.email,values.password, values.rememberMe)
                if (props.isAuth){
                    //this.props.history.push("/Profile") - does not work
                    return <Redirect to={'/Profile'}/>
                }
            }}

            render={(props) => (
                <Form>
                    <div>
                        <Field placeholder='Email' name='email' type='email'/>
                        {props.errors.email &&
                        props.touched.email && <div className={s.fieldError}>{props.errors.email}</div>}
                    </div>
                    <div>
                        <Field placeholder='Password' name='password' type="password"/>
                        {props.errors.password &&
                        props.touched.password && <div className={s.fieldError}>{props.errors.password}</div>}
                    </div>
                    <div>
                        <Field type='checkbox' name='rememberMe'/> Remember me
                    </div>
                    <div>
                        <button type='submit'>Login</button>
                    </div>
                </Form>
            )}
        />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(LoginForm)
