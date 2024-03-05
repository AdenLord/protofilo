import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Aboutme from "./AboutMe";
import Contact from "./Contact";
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <Container>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="abuot me" element={<Aboutme />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Container>
  );
}

export default App;
