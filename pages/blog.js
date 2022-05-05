import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Toolbar } from '../components/toolbar';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home({ posts }) {
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: 'p16t6qbi',
        dataset: 'production',
      });

      setMappedPosts(
        posts.map(p => {
          return {
            ...p,
            mainImage: imgBuilder.image(p.mainImage).width(500).height(300),
          }
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  return (
    <div className='bg-black' >
      <Navbar />
      <div className = 'bg-black' >
      <div className={styles.main} >
        <h1 className='pt-[100px] text-red-600 text-base font-medium text-[30px] ' >Welcome To My Blog</h1>

        <h2 className='pt-[50px] text-red-600 text-base font-medium text-[18px] ' >Recent Posts:</h2>

        <div className={styles.feed}>
          {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div onClick={() => router.push(`/post/${p.slug.current}`)} key={index} className={styles.post}>
              <h2 className='text-red-600 text-base font-medium text-[18px] mb-2 underline ' >{p.title}</h2>
              <img className={styles.mainImage} src={p.mainImage} />
            </div>
          )) : <>No Posts Yet</>}
        </div>
      </div>
      </div>
      <Footer />
    </div>
    
  );
}

export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent('*[ _type == "post" ]');
  const url = `https://p16t6qbi.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then(res => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      }
    }
  } else {
    return {
      props: {
        posts: result.result,
      }
    }
  }
};