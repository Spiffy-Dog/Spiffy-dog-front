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

        <SocialLinks fill="#556B2F" backgroundColor="white" />
      </div>
    </footer>
  );
};

export default Footer;
