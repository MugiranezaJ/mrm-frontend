import React from "react";
import { connect } from "react-redux";
import { usersAction } from "../../redux/actions/user.action";

function UsersList(props){
    React.useEffect(() => {
        props.fetchUsers("\"" +localStorage.getItem("user")+"\"")
    }, []);
    console.log(props)
    return (
        <div>List of users</div>
    )
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
