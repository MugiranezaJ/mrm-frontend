import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import Table from "../Table";
import Footer from "./Footer";

function Dashboard(props){
  const role = localStorage.getItem("role")
    const patientData = {
      link: "https://raw.githubusercontent.com/MugiranezaJ/mrm-frontend/dashboard/src/data/Patient_illnesses_from_2000-2002.xlsx",
      name: "Patient"
    }
    const physicianData = {
      link: "https://raw.githubusercontent.com/MugiranezaJ/mrm-frontend/dashboard/src/data/Physicians missions 2000 - 2002.xlsx",
      name: "Physician"
    }
    const pharmacistData = {
      link:"https://github.com/MugiranezaJ/mrm-frontend/blob/715bd9262f14178200011171cddb4dc750373a4c/src/data/Most%20bough%20drugs%202000%20-%202002.xlsx",
      name: "Pharmacist"
    }

    if(!props.authenticated){
      return <Navigate replace to="/login" />;
    }else{
      return(
          <>
            <div className="pages-container">
                {["patient","admin"].includes(role) && <Table tableData={patientData}/>}
                {["physician", "admin"].includes(role) && <Table tableData={physicianData}/>}
                {["pharmacist", "admin"].includes(role) && <Table tableData={pharmacistData}/>}
            </div>
            <Footer/>
          </>
      )
    }
}

const mapStateToProps = ({ login, register, user }) =>({
    login,
    register,
    user
});

export {Dashboard};
export default connect( mapStateToProps )(Dashboard);
