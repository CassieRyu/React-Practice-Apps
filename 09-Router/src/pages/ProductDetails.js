import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const params = useParams();

  return (
    <div>
      <h2>Product Details Page</h2>
      <p>{params.productId}</p>
    </div>
  );
};

export default ProductDetails;
