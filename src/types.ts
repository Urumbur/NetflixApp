export type FilmListProps = {
    filmsList: any[];
};

export type FilmProps = {
    id: number,
    isOpen: boolean,
    url: string
}

export type PlayerProps = {
    playerOpen: any;
    handleClose: () => void;
}