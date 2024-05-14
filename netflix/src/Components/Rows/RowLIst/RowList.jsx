import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/requests";
const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORGINALS"
        fetchUrl={requests.fetchNetflixOrginals}
        isLargeRow={true}
      />

      <Row title="Trending" fetchUrl={requests.fetchTrending} />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />

      <Row title="Action" fetchUrl={requests.fetchActionMovies} />

      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />

      <Row title="Horor" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

      <Row title="Tv Show" fetchUrl={requests.fetchTvShow} />
    </>
  );
};

export default RowList;
