import React from 'react'
import { connect } from 'react-redux';
import '../../assets/styles/style.css';
import Button from '../Button';
import InputField from '../InputField';
import Select from '../Select';
import { Link, Navigate } from 'react-router-dom'
import { registerAction } from '../../redux/actions/signup-action';
import SneakBar from '../SneakBar';
// import '../../assets/css/login.css'
// import '../../assets/css/fields.css'
// import { loginAction } from '../../redux/actions/loginAction';
// import SignInForm from '../LoginForm'

function Register(props){

    console.log(props.register)
    React.useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            props.setAuthenticated(true);
        }
      }, [props.register.success]);

    if(props.authenticated){
        return <Navigate replace to="/dashboard" />;
    }else{
        return (
            
            <div className="container">
                
                <div className='form-box'>
                    <div className='form-title'>Sign Up</div>
                    {/* <SignInForm onSubmit={handleLgin}/> */}
                    <form 
                        method='post'
                        onSubmit={e => {
                            e.preventDefault()
                            const userData = {}
                            const formData = new FormData(e.currentTarget)
                            for (let [key, value] of formData.entries()) {
                                console.log(key, value);
                                userData[key] = value
                            }
                            props.doRegister(userData)
                            console.log(userData)
                        }}
                    >
                        <InputField
                            type={"text"}
                            name={"firstName"}
                            label={"First Name"}
                            className={"input"}
                        />
                        <InputField
                            type={"text"}
                            name={"lastName"}
                            label={"Last Name"}
                            className={"input"}
                        />
                        <InputField
                            type={"text"}
                            name={"email"}
                            label={"Email"}
                            className={"input"}
                        />

                        <Select
                            name={"Gender"}
                            label={"Select Gender"}
                            className={"select"}
                            options={['Male', 'Female']}
                        />

                        <InputField
                            type={"number"}
                            name={"age"}
                            label={"Age"}
                            className={"input"}
                        />

                        <Select
                            name={"role"}
                            label={"Select User Role"}
                            className={"select"}
                            options={['patient', 'admin', 'pharmacist', 'physicist']}
                        />

                        <InputField
                            type={"password"}
                            name={"password"}
                            label={"Password"}
                            className={"input"}
                        />
                        
                        <Button
                            type={"submit"}
                            value={"Sign Up"}
                            className={"form-button"}
                        />
                        {props.register.errorOpen && (
                                <SneakBar
                                    message={props.register.error}
                                    className={"sneakbar"}
                                    type={"error"}
                                />
                            )
                        }
                        <div>
                            Already have an account? <Link to={'/login'}>Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      doRegister: (values) => {
        dispatch(registerAction(values))
      }
    }
  }

const mapStateToProps = ({ register }) =>({
    register
});

export {Register};
export default connect(mapStateToProps, mapDispatchToProps )(Register);