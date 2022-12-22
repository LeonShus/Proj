import React from "react"
import { useTheme } from "app/providers/ThemeProvider"
import './styles/index.scss'
import { classNames } from "shared/lib/classNames.ts/classNames"
import { AppRouter } from "app/providers/router"
import { Navbar } from "widgets/Navbar"
import { Sidebar } from "widgets/Sidebar"
import { Suspense, useEffect } from "react"
import { Loader } from "widgets/Loader"




export const App = () => {
 
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<Loader />}>
                <Navbar />

                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}