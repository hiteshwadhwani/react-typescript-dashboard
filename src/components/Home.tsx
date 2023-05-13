import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./Table";
import ReactPaginate from "react-paginate";



export interface Item {
  name: string;
  status: string;
  role: string;
  last_login?: string;
}

const Home = () => {
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        res.data.map((data: any): void => {
          setData((prev) => [
            ...prev,
            { name: data.name, status: "active", role: "admin" },
          ]);
        });

        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="flex flex-col gap-8 sm:px-8 sm:py-4 lg:px-16 lg:py-8">
        <div className="text-3xl font-medium">Company Settings</div>
        <div className="border border-slate-300 drop-shadow-xl rounded-md shadow-xl">
          <div className="p-5 border-b border-slate-300">
            <div className="text-xl font-normal">Users</div>
            <div className="text-sm font-light text-slate-600">
              Manage your team members and their account permissions here
            </div>
          </div>
          <div className="p-5">
            <div>{!loading && <Table data={data} />}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
