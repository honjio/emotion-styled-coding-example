import { SampleComponent } from "../components/sample2";
import styled from "@emotion/styled";

type Props = {
  className?: string;
}

const _Other: React.VFC<Props> = ({ className }) => {
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

const Other = styled(_Other)(() => {
  return {
    [SampleComponent as any]: {
      border: '1px solid red',
      '> .a': {
        backgroundColor: '#ccc',
      }
    }
  }
});

export default Other;
