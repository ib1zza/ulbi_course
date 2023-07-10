import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import s from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
    const {
        className,
        children,
        theme,
        ...rest
    } = props;
    console.log(theme, s[theme], s);
    return (
        <button
            type="button"
            className={classNames(s.Button, {}, [className, s[theme]])}
            {...rest}
        >
            {children}
        </button>
    );
};

export { Button };
