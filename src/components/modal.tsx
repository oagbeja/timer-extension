import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { saveFormData, updateFormData } from "../utils/db";
import { useEffect } from "react";

interface IModal {
  isOpen: boolean;
  setIsOpen: Function;
  editObj: Record<string, any>;
  setEditObj: Function;
}
const Modal = ({ isOpen, setIsOpen, editObj, setEditObj }: IModal) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: editObj });

  const submitValues = async (data: Record<string, any>) => {
    try {
      if (data?.id) {
        await updateFormData(data);
      } else {
        await saveFormData(data);
      }

      setEditObj({});
      toast.success("Alert submitted successfully");
      setIsOpen(false);
    } catch {
      toast.error("Failed to save ");
    }
  };

  useEffect(() => {
    reset(editObj);
  }, [isOpen]);

  return !isOpen ? null : (
    <div className='fixed  inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div className=' max-h-[90vh] overflow-auto bg-white rounded-lg shadow-lg max-w-md w-full text-left p-6 relative'>
        <h2 className='text-xl font-semibold mb-4 text-gray-700'>
          {editObj?.id ? `Update Item ${editObj.item}` : "Create New Alert"}
        </h2>
        {/* <p className='mb-6 text-gray-700'>This is the modal content.</p> */}

        <form
          className='space-y-4'
          onSubmit={handleSubmit((data) => submitValues(data))}
        >
          <div>
            <input
              type='text'
              className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-700 placeholder-gray-400'
              placeholder='Item'
              {...register("item", { required: true })}
            />
            {errors.item && (
              <p className='text-sm text-orange-700'>Item is required.</p>
            )}
          </div>
          <div>
            <input
              type='text'
              className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-700 placeholder-gray-400'
              placeholder='Description'
              {...register("description")}
            />
          </div>
          <div>
            <input
              type='time'
              className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-700 placeholder-gray-400'
              placeholder='Date'
              {...register("date", { required: true })}
            />
            {errors.date && (
              <p className=' text-sm text-orange-700'>Date is required.</p>
            )}
          </div>
          <div className='grid grid-cols-2 gap-2'>
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day) => (
              <label
                key={day}
                className='flex items-center space-x-2 text-gray-700'
              >
                <input
                  type='checkbox'
                  value={day}
                  {...register("days", {
                    validate: (value) =>
                      value.length > 0 || "Please select at least one day",
                  })}
                  className='accent-sky-500'
                />
                <span>{day}</span>
              </label>
            ))}
          </div>
          {errors.days && (
            <p className='text-red-500 text-sm mt-1'>
              At least a day should be picked
            </p>
          )}

          <div className='flex justify-between'>
            <button
              type='submit'
              className='mt-4 w-[40%] bg-sky-300 text-gray-800 px-4 py-2 rounded hover:bg-sky-400 transition cursor-pointer'
            >
              Submit
            </button>
            <button
              className='mt-4 w-[40%] bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition cursor-pointer'
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </form>

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

export default Modal;
