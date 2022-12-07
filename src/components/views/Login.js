import React from 'react'
import { connect } from 'react-redux';
import '../../assets/styles/style.css';
import Button from '../Button';
import InputField from '../InputField';
import { Link } from 'react-router-dom'
import { loginAction } from '../../redux/actions/login-action';
import SneakBar from '../SneakBar';

function Login(props){  

    // if(props.login.success){
    //     return window.location.replace("/")
    // }
    return (
        
        <div className="container">
            
            <div className='form-box'>
                <div className='form-title'>Log In</div>
                <form 
                    method='post'
                    onSubmit={e => {
                        e.preventDefault()
                        const credentials = {}
                        const formData = new FormData(e.currentTarget)
                        for (let [key, value] of formData.entries()) {
                            console.log(key, value);
                            credentials[key] = value
                        }
                        props.doLogin(credentials)
                        console.log(credentials)
                    }}
                >
                    <InputField
                        type={"text"}
                        name={"email"}
                        label={"Email"}
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
                        value={"Login"}
                        className={"form-button"}
                    />
                    {props.login.snackBarMessage && (props.login.success ?
                        (<SneakBar
                            message={props.login.message}
                            className={"sneakbar"}
                            type={"success"}
                        />
                        ):(
                            <SneakBar
                                message={props.login.error}
                                className={"sneakbar"}
                                type={"error"}
                            />
                        ))
                    }
                    <div>
                        Don't have an account? <Link to={'/register'}>Register</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
      doLogin: (values) => {
        dispatch(loginAction(values))
      }
    }
  }

const mapStateToProps = ({ login }) =>({
    login
});

export {Login};
export default connect(mapStateToProps, mapDispatchToProps )(Login);