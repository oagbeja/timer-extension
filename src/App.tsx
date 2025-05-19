import { useState } from "react";

import iconLogo from "/icon.png";

import "./App.css";
import Table from "./components/table";
import Modal from "./components/modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [editObj, setEditObj] = useState<Record<string, any>>({});

  const handleEdit = (data: Record<string, any>) => {
    setEditObj(data);
    setIsOpen(true);
  };

  return (
    <div className='min-h-[30vh]'>
      <div className='justify-center flex  mb-0'>
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

      <Table reload={isOpen} handleEdit={handleEdit} />

      {/* Modal */}
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        editObj={editObj}
        setEditObj={setEditObj}
      />
    </div>
  );
}

export default App;
