import React from 'react';
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import netflixLogo from '../Static/Images/netflix.png'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        headerWrapper: {
            display: 'flex',
            alignItems: 'center',
            margin: '1rem 1rem',
            justifyContent: 'space-between'
        },
        navigation: {
            display: 'flex',
            alignItems: 'center',
        }
    }),
);

const Header = ({searchFilter}: any) => {
    const classes = useStyles();

    return (
        <div className={classes.headerWrapper}>
            <div className={classes.navigation}>
                <img src={netflixLogo} alt="Netflix logo" />
                <Navigation />
            </div>
            <SearchBar searchFilter={searchFilter} />
        </div>
    );
}

export default Header;