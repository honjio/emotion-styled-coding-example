/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import Link  from 'next/link';

const style = css`color: blue;`;

const Home = () => {
  return (
    <div>
      <h1>Coding with emotion</h1>
      <div>
        <h2>Coding pattern using emotion styled</h2>
        <ul>
          <li><Link href="/sample1"><a css={style}>Sample1</a></Link></li>
          <li><Link href="/sample2"><a css={style}>Sample2</a></Link></li>
          <li><Link href="/sample3"><a css={style}>Sample3</a></Link></li>
        </ul>
      </div>
      <div>
        <h2>performance test</h2>
        <ul>
          <li><Link href="/sample4"><a css={style}>Sample4</a></Link></li>
        </ul>
      </div>
      <div>
        <h2>experiment</h2>
        <ul>
          <li><Link href="/sample5"><a css={style}>Mount duplicate styled components</a></Link></li>
          <li><Link href="/sample6"><a css={style}>Mount duplicate css</a></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
