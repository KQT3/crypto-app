import React, {useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import SideMenu from "./SideMenu";
import Box from "@mui/material/Box";

type Props = {
  children: JSX.Element
}

const Layout = ({children}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box sx={{marginLeft: {xs: "0px", md: "250px"}, minHeight: "90vh", marginTop: 10}}>
      <Header onMenuClick={() => console.log("")}/>
      <SideMenu isOpen={isOpen} onClose={() => setIsOpen(false)}/>
      <main>{children}</main>
      <Footer/>
    </Box>
  )
}

export default Layout
