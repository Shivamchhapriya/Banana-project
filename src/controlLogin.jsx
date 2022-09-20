import React from "react";

const ControlLogin= ({name,type,label,value,error,onChange})  => {

    return ( 
        <>  
            {/* <h1 className="bg-danger">login</h1> */}

            <div class="form-group mt-2">
                        <label className="p-2">{label}</label>
                         <input 
                         type={type}
                         name={name}
                         defaultvalue={value}
                         onChange={onChange}
                         class="form-control"
                        //  id={props.name} 
                        //  placeholder={name}
                        />
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </>
     );
}

export default ControlLogin;