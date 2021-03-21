import '../styles/app.scss';

import { appWithTranslation } from 'next-i18next';

const Sample = ({ Component, pageProps }) => <Component {...pageProps} />;

export default appWithTranslation(Sample);
