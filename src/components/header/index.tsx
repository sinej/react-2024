import Nav from "./nav";
import Gnb from "./gnb";

const Header = () => {
  return (
    <header>
      <div>
        <h1>Logo</h1>
        <Nav />
      </div>
      <Gnb />

    </header>
  );
};

export default Header;