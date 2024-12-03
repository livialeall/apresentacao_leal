import Footer from "../components/Footer";
import Myself from "../components/Myself";
import List from "../components/Projects/List";
import "../style/index.css";

function HomePage() {
  return (
    <>
      <div className="component-div">
        <Myself />
          <List page={"Projetos"} id={""}></List>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
