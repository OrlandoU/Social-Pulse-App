import React, { useContext } from "react"
import { UserContext, UserInterface } from "../../assets/Contexts/UserContext"
import { Button } from "@mui/material"
import { logUserOut } from "../../functions/user"

export default function Home() {
    const context = useContext(UserContext)
    const user = context.user as UserInterface

    return (
        <div>
            <h1>Welcome {user.first_name}</h1>
            <Button type="submit" size="large" variant="contained" onClick={() => {
                logUserOut()
            }}>Logout</Button>
        </div>

    )
}