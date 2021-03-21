import { useTranslation } from 'next-i18next';

export default function Menu() {
  const menu: Array<String> = ['homepage', 'contactUs'];
  const { t } = useTranslation('menu');

  return (
    <>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>{t(`${item}`)}</li>
        ))}
      </ul>
    </>
  );
}
