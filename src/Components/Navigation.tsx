import React from 'react';
import { NavLink } from "react-router-dom";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        navList: {
            display: 'flex',
            listStyle: 'none',
            padding: 0,
            margin: 0,
            '& li': {
                margin: '0.5rem 1rem',
                '& a': {
                    textDecoration: 'none',
                    color: '#fff'
                }
            }
        },
        isActive: {
            fontWeight: 'bold'
        }
    }),
);

const Navigation = () => {
    const classes = useStyles();

    return (
        <nav>
            <ul className={classes.navList}>
                <li>
                    <NavLink activeClassName={classes.isActive} exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.isActive} to="/films">Films</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.isActive} to="/series">Series</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.isActive} to="/myList">My List</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;