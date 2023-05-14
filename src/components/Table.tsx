import { useState, Dispatch } from "react";
import { Item } from "./Home";
import { AiOutlineArrowDown } from "react-icons/ai";
import StatusBox from "./StatusBox"
import NameField from "./NameField"
import {AiFillDelete, AiFillEdit} from "react-icons/ai"
import TimeField from "./TimeField"

interface TableProps {
  data: Item[];
  deleteUser: (id : number) => void
  updateUser: (id: number) => void
  setUserToUpdate : Dispatch<Item>
  setShow: Dispatch<boolean>
}
const Table: React.FC<TableProps> = ({ data, deleteUser, updateUser, setShow, setUserToUpdate }) => {
  
  return (
    <div>
      <table className="min-w-full">
        <tr className="text-left">
          <th className="font-normal text-gray-500 w-[60%] px-4 py-2">
            Name <AiOutlineArrowDown className="inline-block cursor-pointer" />
          </th>
          <th className="font-normal text-gray-500 px-4 py-2">
            Status{" "}

            <AiOutlineArrowDown className="inline-block cursor-pointer" />
          </th>
          <th className="font-normal text-gray-500 px-4 py-2">
            Role <AiOutlineArrowDown className="inline-block cursor-pointer" />
          </th>
          <th className="font-normal text-gray-500 px-4 py-2">
            lastlogin{" "}
            <AiOutlineArrowDown className="inline-block cursor-pointer" />
          </th>
        </tr>
        {data.map((item: Item) => (
          <tr className="odd:bg-white even:bg-slate-50">
            <td className="px-4 py-2">
              <NameField name={item.name} email={item.email} />
            </td>
            <td className="px-4 py-2"><StatusBox label={item.status} /></td>
            <td className="px-4 py-2">{item.role}</td>
            <td className="px-4 py-2"><TimeField /></td>
            <td onClick={() => deleteUser(item.id)} className="px-4 py-2 cursor-pointer"><AiFillDelete /></td>
            <td onClick={() => {setUserToUpdate(item); setShow(true)}} className="px-4 py-2 cursor-pointer"><AiFillEdit /></td>
          </tr>
        ))}
      </table>
      
    </div>
  );
};
export default Table;
