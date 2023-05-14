import { useState } from "react";
import { Item } from "./Home";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Dispatch } from "react";

interface userModalProps {
  show: boolean;
  data?: Item;
  setShow: Dispatch<boolean>;
}

const CreateUserModal: React.FC<userModalProps> = ({ show, data, setShow }) => {
  const [name, setName] = useState(data?.name || "");
  const [email, setEmail] = useState(data?.email || "");
  const [role, setRole] = useState(data?.role || "");
  const [status, setStatus] = useState(data?.status || "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      name,
      email,
      role,
      status,
    };
    axios
      .post("http://localhost:8000/users", user)
      .then((res) => toast.success("user created"))
      .catch((error) => toast.error(error));

    setShow(false);
  };

  return (
    <div
      className={`${
        show ? "block" : "hidden"
      } h-full w-full  fixed flex justify-center items-center backdrop-blur-sm`}
    >
      <div className="">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2" action="">
          <label htmlFor="name">Name</label>
          <input
            className="border border-black rounded-md px-4 py-2"
            onChange={(e) => setName(e.target.value)}
            type="text"
            defaultValue={data?.name}
            name="name"
          />

          <label htmlFor="name">Email</label>
          <input
            className="border border-black rounded-md px-4 py-2"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            defaultValue={data?.email}
            name="email"
          />

          <label htmlFor="name">Status</label>
          <input
            className="border border-black rounded-md px-4 py-2"
            onChange={(e) => setRole(e.target.value)}
            type="text"
            defaultValue={data?.status}
            name="role"
          />

          <label htmlFor="name">Role</label>
          <input
            className="border border-black rounded-md px-4 py-2"
            onChange={(e) => setStatus(e.target.value)}
            type="text"
            defaultValue={data?.status}
            name="status"
          />

          <button type="submit">CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUserModal;
