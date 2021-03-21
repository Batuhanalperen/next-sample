import styles from '../styles/modules/Footer.module.scss';
import { useTranslation } from 'next-i18next';

export default function Footer() {
  const year: Number = new Date().getFullYear();
  const { t } = useTranslation('common');

  return (
    <div className={styles.footer}>
      {t('app_name')} &copy; {year}
    </div>
  );
}
