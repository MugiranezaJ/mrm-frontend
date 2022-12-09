import React from 'react'
import { connect } from 'react-redux';
import '../../assets/styles/style.css';
import Button from '../Button';
import InputField from '../InputField';
import Select from '../Select';
import { Link, Navigate } from 'react-router-dom'
import { registerAction } from '../../redux/actions/signup-action';
import SneakBar from '../SneakBar';
import Footer from './Footer';


function Register(props){

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
            <>
                <div className="pages-container">
                    
                    <div className='form-box'>
                        <div className='form-title'>Sign Up</div>
                        <form 
                            className='register-form'
                            method='post'
                            onSubmit={e => {
                                e.preventDefault()
                                const userData = {}
                                const formData = new FormData(e.currentTarget)
                                for (let [key, value] of formData.entries()) {
                                    userData[key] = value
                                }
                                props.doRegister(userData)
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

                            <div className='form-item-box-1'>
                                <Select
                                    name={"Gender"}
                                    label={"Select Gender"}
                                    className={"select"}
                                    options={['Male', 'Female']}
                                />

                                <Select
                                    name={"role"}
                                    label={"Select User Role"}
                                    className={"select"}
                                    options={[
                                                'patient',
                                                'admin',
                                                'pharmacist',
                                                'physicist'
                                            ]}
                                />

                            </div>

                            <InputField
                                type={"number"}
                                name={"age"}
                                label={"Age"}
                                className={"input"}
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
                                Already have an account?
                                &nbsp;<Link to={'/login'}>Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer/>
            </>
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