import { carModel } from 'entities/car';
import { carFiltersModel } from 'features/car-filters';
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
  const filteredCarList = useAppSelector(
    carFiltersModel.selectors.filteredCarList
  );
  const isLoading = useAppSelector(carModel.selectors.isLoading);
  const fetchCarList = useAction(carModel.actions.fetchCarList);

  useEffect(() => {
    fetchCarList();
  }, [fetchCarList]);

  return (
    <div className='p-5 h-screen bg-gray-100'>
      <CarFlters columns={columns} />

      <SortableTable
        data={filteredCarList}
        columns={columns}
        loading={isLoading}
        rowsPerPage={3}
      />
    </div>
  );
};
