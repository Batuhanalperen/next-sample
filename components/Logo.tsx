import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import styles from '../styles/modules/Nav.module.scss';
import { useTranslation } from 'next-i18next';

interface Props {
  title: string;
}

export default function Logo({ title }: Props) {
  const { t } = useTranslation(['common', 'menu']);

  return (
    <div className="d-flex align-items-center">
      <FiberManualRecordIcon fontSize="large" />
      <span className={styles.logo}>
        {title !== 'homepage' ? t(`menu:${title}`) : t('common:app_name')}
      </span>
    </div>
  );
}
