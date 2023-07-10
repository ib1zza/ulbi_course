import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import s from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
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
        <Link to={to} className={classNames(s.AppLink, { theme }, [className, s[theme]])} {...rest}>
            {children}
        </Link>
    );
};

export { AppLink };
