import { useState } from "react";

import iconLogo from "/icon.png";

import "./App.css";
import Table from "./components/table";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='justify-center flex mb-0'>
        {/* <a href='#' target='_blank'> */}
        <img src={iconLogo} className='logo' alt='logo' />
        {/* </a> */}
      </div>
      <h1 className='text-2xl mb-2'>
        My Alerts{" "}
        <button
          title='Add New Alert'
          className='bg-sky-500 cursor-pointer text-white px-2 py-1 rounded hover:bg-sky-600 transition'
          onClick={() => setIsOpen(true)}
        >
          +
        </button>
      </h1>

      <Table />

      {/* Modal */}
      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative'>
            <h2 className='text-xl font-semibold mb-4'>Modal Title</h2>
            <p className='mb-6'>This is the modal content.</p>

            <button
              className='absolute top-3 right-3 text-gray-600 hover:text-gray-900'
              onClick={() => setIsOpen(false)}
              aria-label='Close modal'
            >
              &#x2715;
            </button>

            <button
              className='bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition'
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
