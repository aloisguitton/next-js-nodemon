import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';
import {ServerStyleSheets} from '@material-ui/core/styles';
import theme from '../theme';


export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8"/>
                    <link rel="icon" href={"/favicon.ico"}/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>

                    {
                        process.env.ENV === "production"
                            ? <>
                                {/*TODO : Google Tag Manager*/}
                            </>
                            : null
                    }
                    <meta property="og:locale" content="fr_FR"/>
                    <meta property="og:type" content="website"/>
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta property="og:description"
                          content=""/>
                    <meta property="og:site_name" content=""/>
                    <meta property="article:publisher" content=""/>
                    <meta name="twitter:site" content=""/>
                    <meta property="og:image:width" content="1200"/>
                    <meta property="og:image:height" content="630"/>

                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
                          integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
                          crossOrigin="anonymous"/>

                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                        crossOrigin="anonymous"
                    />
                    <meta name="theme-color" content={theme.palette.primary.main}/>

                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
};