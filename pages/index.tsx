/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import Link  from 'next/link';

const style = css`color: blue;`;

const Home = () => {
  return (
     <div>
       <h1>Coding pattern using emotion styled</h1>
       <ul>
         <li><Link href="/sample1"><a css={style}>Sample1</a></Link></li>
         <li><Link href="/sample2"><a css={style}>Sample2</a></Link></li>
         <li><Link href="/sample3"><a css={style}>Sample3</a></Link></li>
       </ul>
     </div>
  );
};

export default Home;
