import React, { useState } from "react";
import { classNames } from "shared/lib/classNames.ts/classNames";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitch } from "widgets/ThemeSwitch";
import cls from './Sidebar.module.scss'


interface ISidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: ISidebarProps) => {

    const [collapsed, setCollapsed] = useState(false)

    const onTogle = () => {
        setCollapsed(e => !e)
    }

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <div>
                <button onClick={onTogle}>toggle</button>
            </div>

            <div className={cls.switchers}>
                <ThemeSwitch />
                <LangSwitcher />
            </div>
        </div>
    )
}