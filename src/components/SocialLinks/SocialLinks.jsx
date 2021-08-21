import { ReactComponent as Insta } from '../../assets/images/insta.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function SocialLinks({ backgroundColor, fill }) {
  const styles = {
    insta: {
      fill: `${fill}`,
      width: '25px',
      height: '25px',
    },
    listIcon: {
      backgroundColor: `${backgroundColor}`,
      width: '41px',
      borderRadius: '50%',
      height: '41px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: '250ms',
      ':hover': {
        backgroundColor: `${fill}`,
      },
    },
  };

  return (
    <ul>
      <li style={styles.listIcon}>
        <a
          href="https://www.instagram.com/"
          aria-label="Instagram"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Insta style={styles.insta} />
        </a>
      </li>
    </ul>
  );
}
