export const logUser = async (email: string, password: string) => {
    const res = await fetch('http://localhost:3000/auth/sign-in',
        {
            method: "POST",
            mode: 'cors',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify({ email, password }),
            credentials: 'include'
        }
    )
    const data = res.json()
    return data
}

export const signUser = async (email: string, password: string) => {
    const res = await fetch('http://localhost:3000/auth/sign-in',
        {
            method: "POST",
            mode: 'cors',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify({ email, password }),
            credentials: 'include'
        }
    )
    const data = res.json()
    return data
}

export const logUserOut = async () => {
    const res = await fetch('http://localhost:3000/auth/log-out',
        {
            method: "POST",
            mode: 'cors',
            headers: { 'Content-Type': "application/json" },
            credentials: 'include'
        })
    const data = res.json()
    return data
}

export const getUser = async () => {
    const res = await fetch('http://localhost:3000/user',
        {
            method: "GET",
            mode: 'cors',
            headers: { 'Content-Type': "application/json" },
            credentials: 'include'
        }
    )
    const data = res.json()
    return data
}