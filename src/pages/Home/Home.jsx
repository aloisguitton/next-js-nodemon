import React, {Component} from "react";
import Head from "next/dist/next-server/lib/head";
import Typography from "@material-ui/core/Typography";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <>
            <Head>
                <title>Wedrivit | Location de véhicules anciens</title>
                <meta content={process.env.URL} property="og:url"/>
                <meta property="og:title" content=""/>
                <meta property="og:image" content={""}/>
                <meta name="description"
                      content=""/>
                <link rel="canonical" href={process.env.URL}/>
            </Head>
            <div>
                <Typography variant={"h1"}>Home</Typography>
            </div>
        </>
    }
}