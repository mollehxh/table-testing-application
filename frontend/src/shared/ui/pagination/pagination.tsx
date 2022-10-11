type PaginationProps = {
  count: number;
  activePage: number;
  onChangePage: (page: number) => void;
};

export const Pagination = ({
  count,
  activePage,
  onChangePage,
}: PaginationProps) => {
  return (
    <nav className='mt-6'>
      <ul className='inline-flex -space-x-px'>
        {Array.from({ length: count }).map((_, idx) => (
          <li key={idx} onClick={() => onChangePage(idx)}>
            {idx + 1 === activePage + 1 ? (
              <a
                href='#'
                aria-current='page'
                className='py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 light:border-gray-700 light:bg-gray-700 light:text-white'
              >
                {idx + 1}
              </a>
            ) : (
              <a
                href='#'
                aria-current='page'
                className='py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 light:bg-gray-800 light:border-gray-700 light:text-gray-400 light:hover:bg-gray-700 light:hover:text-white'
              >
                {idx + 1}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
