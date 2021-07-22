import * as _sample from "../components/sample3";
import styled from "@emotion/styled";

const { SampleComponent, ..._ } = _sample;

type Props = {
  className?: string;
}

const _Sample3: React.VFC<Props> = ({ className }) => {
  const list = ["text1", "text2", "text3"];

  return (
    <div className={className}>
      <SampleComponent
        label="sample"
        list={list}
      />
    </div>
  );
};

const Sample3 = styled(_Sample3)(() => {
  return {
    [_.RootDiv as any]: {
      border: '1px solid red',
    },
    [_.ImgWrapperDiv as any]: {
      backgroundColor: '#ccc',
    }
  }
});


export default Sample3;
