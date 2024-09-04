import React, { useEffect } from "react";
import AuthCard from "../../components/AuthCard";
import { useNavigate } from "react-router-dom";

export default function Auth(): React.JSX.Element {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/auth')
    }, [])
    
    return (
        <div>
            <AuthCard />
        </div>
    )
}