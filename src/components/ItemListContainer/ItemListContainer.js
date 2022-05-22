import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import "../Spinner/Spinner.css";
import { db } from "../../Firebase/FirebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [shop, setShop] = useState([]);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  useEffect(() => {
    const getShop = async () => {
      const q = query(collection(db, "shop"));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setShop(docs);
    };
    getShop();
  }, []);

  return (
    <div className="spinnerPosition">
      {loading ? (
        <div className="spin"></div>
      ) : (
        <div>
          <ItemList items={shop} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
