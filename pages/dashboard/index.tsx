import React from 'react';
import Login from "../../components/login/Login";
import {PageSEO} from "../../layouts/SEO";
import Dashboard from "../../components/dashboard/Dashboard";

const Index = () => {
  return (
    <>
      <PageSEO title={"Crypto | Dashboard"} description={"Crypto | Dashboard"}/>
      <Dashboard/>
    </>
  )
}

export default Index;
