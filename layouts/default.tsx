import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Footer from '../components/Footer';

interface Props {
  children: JSX.Element;
  title: string;
}

export default function Default({ children, title }: Props) {
  const { t } = useTranslation('common');

  return (
    <div>
      <Head>
        <title>
          {title} - {t('app_name')}
        </title>
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
      <Footer />
    </div>
  );
}
