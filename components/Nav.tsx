import styles from '../styles/modules/Nav.module.scss';
import Logo from './Logo';
import Menu from './Menu';

export default function Nav() {
  return (
    <div className={styles.nav}>
      <Logo />
      <Menu />
    </div>
  );
}
