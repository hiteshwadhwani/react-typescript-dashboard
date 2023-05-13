import { useState } from "react";
import { Item } from "./Home";
import { AiOutlineArrowDown } from "react-icons/ai";

const items_per_page = 5;

interface TableProps {
  data: Item[];
}
const Table: React.FC<TableProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (selected : number) => {
    setCurrentPage(selected)
  }

  const slicedData : Item[] = data.slice(
    (currentPage - 1) * items_per_page,
    currentPage + items_per_page
  )

  return (
    <div>
      <table className="min-w-full">
        <tr className="text-left">
          <th className="font-normal text-gray-500 w-[60%]">
            Name <AiOutlineArrowDown className="inline-block cursor-pointer" />
          </th>
          <th className="font-normal text-gray-500">
            Status{" "}
            <AiOutlineArrowDown className="inline-block cursor-pointer" />
          </th>
          <th className="font-normal text-gray-500">
            Role <AiOutlineArrowDown className="inline-block cursor-pointer" />
          </th>
          <th className="font-normal text-gray-500">
            lastlogin{" "}
            <AiOutlineArrowDown className="inline-block cursor-pointer" />
          </th>
        </tr>
        {slicedData.map((item: Item) => (
          <tr className="">
            <td>{item.name}</td>
            <td>{item.status}</td>
            <td>{item.role}</td>
            <td>{item.last_login}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default Table;
