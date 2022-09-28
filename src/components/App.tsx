import { lazy, Suspense, useContext, useState } from "react"
import { Link } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import { classNames } from "../helpers/classNames"
import { Theme, ThemeContext } from "../theme/ThemeContext"
import { useTheme } from "../theme/useTheme"

const AboutPageAsync = lazy(() => import('./AboutPage/AboutPage'))
const MainPageAsync = lazy(() => import('./MainPage/MainPage'))


export const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button
                onClick={toggleTheme}
            >
                Change Theme
            </button>
            <Link to={'/'}>
                Main
            </Link>
            <Link to={'/about'}>
                About
            </Link>
            <Suspense fallback={<div>LOADING</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />} />
                    <Route path={'/about'} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}