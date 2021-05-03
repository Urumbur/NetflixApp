import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./Components/Header";
import MainPage from "./Components/MainPage";
import Films from "./Components/Films";
import Series from "./Components/Series";
import MyList from "./Components/MyList";
import {fetchData} from "./Services/fetchData";

const App = () => {
    const [filmsList, setFilmsList] = useState([]);
    const [filterList, setFilterList] = useState([]);

    fetchData.then(res => setFilmsList(res.feed.entry));

    const searchFilter = (e: any) => {
        const write = e.target.value
        const filterFilms = filmsList.filter((el: any) => {
            return el["im:name"].label.toLowerCase().indexOf(write.toLowerCase()) !== -1;
        });
        setFilterList(filterFilms);
    };

    useEffect(() => {
        setFilterList(filmsList)
    },[filmsList])

  return (
    <div>
        <Router>
            <Header searchFilter={searchFilter} />
            <Route exact path="/">
                <MainPage filmsList={filterList} />
            </Route>
            <Route path="/films">
                <Films />
            </Route>
            <Route path="/series">
                <Series />
            </Route>
            <Route path="/myList">
                <MyList />
            </Route>
        </Router>
    </div>
  );
}

export default App;
