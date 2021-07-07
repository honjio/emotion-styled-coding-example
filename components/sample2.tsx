import styled  from "@emotion/styled";
import pic from '../public/vercel.svg'
import Image from "next/image";

type Props = {
    className?: string;
    label: string;
    list: string[];
};

const _SampleComponent: React.VFC<Props> = (props) => {
    const { className, label, list } = props;

    return (
        <div className={className}>
            <div className={'a'}>
                <Image className={'b'} src={pic} alt="" />
            </div>
            <p className={'c'}>{label}</p>
            <ul className={'d'}>
                {list.map((item) => {
                    return (
                        <li className={'e'} key={item}>
                            {item}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export const SampleComponent = styled(_SampleComponent)(() => {
    return {
        width: 500, // default px
        height: 500,
        '> .a': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50%',

            '.b': {
                height: '100%',
            },

        },
        '> .c': {
            height: '50%',
            listStyle: 'none',
        },
    }
});