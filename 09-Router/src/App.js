import { Route, Routes, Navigate } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <Routes>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:productId' element={<ProductDetails />} />
        <Route path='*' element={<Navigate to='/welcome' replace />} />
      </Routes>
    </div>
  );
}

export default App;
