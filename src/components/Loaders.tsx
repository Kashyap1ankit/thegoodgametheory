import { CirclesWithBar } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="flex justify-center items-center w-screen h-screen  ">
      <CirclesWithBar color="green" ariaLabel="loading" />
    </div>
  );
}
