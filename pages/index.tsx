import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../layouts/default';

export default function Home() {
  const { t } = useTranslation(['homepage', 'menu']);

  return (
    <Layout title={t('menu:homepage')}>
      <>
        <h1> {t('menu:homepage')} </h1>
        <p> {t('homepage:p')} </p>
      </>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'common',
      'homepage',
      'menu',
      'footer',
    ])),
  },
});
