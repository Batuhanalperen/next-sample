import Head from 'next/head';

interface Props {
  children: JSX.Element;
  title: string;
}

export default function Default({ children, title }: Props) {
  return (
    <div>
      <Head>
        <title>{title} | Sample</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <div className="container">{children}</div>
    </div>
  );
}
