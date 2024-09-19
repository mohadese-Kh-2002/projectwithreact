import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Services from "./routes/services/Services";
import Pages from "./routes/pages/Pages";
import Blog from "./routes/pages/Blogs/Blog";
import Blogs from "./routes/pages/Blogs/Blogs";
import FAQ from "./routes/pages/FAQ/FAQ";
import NotFound from "./routes/not-found/NotFound";
import Portfolio from "./routes/portfolio/Portfolio";
import Projects from "./routes/projects/Projects";

const App = () => {

  return (

    
      <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/services" element={<Services />} />
        <Route path="/pages" element={<Pages />}>
          <Route index element={<Blogs />} />
          <Route path="FAQ" element={<FAQ />} />
          <Route path="blog/:id" element={<Blog />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  

  );
};

export default App;
