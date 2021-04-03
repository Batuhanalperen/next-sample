import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../layouts/default';

export default function ContactUs() {
  const { t } = useTranslation(['contactUs', 'menu']);

  return (
    <Layout title="contactUs">
      <>
        <h1> {t('menu:contactUs')} </h1>
      </>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'common',
      'contactUs',
      'menu',
      'footer',
    ])),
  },
});
