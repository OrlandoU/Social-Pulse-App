import { OutlinedInput } from "@mui/material";
import React, { useState } from "react";

export default function Input(props: {label: string, placeholder: string, type: string, name: string}) : React.JSX.Element{
    const [value, setValue] = useState<any>()

    const handleChange = (e: any) => {
        setValue(e.target.value)
    }

    return(
        <div className="flex flex-col gap-2">
            <label htmlFor="">{props.label}</label>
            <OutlinedInput  placeholder={props.placeholder} type={props.type} value={value} onChange={handleChange} name={props.name}/>
        </div>
    )
}