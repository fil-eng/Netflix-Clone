import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/Requests";
function RowList() {
  return (
    <>
      <Row
        title="NETFLIX ORGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}/>
      <Row title="Trending Now " fetchUrl={requests.fetchTrading} />
      <Row title="TopRated Movies  " fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies  " fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movie  " fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies  " fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies  " fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Tv Show  " fetchUrl={requests.fetchTvShow} />
      <Row
        title="Documentary Movies  "
        fetchUrl={requests.fetchDocumentaryMovies}
      />
    </>
  );
}

export default RowList;
