import { useCallback, useState } from 'react';
import { FiArrowDown } from 'react-icons/fi';
import { Spinner } from 'shared/ui/spinner';

type SortableTableProps = {
  data: any[];
  columns: any[];
  loading?: boolean;
};

type SortOrder = 'ascn' | 'desc';

export const SortableTable = ({
  data,
  columns,
  loading,
}: SortableTableProps) => {
  const [sortColumn, setSortColumn] = useState<any>();
  const [sortOrder, setSortOrder] = useState<SortOrder>('ascn');

  const getSortedData = useCallback(() => {
    const sortedData = data.sort((a, b) =>
      a[sortColumn] > b[sortColumn] ? 1 : -1
    );

    if (sortOrder === 'desc') {
      return sortedData.reverse();
    }

    return sortedData;
  }, [data, sortColumn, sortOrder]);

  return (
    <>
      <div className='w-full rounded-lg shadow overflow-hidden'>
        <table className='w-full '>
          <thead className='bg-gray-50 border-b-2 border-gray-200'>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.dataIndex}
                  className='p-3 text-sm font-semibold tracking-wide text-left '
                >
                  {column.title}{' '}
                  {column.sort && (
                    <button
                      className={`${
                        sortColumn === column.dataIndex && sortOrder === 'desc'
                          ? 'ml-3 p-1 rounded-md hover:bg-slate-300 transition-all rotate-180'
                          : 'ml-3 p-1 rounded-md hover:bg-slate-300 transition-all'
                      }`}
                      onClick={() => {
                        setSortOrder(sortOrder === 'ascn' ? 'desc' : 'ascn');
                        setSortColumn(column.dataIndex);
                      }}
                    >
                      <FiArrowDown />
                    </button>
                  )}
                </th>
              ))}
            </tr>
          </thead>

          {!loading && (
            <tbody className='divide-y divide-gray-100'>
              {getSortedData().map((car) => (
                <tr className='bg-white'>
                  {columns.map((column) => (
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                      {car[column.dataIndex]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          )}
        </table>
        {loading && (
          <div className='flex justify-center p-11'>
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
};
