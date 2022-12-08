import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { usersAction } from "../../redux/actions/user.action";
import Footer from "./Footer";

function UsersList(props){
    React.useEffect(() => {
        props.fetchUsers(localStorage.getItem("user"))
    }, []);
    if(!props.authenticated){
        return <Navigate replace to="/login" />;
    }else{
        return (
            <>
                <div className="pages-container">
                    <div className="list-container">
                        <h2>Users</h2>
                        {props.users?.users && Object.entries(props.users.users).map((([email, user], index) => {
                            return(
                                <div key={index} className="list-item">
                                    <div>
                                        <img src="https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg" className="list-item-image"/>
                                    </div>
                                    <div className="list-item-content">
                                        <h4>{user.firstName + " " + user.lastName}</h4>
                                        <p>#{user.role}</p>
                                    </div>
                                </div>
                            )
                        }))}
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
      fetchUsers: (values) => {
        dispatch(usersAction(values))
      },
    }
  }

const mapStateToProps = ({ users }) =>({
    users
});

export {UsersList};
export default connect(mapStateToProps, mapDispatchToProps )(UsersList);
