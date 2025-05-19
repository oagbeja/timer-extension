import { toast } from "react-toastify";
import { deleteItem } from "../utils/db";

interface IModal {
  isOpen: boolean;
  setIsOpen: Function;
  editObj: Record<string, any>;
  setEditObj: Function;
}
const ModalDelete = ({ isOpen, setIsOpen, editObj, setEditObj }: IModal) => {
  const removeItem = async () => {
    try {
      await deleteItem(editObj.id);
      setEditObj({});
      toast.success(`Alert ${editObj.item} removed successfully`);
      setIsOpen(false);
    } catch {
      toast.error("Failed to save ");
    }
  };

  return !isOpen ? null : (
    <div className='fixed  inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div className=' max-h-[90vh] overflow-auto bg-white rounded-lg shadow-lg max-w-md w-full text-left p-6 relative'>
        <h2 className='text-xl font-semibold mb-4 text-gray-700'>
          {editObj?.id
            ? `Do you want to remove  ${editObj.item} alert`
            : "Delete Alert"}
        </h2>

        <div className='flex justify-between'>
          <button
            onClick={removeItem}
            type='button'
            className='mt-4 w-[40%] bg-sky-300 text-gray-800 px-4 py-2 rounded hover:bg-sky-400 transition cursor-pointer'
          >
            Yes
          </button>
          <button
            type='button'
            className='mt-4 w-[40%] bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition cursor-pointer'
            onClick={() => setIsOpen(false)}
          >
            No
          </button>
        </div>

        <button
          className='absolute top-3 right-3 text-gray-600 hover:text-gray-900 cursor-pointer'
          onClick={() => setIsOpen(false)}
          aria-label='Close modal'
        >
          &#x2715;
        </button>
      </div>
    </div>
  );
};

export default ModalDelete;
