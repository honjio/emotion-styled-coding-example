import styled, { CSSObject } from "@emotion/styled";
import { ClassNamingHelper, ShareStyle } from "../plugins/styling";
import pic from '../public/vercel.svg'
import Image from "next/image";

type Props = {
    className?: string;
    label: string;
    list: string[];
    /**
     * Component の style を上書きする prop
     */
    extendStyle?: CSSObject;
};

const _SampleComponent: React.VFC<Props> = (props) => {
    const { className, label, list } = props;
    const name = new ClassNamingHelper(className);

    return (
        <div className={name.gen()}>
        <div className={name.gen('a')}>
            <Image className={name.gen('b')} src={pic} alt="" />
        </div>
        <p className={name.gen('c')}>{label}</p>
        <ul className={name.gen('d')}>
            {list.map((item) => {
                return (
                    <li className={name.gen('e')} key={item}>
                        {item}
                    </li>
                );
            })}
        </ul>
    </div>
    );
};

export const sampleStyles: ShareStyle = {
    root: {
        width: 500, // default px
        height: 500,
    },
    a: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
    },
    b: {
        height: '100%',
    },
    d: {
        height: '50%',
        listStyle: 'none',
    },
};


export const SampleComponent = styled(_SampleComponent)((props) => {
    const name = new ClassNamingHelper(); // default "&"
    const { root, a, b, d } = sampleStyles;
    return {
        ...root,
        [name.gen('a')]: a,
        [name.gen('b')]: b,
        [name.gen('d')]: d,

        // props 経由で上書き用 style object を受け取る
        ...props.extendStyle,
    }
});