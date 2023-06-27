import {classNames} from "shared/lib/classNames/classNames";
import s from "./AppLink.module.scss"   ;
import {Link, LinkProps} from "react-router-dom";
import {PropsWithChildren} from "react";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme,

}

const AppLink = (props: PropsWithChildren<AppLinkProps>) => {
    const {
        to,
        className,
        theme = AppLinkTheme.PRIMARY,
        children,
        ...rest
    } = props;
    return (
        <Link to={to} className={classNames(s.AppLink, {theme}, [className, s[theme]])} {...rest} >
            {props.children}
        </Link>
    );
};

export {AppLink};