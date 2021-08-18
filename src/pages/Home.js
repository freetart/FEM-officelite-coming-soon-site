import Header from "../components/Home/Header";
import Plans from "../components/Home/Plans";
import Cta from "../components/Home/Cta";
import Tag from "../components/Shared/Tag";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Plans />
        <Cta />
      </main>
      <Tag />
    </>
  );
};

export default Home;
