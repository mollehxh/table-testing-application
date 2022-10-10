import { carModel } from 'entities/car';
import { CarFlters } from 'features/car-filters/ui/car-flters';
import { useEffect } from 'react';
import { useAction, useAppSelector } from 'shared/lib/redux-std';
import { SortableTable } from 'shared/ui/sorted-table.tsx/sortable-table';

const columns = [
  {
    title: 'Дата',
    dataIndex: 'date',
  },
  {
    title: 'Название',
    dataIndex: 'name',
    sort: true,
  },
  {
    title: 'Количество',
    dataIndex: 'count',
    sort: true,
  },
  {
    title: 'Расстояние',
    dataIndex: 'distance',
    sort: true,
  },
];

export const HomePage = () => {
  const cars = useAppSelector(carModel.selectors.carList);
  const isLoading = useAppSelector(carModel.selectors.isLoading);
  const fetchCarList = useAction(carModel.actions.fetchCarList);

  useEffect(() => {
    fetchCarList();
  }, []);

  return (
    <div className='p-5 h-screen bg-gray-100'>
      <div className='mb-6 flex gap-3'>
        <select className='rounded-sm border border-gray-200 py-1 px-2'>
          {columns
            .filter((column) => column.dataIndex !== 'date')
            .map((column: any) => (
              <option value={''}>{column.title}</option>
            ))}
        </select>
        <select className='rounded-sm border border-gray-200 py-1 px-2'>
          <option value={''}>Равно</option>
          <option value={''}>Содержит</option>
          <option value={''}>Больше</option>
          <option value={''}>Меньше</option>
        </select>
        <input
          className='rounded-sm border border-gray-200 py-1 px-2'
          type='text'
        />
      </div>
      <SortableTable data={cars} columns={columns} loading={isLoading} />
    </div>
  );
};
