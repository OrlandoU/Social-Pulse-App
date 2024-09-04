import { createContext } from "react";

export interface UserInterface extends Document {
    _id: string,
    first_name: string,
    last_name: string,
    email: string,
    password_hash: string,
    created_at: Date,
    updated_at: Date
}

interface UserContextI {
    user: UserInterface | null,
    setUser: React.Dispatch<React.SetStateAction<UserInterface | null>>,
}

export const UserContext = createContext<UserContextI>({ user: null, setUser: () => { } })