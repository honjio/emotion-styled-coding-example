import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const Div1 = styled.div`
    width: 100px;
    height: 100px;
    background-color: #2b26b3;
`;

const Div2 = styled.div`
    width: 100px;
    height: 100px;
    background-color: #2b26b3;
`;

const Div3 = styled.div`
    width: 100px;
    height: 100px;
    background-color: #2b26b3;
`;

const Div4 = styled.div`
    width: 100px;
    height: 100px;
    background-color: #cd1f1f;
`;

const hullHd = () => css`
    width: 100px;
    height: 100px;
`;

const Div5 = styled.div`
    ${hullHd}
    background-color: #1fcd48;
`;

const Div6 = styled.div`
    ${hullHd}
    background-color: #cd671f;
`;

const Sample5 = () => {
    const [state, setState] = useState<string[]>([]);
    useEffect(() => {
        const styles = Array.from(document.getElementsByTagName("style"));
        let cssTextList: string[] = [];
        styles.forEach((el) => {
            const rules = el.sheet?.cssRules || [];
            for (let i = 0; i < rules.length; i++) {
                cssTextList.push(rules[i].cssText);
            }
        })
        setState(cssTextList);
    }, [])
    return (
        <div>
            <div>
                <Div1>1</Div1>
                <Div2>2</Div2>
                <Div3>3</Div3>
                <Div4>4</Div4>
                <Div4>4</Div4>
                <Div4>4</Div4>
                <Div5>5</Div5>
                <Div6>6</Div6>
            </div>
            {
                state.map((text, i) => (
                    <pre key={i}>{text}</pre>
                ))
            }
        </div>
    )
}

export default Sample5