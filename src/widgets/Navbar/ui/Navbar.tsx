import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames.ts/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { ThemeSwitch } from "widgets/ThemeSwitch";
import cls from './Navbar.module.scss'


interface INavbarProps {
    className?: string
}

export const Navbar = ({ className }: INavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            
            <ThemeSwitch  />

            <div className={cls.links}>
                <AppLink to={'/'} className={cls.mailLink}>
                    Main
                </AppLink>
                <AppLink to={'/about'}>
                    About
                </AppLink>
            </div>

        </div>
    )
}

