import axios from "axios";
import { useEffect, useState } from "react";
import Table from "./Table";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import MenuBar from "./MenuBar";
import { toast } from "react-hot-toast";
import UpdateUserModal from "./UpdateUserModal";
import CreateUserModal from "./CreateuserModal";

const items_per_page = 5;

export interface Item {
  id: number;
  name: string;
  email: string;
  status: string;
  role: string;
  last_login?: string;
}

const Home = () => {
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [createShow, setCreateShow] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(0);

  const [userToUpdate, setUserToUpdate] = useState<Item>();

  const handlePageChange: ReactPaginateProps["onPageChange"] = ({
    selected,
  }) => {
    setCurrentPage(selected);
  };

  const slicedData: Item[] = data.slice(
    currentPage * items_per_page,
    (currentPage + 1) * items_per_page
  );

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/users")
      .then((res) => {
        console.log(res);
        res.data.map((data: any): void => {
          setData((prev) => [
            ...prev,
            {
              id: data.id,
              name: data.name,
              email: data.email,
              status: data.status,
              role: data.role,
            },
          ]);
        });

        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteUser = (id: number) => {
    console.log(id);
    axios
      .delete(`http://localhost:8000/users/${id}`)
      .then((res) => toast.success("deleted"))
      .catch((err) => console.log(err));
    const updateduser = data.filter((user) => user.id !== id);
    setData(updateduser);
  };

  const updateUser = (id: number) => {
    toast.success("updated");
  };

  return (
    <>
      <CreateUserModal show={createShow} setShow={setCreateShow} />
      <UpdateUserModal show={show} setShow={setShow} data={userToUpdate} />
      <div className="flex flex-col gap-8 sm:px-8 sm:py-4 lg:px-16 lg:py-8">
        <div className="text-3xl font-medium">Company Settings</div>
        <div>
          <MenuBar />
        </div>
        <div className="border border-slate-300 rounded-md">
          <div>
            <div className="flex flex-row justify-between p-5 border-b border-slate-300">
              <div>
                <div className="text-xl font-normal">Users</div>
                <div className="text-sm font-light text-slate-600">
                  Manage your team members and their account permissions here
                </div>
              </div>
              <button onClick={() => setCreateShow(true)} className="bg-blue-500 px-4 py-2 rounded-md border-transparent hover:bg-blue-400">
                create user
              </button>
            </div>
          </div>

          <div className="border-b border-slate-300">
            <div>
              {!loading && (
                <Table
                  data={slicedData}
                  deleteUser={deleteUser}
                  updateUser={updateUser}
                  setShow={setShow}
                  setUserToUpdate={setUserToUpdate}
                />
              )}
            </div>
          </div>
          <div>
            <ReactPaginate
              pageCount={Math.ceil(data.length / items_per_page)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName="flex justify-between my-1"
              activeClassName="text-blue-600 font-medium"
              pageClassName="mx-2 px-4 py-2 cursor-pointer hover:text-blue-600"
              previousClassName=" rounded-md bg-slate-50 mx-2 px-4 py-2 cursor-pointer"
              nextClassName="rounded-md bg-slate-50 mx-2 px-4 py-2 cursor-pointer"
              // className="justify-between"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
