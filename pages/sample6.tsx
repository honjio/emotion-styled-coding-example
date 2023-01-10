/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

type Colors = "#2b26b3" | "#cd1f1f" | "#1fcd48" | "#cd671f";

const hullHd = css`
    width: 100px;
    height: 100px;
`;

const bgColor = (color: Colors) => css`
    background-color: ${color};
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
                <div css={[hullHd, bgColor("#2b26b3")]}>1</div>
                <div css={[hullHd, bgColor("#2b26b3")]}>2</div>
                <div css={[hullHd, bgColor("#2b26b3")]}>3</div>
                <div css={[hullHd, bgColor("#cd1f1f")]}>4</div>
                <div css={[hullHd, bgColor("#cd1f1f")]}>4</div>
                <div css={[hullHd, bgColor("#cd1f1f")]}>4</div>
                <div css={[hullHd, bgColor("#1fcd48")]}>5</div>
                <div css={[hullHd, bgColor("#cd671f")]}>6</div>
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