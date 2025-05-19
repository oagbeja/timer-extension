import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllFormData } from "../utils/db";

const Table = ({
  reload,
  handleEdit,
}: {
  reload: boolean;
  handleEdit: Function;
}) => {
  const [itemData, setItemData] = useState<Record<string, any>[]>([]);

  const fetchEvents = async () => {
    try {
      const data = await getAllFormData();
      setItemData(data);
    } catch {
      toast.error("Unable to fetch");
    }
  };

  const displayEvents = () => {
    return itemData.map((dt, index) => (
      <tr className='hover:bg-sky-500' key={`Ind${index}`}>
        <td className='px-4 py-2 border-b'>{dt.item}</td>
        <td className='px-4 py-2 border-b'>{dt.description}</td>
        <td className='px-4 py-2 border-b text-left'>
          {dt.days instanceof Array ? dt.days.join(",") : ""}
        </td>
        <td className='px-4 py-2 border-b'>{dt.date}</td>
        <td
          className='px-4 py-2 border-b cursor-pointer'
          onClick={() => handleEdit(dt)}
        >
          Edit
        </td>
      </tr>
    ));
  };

  useEffect(() => {
    fetchEvents();
  }, [reload]);

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full border border-gray-200 text-sm'>
        <thead className='bg-gray-100 text-gray-700'>
          <tr>
            <th className='px-4 py-2 text-left border-b'>Item</th>
            <th className='px-4 py-2 text-left border-b'>Description</th>
            <th className='px-4 py-2 text-left border-b'>Days</th>
            <th className='px-4 py-2 text-left border-b'>Time</th>
            <th className='px-4 py-2 text-left border-b'>Action</th>
          </tr>
        </thead>
        <tbody>{displayEvents()}</tbody>
      </table>
    </div>
  );
};

export default Table;
