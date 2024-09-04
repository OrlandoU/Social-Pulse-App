import { Button, Checkbox, FormControlLabel } from "@mui/material";
import React, { useContext, useState } from "react";
import Input from "./Input";
import { logUser } from "../functions/user";
import { UserContext } from "../assets/Contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function AuthCard() {
    const { setUser } = useContext(UserContext)
    const [type, setType] = useState('Sign in')
    const navigate = useNavigate()

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const form = e.target
        console.log(form.email.value, form.password.value)
        const res = await logUser(form.email.value, form.password.value)
        setUser(res)
        navigate('/')
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <div className=" border-[1px] flex flex-col p-8 gap-4 rounded-xl shadow max-w-[450px] border-stone-300">
                <h1 className="text-black text-4xl font-semibold mb-2 tracking-wide ">{type}</h1>
                <Input label='Email' placeholder='your@email.com' type='email' name='email' />
                <Input label='Password' placeholder='••••••' type="password" name="password" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                <Button type="submit" size="large" variant="contained" className="font-semibold">Sign in</Button>
            </div>
        </form>
    )
}