const Table = () => {
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full border border-gray-200 text-sm'>
        <thead className='bg-gray-100 text-gray-700'>
          <tr>
            <th className='px-4 py-2 text-left border-b'>Item</th>
            <th className='px-4 py-2 text-left border-b'>Description</th>
            <th className='px-4 py-2 text-left border-b'>Time</th>
            <th className='px-4 py-2 text-left border-b'>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className='hover:bg-sky-500'>
            <td className='px-4 py-2 border-b'>Alice</td>
            <td className='px-4 py-2 border-b'>alice@example.com</td>
            <td className='px-4 py-2 border-b'>Active</td>
            <td className='px-4 py-2 border-b'>Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
