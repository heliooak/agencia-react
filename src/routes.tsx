import Footer from 'components/Footer';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Destinos from 'pages/Destinos';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Cidade from 'pages/Cidade';
import Contato from 'pages/Contato';
import Cadastro from 'pages/Cadastro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao />} >
            <Route index element={<Home />} />
            <Route path='destinos' element={<Destinos />} />
            <Route path='contato' element={<Contato />} />
            <Route path='cadastro' element={<Cadastro />} />
          </Route>
          <Route path='cidade/:id' element={<Cidade />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}