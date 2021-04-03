import { useTranslation } from 'next-i18next';
import styles from '../styles/modules/Main.module.scss';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

interface Props {
  children: JSX.Element;
  title: string;
}

export default function Default({ children, title }: Props) {
  const { t } = useTranslation(['common', 'menu']);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>
          {t(`menu:${title}`)} - {t('common:app_name')}
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
      <Nav title={title} />
      <div className={`container ${styles.main}`}>{children}</div>
      <Footer />
    </div>
  );
}
