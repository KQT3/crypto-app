import type {AppProps} from 'next/app'
import {ThemeProvider} from "@mui/material";
import Head from "next/head";
import mainTheme from "../styles/mainTheme";
import Layout from "../layouts/Layout";

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <Head>
          <meta name="description" content="crypto-technology"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
