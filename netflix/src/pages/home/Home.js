import React from "react";
import Hedder from "../../components/hedder/Hedder";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/Banner/Banner"
import RowList from "../../components/Rows/RowList/RowList";
function home() {
  return (
    <>
      <Hedder />
      <Banner/>
      <RowList/>
      <Footer />
    </>
  );
}

export default home;
