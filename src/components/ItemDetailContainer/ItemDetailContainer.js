import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import "../Spinner/Spinner.css";
import { db } from "../../Firebase/FirebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";

const ItemDetailContainer = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  useEffect(() => {
    const getShop = async () => {
      const productRef = collection(db, "shop");
      const q = query(productRef, where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductData(docs);
    };
    getShop();
  }, [id]);

  return (
    <div className="spinnerPosition">
      {loading ? (
        <div className="spin"></div>
      ) : (
        <div>
          <ItemDetail data={productData} />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
