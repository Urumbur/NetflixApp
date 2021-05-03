import React, { useState } from 'react';
import {Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import Player from './Player';

export type FilmListProps = {
    filmsList: any[];
}

const useStyles = makeStyles({
    root: {
        width: 345,
        height: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    media: {
        height: 195,
        width: '100%'
    },
    cardActionArea: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative'
    },
    cardList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    cardElement: {
        margin: '1rem'
    },
    description: {
        opacity: 0,
        backgroundColor: '#636363',
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        color: '#fff',
        transition: 'all 0.65s',
        '&:hover': {
            opacity: '0.95',
        }
    },
    spacing: {
        padding: '0.5rem'
    },
    bold: {
        fontWeight: 'bold'
    }
});

const MainPage = ({filmsList}: FilmListProps) => {
    const classes = useStyles();
    const [playerOpen, setPlayerOpen]= useState({
        id: 0,
        isOpen: false,
        url: ''
    });

    const handleClose = () => {
        setPlayerOpen({id: 0, isOpen: false, url: ''});
    }
    const handleClick = (id: number, url: string) => {
        if(id === playerOpen.id) return setPlayerOpen({id: 0, isOpen: false, url: ''});
        return setPlayerOpen({id, isOpen: true, url});
    }

    const descriptionLength = (text: string) => {
        if(text.length > 200) return `${text.substring(0,450)} ...`;
        return text;
    }

    return (
        <div>
            <ul className={classes.cardList}>
                {filmsList.map(el => {
                    return(
                        <li className={classes.cardElement} key={el.id.attributes["im:id"]}>
                            <Card className={classes.root} onClick={() => handleClick(el.id.attributes["im:id"], el.link[1].attributes.href)}>
                                <CardActionArea className={classes.cardActionArea}>
                                    <CardMedia
                                        className={classes.media}
                                        image={el["im:image"][2].label}
                                        title={el["im:name"].label}
                                    />
                                    <CardContent>
                                        <Typography className={classes.bold} gutterBottom variant="h5" component="h2">
                                            {el["im:name"].label}
                                        </Typography>
                                    </CardContent>
                                    <div className={classes.description}>
                                        <Typography className={classes.spacing} variant="h5" component="h3">
                                            {el["im:name"].label}
                                        </Typography>
                                        <Typography className={classes.spacing} variant="body2" component="p">
                                            {descriptionLength(el.summary.label)}
                                        </Typography>
                                    </div>
                                </CardActionArea>
                            </Card>
                        </li>
                    )
                })}
            </ul>
            <Player playerOpen={playerOpen} handleClose={handleClose} />
        </div>
    );
}

export default MainPage;