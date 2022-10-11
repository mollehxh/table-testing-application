import { useAction } from 'shared/lib/redux-std';
import { carFiltersModel } from '../model';

type CarFltersProps = {
  columns: any[];
};

export const CarFlters = ({ columns }: CarFltersProps) => {
  const setFilterColumn = useAction(carFiltersModel.actions.setFilterColumn);
  const setFilterAction = useAction(carFiltersModel.actions.setFilterAction);
  const setFilterValue = useAction(carFiltersModel.actions.setFilterValue);

  return (
    <div className='mb-6 flex gap-3'>
      <select
        onChange={(evt) => {
          setFilterColumn(evt.currentTarget.value);
        }}
        className='rounded-sm border border-gray-200 py-1 px-2'
      >
        {columns
          .filter((column) => column.dataIndex !== 'date')
          .map((column) => (
            <option key={column.dataIndex} value={column.dataIndex}>
              {column.title}
            </option>
          ))}
      </select>
      <select
        onChange={(evt) => {
          setFilterAction(evt.currentTarget.value);
        }}
        className='rounded-sm border border-gray-200 py-1 px-2'
      >
        <option value='contains'>Содержит</option>
        <option value='equals'>Равно</option>
        <option value='more'>Больше</option>
        <option value='less'>Меньше</option>
      </select>
      <input
        onChange={(evt) => setFilterValue(evt.currentTarget.value)}
        className='rounded-sm border border-gray-200 py-1 px-2'
        type='text'
      />
    </div>
  );
};
