import { Theme, useTheme } from 'app/providers/ThemeProvider'
import Ract from 'react'
import { classNames } from 'shared/lib/classNames.ts/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import cls from './ThemeSwitcher.module.scss'
import LightTheme from 'shared/assets/icons/lightTheme.svg'
import DarkTheme from 'shared/assets/icons/darkTheme.svg'

interface IThemeSwitchProps {
    className?: string
}

export const ThemeSwitcher = ({className}: IThemeSwitchProps) => {

    const {theme, toggleTheme} = useTheme()

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitch, {}, [className])}
            theme={ThemeButton.CLEAR}
        >
            {theme === Theme.DARK ? <DarkTheme /> : <LightTheme />}
        </Button>
    )
}