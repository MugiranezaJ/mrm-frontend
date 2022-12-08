import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { userAction } from "../../redux/actions/user.action";
import Table from "../Table";

function Dashboard(props){
  const role = localStorage.getItem("role")
    console.log("dashboard................")
    const patientData = {
      link: "https://raw.githubusercontent.com/MugiranezaJ/mrm-frontend/dashboard/src/data/Patient_illnesses_from_2000-2002.xlsx",
      name: "Patient"
    }
    const physicianData = {
      link: "https://raw.githubusercontent.com/MugiranezaJ/mrm-frontend/dashboard/src/data/Patient_illnesses_from_2000-2002.xlsx",
      name: "Physician"
    }
    const pharmacistData = {
      link:"https://raw.githubusercontent.com/MugiranezaJ/mrm-frontend/dashboard/src/data/Patient_illnesses_from_2000-2002.xlsx",
      name: "Pharmacist"
    }
    console.log(props)

    if(!props.authenticated){
      return <Navigate replace to="/login" />;
    }else{
      console.log(role)
      return(
          <div>
            Hello
              {["patient","admin"].includes(role) && <Table tableData={patientData}/>}
              {["physician", "admin"].includes(role) && <Table tableData={physicianData}/>}
              {["pharmacist", "admin"].includes(role) && <Table tableData={pharmacistData}/>}
          </div>
      )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      // getUserInfo: (values) => {
      //   dispatch(userAction(values))
      // },
      fetchUsers: (values) => {
        // dispatch(loginAction(values))
      }
    }
  }

const mapStateToProps = ({ login, register, user }) =>({
    login,
    register,
    user
});

export {Dashboard};
export default connect(mapStateToProps, mapDispatchToProps )(Dashboard);
