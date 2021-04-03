import { useTranslation } from 'next-i18next';
import Link from 'next/link';

interface MenuItems {
  title: string;
  to: string;
}

export default function Menu() {
  const menu: Array<MenuItems> = [
    { title: 'homepage', to: '/' },
    { title: 'contactUs', to: '/contact-us' },
  ];

  const { t } = useTranslation('menu');

  return (
    <>
      <ul>
        {menu.map(({ title, to }, index) => (
          <Link href={to}>
            <li key={index}>{t(`${title}`)}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}
