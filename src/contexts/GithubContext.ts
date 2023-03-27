import { ReactNode } from 'react'
import { createContext } from 'use-context-selector'

interface GithubContextProviderProps {
    children: ReactNode
}

export const GithubContext = createContext({})

export function GithubProvider({children}: GithubContextProviderProps) {
    return (

    )
}