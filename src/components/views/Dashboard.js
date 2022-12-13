import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import Table from "../Table";
import Footer from "./Footer";

function Dashboard(props){
  const role = localStorage.getItem("role")
    const patientData = {
      link: "https://raw.githubusercontent.com/MugiranezaJ/mrm-frontend/main/src/data/Patient_illnesses_from_2000-2002.xlsx",
      name: "Patient"
    }
    const physicianData = {
      link: "https://raw.githubusercontent.com/MugiranezaJ/mrm-frontend/main/src/data/Physicians_missions_2000-2002.xlsx",
      name: "Physician"
    }
    const pharmacistData = {
      link:"https://raw.githubusercontent.com/MugiranezaJ/mrm-frontend/main/src/data/Most_bough_drugs_2000-2002.xlsx",
      name: "Pharmacist"
    }

    if(!props.authenticated){
      return <Navigate replace to="/login" />;
    }else{
      return(
          <>
            <div className="pages-container">
                {["Patient","Admin"].includes(role) && <Table tableData={patientData}/>}
                {["Physician", "Admin"].includes(role) && <Table tableData={physicianData}/>}
                {["Pharmacist", "Admin"].includes(role) && <Table tableData={pharmacistData}/>}
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
