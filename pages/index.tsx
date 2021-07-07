import { SampleComponent, sampleStyles } from "../components/sample1";
import { ClassNamingHelper } from "../plugins/styling";

const Home = () => {
  const list = ["text1", "text2", "text3"];
  const name = new ClassNamingHelper(); // default "&"

  return (
    <SampleComponent
      label="sample"
      list={list}
      extendStyle={{
        border: '1px solid red',
        [name.gen('a')]: {
          ...sampleStyles.a,
          backgroundColor: '#ccc',
        }
      }}
    />
  );
};

export default Home;