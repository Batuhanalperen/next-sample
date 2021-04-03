import styles from '../styles/modules/Nav.module.scss';
import Logo from './Logo';
import Menu from './Menu';

interface Props {
  title: string;
}

export default function Nav({ title }: Props) {
  return (
    <div className={styles.nav}>
      <Logo title={title} />
      <Menu />
    </div>
  );
}
