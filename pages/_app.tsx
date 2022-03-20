import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
    return <>
        <Head>
            <title>MyTop - наш лучший топ</title>
            <link rel='icon' href='favicon.ico' />
            <meta property='og:url' content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
            <meta property='og:locale' content='ru-RU' />
        </Head>
        <Component {...pageProps} />
    </>;
}

export default MyApp;
