import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";


interface NavbarProps {
    className?: string,
}
const Navbar = ({className} : NavbarProps) => {
    return (
        <div className={classNames(s.Navbar, {}, [className])}>
            {/*<ThemeSwitcher/>*/}
           <div className={s.links}>
               <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"} className={s.mainLink}>About</AppLink>
               <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>Main</AppLink>
           </div>


        </div>
    );
};

export {Navbar};
