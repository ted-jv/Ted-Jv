import { Navbar } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Detail from './component/Detail';
import Home from './component/Home';

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Detail" element={<Detail />} />
      </Routes>

    </>

  );
  }

export default App;