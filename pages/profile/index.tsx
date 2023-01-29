import React from 'react';
import {PageSEO} from "../../layouts/SEO";
import Profile from "../../components/profile/Profile";

const Index = () => {
  return (
    <>
      <PageSEO title={"Crypto | Profile"} description={"Crypto | Profile"}/>
      <Profile/>
    </>
  )
}

export default Index;
