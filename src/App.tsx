import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";
import { dataType } from "./types/types";
import Loader from "./components/Loaders";

function App() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [data, setData] = useState<dataType[]>([]);
  const [loading, setLoading] = useState(false);
  const [startIndex, setStartIndex] = useState<number>(1);
  const numberOfProductPerPage = 8;
  let lastIndex = startIndex * numberOfProductPerPage;

  function handleClick() {
    setStartIndex((prev) => prev + 1);
  }

  useEffect(() => {
    setLoading(true);
    const getAllData = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}`);

        const data = res.data.splice(startIndex, lastIndex);
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getAllData();
  }, [startIndex]);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="p-4 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.map((e: dataType) => {
          return <Card key={e.id} data={e} />;
        })}
      </div>

      <div className="flex justify-center mb-4">
        <button
          className="bg-black text-white text-lg text-center rounded-md w-fit px-4 py-2"
          onClick={handleClick}
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default App;
