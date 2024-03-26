'use client'
import { exec } from "child_process"
import { ThemeProvider } from "next-themes"
export function Providers({children}: {children: React.ReactNode}){
    return <ThemeProvider attribute="class" defaultTheme="system"
    enableSystem>{children}</ThemeProvider>
}