import { dataType } from "../types/types";

export default function Card({ data }: { data: dataType }) {
  return (
    <div className="rounded-lg p-4 shadow-xl border-2">
      <div className="w-full flex justify-center items-center ">
        <img src={data.image} alt="No Internet" />
      </div>
      <h2 className="text-center xsm:mt-8 xl:mt-12 xsm:text-md  md:text-lg lg:text-xl font-bold ">
        {data.name.slice(0, 30)}
      </h2>
      <p className="text-center xsn:mt-4 xl:mt-6 xsm:text-md  md:text-xl xl:text-2xl text-sky-500 font-bold">
        {data.price}
      </p>

      <div className="mt-8 text-center w-full">
        <button className="px-4 py-2 text-white bg-orange-500 rounded-full hover:scale-110 duration-200 bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500">
          Add to Cart
        </button>
      </div>

      <div className="mt-8 flex justify-between">
        <div className="flex justify-start items-middle">
          <p className="text-2xl font-bold mr-2">
            {Math.floor(data.rating.average)}
          </p>
          <img src="star.svg" alt="no internet connection" />
        </div>

        <div>
          <img src="share.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
