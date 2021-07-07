import { SampleComponent } from "../components/sample2";

const Other = () => {
  const list = ["text1", "text2", "text3"];

  return (
    <SampleComponent
      label="sample"
      list={list}
    />
  );
};

export default Other;
