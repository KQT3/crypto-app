import React from 'react';
import Login from "../../components/login/Login";
import {PageSEO} from "../../layouts/SEO";

const Index = () => {
  return (
    <>
      <PageSEO title={"Crypto | Login"} description={"Crypto | Login"}/>
      <Login/>
    </>
  )
}

export default Index;
