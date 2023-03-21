import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { SnackbarProvider } from 'notistack'
import {CircularProgress,Box} from '@mui/material'
import theme from '../src/theme';
import Router from 'next/router'
import createEmotionCache from '../src/createEmotionCache';
import Dashboard from '@/components/layoyut';
import Landing from '@/components/layouts/landingLayout/Landing';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const [isLoading, setIsLoading] = useState(false);

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const renderLayout = Component.getLayout || function (page) { return <Landing>{page}</Landing> }
  useEffect(() => {
    const start = ()=>{setIsLoading(true)}
    const close = ()=>{setIsLoading(false)}
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', close);
    return ()=>{
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', close);
    }
  }, [])


  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <SnackbarProvider autoHideDuration={3000} anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }} >
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/* <Dashboard><Component {...pageProps} /></Dashboard> */}
        {renderLayout(isLoading ? <Box sx={{width:'100%',height:'80vh',display:'flex',justifyContent:'center',alignItems:'center'}}><CircularProgress /></Box> : <Component {...pageProps} />)}
        
      </ThemeProvider>
      </SnackbarProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};