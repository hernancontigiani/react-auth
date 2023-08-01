import { createContext } from 'react';

const defaultValue = {
    auth: false
}

export const AuthContext = createContext(defaultValue);

export function initialize() {
    const storedIsAuthenticated = sessionStorage.getItem('isAuthenticated');
    console.log(`storedIsAuthenticated: ${storedIsAuthenticated}`)
    return { auth: !!storedIsAuthenticated };
}
