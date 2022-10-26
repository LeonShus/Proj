import React, { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames.ts/classNames";
import cls from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear'
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className: string;
    theme?: ThemeButton
}

export const Button: FC<IButtonProps> = (props) => {

    const {
        className,
        children,
        theme,
        ...otherProps
    } = props

    return (
        <button
            className={classNames(cls.Button, {[cls[theme]]: theme}, [className])}
            {...otherProps}
        >
            {children}
        </button>
    )
}