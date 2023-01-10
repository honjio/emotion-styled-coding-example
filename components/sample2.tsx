/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import pic from '../public/vercel.svg'
// import Image from "next/image";

type Props = {
    className?: string;
    label: string;
    list: string[];
};

const _SampleComponent: React.VFC<Props> = (props) => {
    const { className, label, list } = props;

    return (
        <div className={className}>
            <div className={'imgWrapper'}>
                <img className={'image'} src={pic} alt="" />
            </div>
            <p className={'label'}>{label}</p>
            <ul className={'items'}>
                {list.map((item) => {
                    return (
                        <li className={'item'} key={item}>
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
        '> .imgWrapper': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50%',

            '.image': {
                height: '100%',
            },

        },
        '> .items': {
            height: '50%',
            listStyle: 'none',
        },
    }
});