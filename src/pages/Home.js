import Header from "../components/Home/Header";
import Plans from "../components/Home/Plans";
import Cta from "../components/Home/Cta";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Plans />
        <Cta />
      </main>
    </>
  );
};

export default Home;
