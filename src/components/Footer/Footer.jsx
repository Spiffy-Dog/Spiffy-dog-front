import style from './Footer.module.scss';
import SocialLinks from '../SocialLinks';

const Footer = () => {
  return (
    <footer>
      <SocialLinks fill="#556B2F" backgroundColor="white" />
    </footer>
  );
};

export default Footer;
