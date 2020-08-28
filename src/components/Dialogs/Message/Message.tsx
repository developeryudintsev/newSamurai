import React from "react";
import m from './Dialogs.module.css';

type propsType={
    Message:string
}
function Messagedo(props:propsType) {
    return (
            <div className={m.messages}>{props.Message}</div>
    );
}

export default Messagedo;