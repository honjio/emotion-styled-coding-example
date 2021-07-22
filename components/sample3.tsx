import styled from "@emotion/styled";
import pic from '../public/vercel.svg'
import Image from "next/image";

type Props = {
    className?: string;
    label: string;
    list: string[];
};

export const RootDiv = styled.div({
    width: 500,
    height: 500,
});

export const ImgWrapperDiv = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    '.img': {
        height: '100%',
    }
});

export const Label = styled.p({})

export const Items = styled.ul({
    height: '50%',
    listStyle: 'none',
})

export const SampleComponent: React.VFC<Props> = (props) => {
    const { label, list } = props;

    return (
        <RootDiv>
            <ImgWrapperDiv>
                <Image className="img" src={pic} alt="" />
            </ImgWrapperDiv>
            <Label>{label}</Label>
            <Items>
                {list.map((item) => {
                    return (
                        <li key={item}>
                            {item}
                        </li>
                    );
                })}
            </Items>
        </RootDiv>
    );
};
