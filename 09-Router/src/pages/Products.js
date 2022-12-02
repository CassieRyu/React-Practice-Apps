import { NavLink, Link } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const Products = () => {
  return (
    <div>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to='/products/p1'>A book</Link>
        </li>
        <li>
          <Link to='/products/p2'>A carpet</Link>
        </li>
        <li>
          <Link to='/products/p3'>An online course</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
