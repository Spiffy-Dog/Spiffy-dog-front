import style from './Footer.module.scss';
import { Link } from 'react-router-dom';
import SocialLinks from '../SocialLinks';
import Logo from '../Logo';
import styled from 'styled-components';

const Footer = () => {
  return (
    <footer>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <Logo height="124px" fill="white" />
        </div>
        <ul className={style.linksWrapper}>
          <li>
            <Link className={style.link}>О нас</Link>
          </li>
          <li>
            <Link className={style.link}>Каталог</Link>
          </li>
          <li>
            <Link className={style.link}>Мерки</Link>
          </li>
          <li>
            <Link className={style.link}>Доставка/Оплата</Link>
          </li>
          <li>
            <Link className={style.link}>Контакты</Link>
          </li>
          <li>
            <Link className={style.link}>Политика конфиденциальности</Link>
          </li>
        </ul>
        <div className={style.logo}>
          <SocialLinks fill="#556B2F" backgroundColor="white" />
        </div>
        <p className={style.paragraph}>
          Сайт разработан <Link className={style.team}>группой #5</Link>{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
