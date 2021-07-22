import { SampleComponent } from "../components/sample2";
import styled from "@emotion/styled";

type Props = {
  className?: string;
}

const _Sample2: React.VFC<Props> = ({ className }) => {
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

const Sample2 = styled(_Sample2)(() => {
  return {
    [SampleComponent as any]: {
      border: '1px solid red',
      '> .imgWrapper': {
        backgroundColor: '#ccc',
      }
    }
  }
});

export default Sample2;
