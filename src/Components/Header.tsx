import React from 'react';
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
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
        <Box className={classes.headerWrapper}>
            <Box className={classes.navigation}>
                <img src={netflixLogo} alt="Netflix logo" />
                <Navigation />
            </Box>
            <SearchBar searchFilter={searchFilter} />
        </Box>
    );
}

export default Header;