
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import TopMain from "../mainHeader/TopMain";

const Layout = () => {
  return (
    < >
      <Header />
      <main>
        <TopMain/>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;