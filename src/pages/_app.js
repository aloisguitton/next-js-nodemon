import theme from '../theme';
import App from 'next/app';
import React from "react";
import Head from "next/head";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {frFR} from "@material-ui/core/locale";
import {persistor, store} from "../Store/store";
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react'
import withRedux from "next-redux-wrapper";
import dynamic from "next/dynamic";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ServerStyleSheets } from '@material-ui/core/styles';

class MyApp extends App {

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  static async getInitialProps({Component, ctx}) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    //Anything returned here can be access by the client
    return {pageProps: pageProps};
  }


  render() {
    const {Component, pageProps} = this.props;

    return <>


      <Provider store={store}>
        {
          typeof window !== "undefined"
              ? <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                  <CssBaseline/>
                  <div className={""}>
                    <Component {...pageProps} />
                  </div>
                </ThemeProvider>
              </PersistGate>
              : <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className={""}>
                  <Component {...pageProps} />
                </div>
              </ThemeProvider>

        }

      </Provider>
    </>
  }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);