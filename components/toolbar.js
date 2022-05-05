import { useRouter } from 'next/router';
import styles from '../styles/Toolbar.module.css';
import Body from '../pages/blog';

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div onClick={() => router.push('/')}>Home</div>
      <div onClick={() => window.location.href = '/post/first-blog'}>Twitter</div>
      <div onClick={() => window.location.href = 'https://github.com/portexe'}>GitHub</div>
      <div onClick={() => router.push('/blog')}>Github</div>
    </div>
  );
};