import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Article({ products }) {
  const { urlId } = useParams();
  const navigate = useNavigate();

  const items = products.find(({ id }) => id === urlId);

  useEffect(() => {
    if (!items) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [items, navigate]);

  return (
    <div>
      {!items && <p>No records found!</p>}
      {items && (
        <div key={items.id}>
          <h2>{items.product_Name}</h2>
          <img src={items.imageURL}/>
          <p><strong>Price</strong> {items.price}</p>
          <p>{items.body}</p>
        </div>
      )}
    </div>
  );
}
