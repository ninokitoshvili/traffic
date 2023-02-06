import "./formInput.css";
import { useState } from "react";

const FormInput = (props) => {
    return (
        <div className="formInput">
            {/* <label >Username</label> */}
            {/* <input placeholder={props.placeholder} onChange={e=>props.setUsername(e.target.value)}/> */}
            {/* <input placeholder={props.placeholder} ref={props.refer} /> */}
            <input name={props.name} placeholder={props.placeholder}  />
        </div>
    );
};

export default FormInput;