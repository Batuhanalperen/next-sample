import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import styles from '../styles/modules/Nav.module.scss';
import { useTranslation } from 'next-i18next';

export default function Logo() {
  const { t } = useTranslation('common');

  return (
    <div className="d-flex align-items-center">
      <FiberManualRecordIcon fontSize="large" />
      <span className={styles.logo}>{t('app_name')}</span>
    </div>
  );
}
