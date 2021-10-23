import styled from "@emotion/styled";
import { css } from "@emotion/react";

const withTime = <T extends () => any>(fn: T): ReturnType<T> => {
  const sTime = Date.now();
  const result = fn();
  const eTime = Date.now();
  console.log((eTime - sTime)/1000 + 's');
  return result;
}

type Props = {
  color: string;
  squareSize: number | string;
};

/**
 * Template literal pattern
 */
const Div1 = withTime(() => styled.div<Props>`
  position: relative;
  ${({squareSize}) => `
    width: ${squareSize};
    height: ${squareSize};
  `}
  border-width: 1px;
  border-style: solid;
  ${({color}) => `
    border-color: ${color};
    color: ${color};
  `}
  > p {
    margin: 0;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border: 1px solid;
    border-width: 1px;
    border-style: solid;
    border-color: ${({color}) => color};
    text-align: center;
    width: 100px;
    height: 100px;
    line-height: 100px;
    box-sizing: content-box;
  }
`);

/**
 * Support IDE syntax highlight pattern
 */
// const Div1 = withTime(() => styled.div<Props>`
//   ${({squareSize}) => css`
//     position: relative;
//     width: ${squareSize};
//     height: ${squareSize};
//   `}
//   ${({color}) => css`
//     border-width: 1px;
//     border-style: solid;
//     border-color: ${color};
//     color: ${color};
//   `}
//   background-color: #eee;
//   > p {
//     margin: 0;
//     position: absolute;
//     transform: translate(-50%, -50%);
//     top: 50%;
//     left: 50%;
//     ${({color}) => css`
//       border-width: 1px;
//       border-style: solid;
//       border-color: ${color};
//     `}
//     text-align: center;
//     width: 100px;
//     height: 100px;
//     line-height: 100px;
//     box-sizing: content-box;
//   }
// `);

/**
 * Object pattern
 */
// const Div1 = withTime(() => styled.div<Props>(({ color, squareSize }) => ({
//   position: "relative",
//   width: squareSize,
//   height: squareSize,
//   borderWidth: 1,
//   borderStyle: 'solid',
//   borderColor: color,
//   color,
//   "> p": {
//     margin: 0,
//     position: "absolute",
//     transform: 'translate(-50%, -50%)',
//     top: '50%',
//     left: '50%',
//     borderWidth: 1,
//     borderStyle: 'solid',
//     borderColor: color,
//     textAlign: 'center',
//     width: 100,
//     height: 100,
//     lineHeight: "100px",
//     boxSizing: 'content-box',
//   }
// })));

const Sample4 = () => {
  return <Div1 color="red" squareSize="300px"><p>Hello World</p></Div1>;
};

export default Sample4;


// Template literal pattern
// 中央値: 0.002s （MacBook Pro 2019 2.6 GHz 6コアIntel Core i7）

// Object pattern
// 中央値: 0.002s （MacBook Pro 2019 2.6 GHz 6コアIntel Core i7）

// Support IDE syntax highlight pattern
// 中央値: 0.002s （MacBook Pro 2019 2.6 GHz 6コアIntel Core i7）
