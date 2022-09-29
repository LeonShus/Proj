import { Suspense } from "react"
import { Link } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import { useTheme } from "app/providers/ThemeProvider"
import './styles/index.scss'
import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { classNames } from "shared/lib/classNames.ts/classNames"





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
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/about'} element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    )
}