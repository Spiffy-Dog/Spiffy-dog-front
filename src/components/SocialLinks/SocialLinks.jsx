import { ReactComponent as Insta } from '../../assets/images/insta.svg';

export default function SocialLinks({ backgroundColor, fill }) {
  const styles = { insta: { fill: `${fill}` } };

  return (
    <div>
      <Insta style={styles.insta} />
    </div>
  );
}
