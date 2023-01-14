import React, { useEffect } from "react";

const Pagination = ({
  currentPage,
  itemsPerPage,
  totalPage,
  setCurrentPage,
  users,
  setTotalPage,
}) => {
  useEffect(() => {
    setTotalPage(Math.ceil(users.length / itemsPerPage));
  }, [itemsPerPage, users.length]);

  let paginationArray = [];
  for (let i = 1; i <= totalPage; i++) {
    paginationArray.push(i);
  }

  function nextPage() {
    if (currentPage !== totalPage) {
      setCurrentPage((e) => e + 1);
    }
  }
  function previousPage() {
    if (currentPage !== 1) {
      setCurrentPage((e) => e - 1);
    }
  }
  //for total items showing in current page

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, users.length - 1);

  return (
    <div>
      <nav className="flex items-cente bg-white px-4 py-3 sm:px-6 w-10/12 mx-auto">
        <div className="sm:block lg:flex items-center">
          <p className="text-md text-gray-700">
            Showing
            <span className="font-medium text-blue-600">
              &nbsp;{endIndex - startIndex + 1}
            </span>
            <span>
              &nbsp;out of&nbsp;
              <span className="font-medium text-blue-600">{users.length} </span>
            </span>
            results
          </p>
        </div>
        <div className="flex flex-1 justify-center sm:justify-end mt-[20px] h-[40px]">
          <button
            onClick={() => previousPage()}
            className={`${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed text-gray-400"
                : ""
            } relativeinline-flex items-center rounded-md border border-gray-300 bg-white mr-4 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50`}
          >
            Previous
          </button>
          {paginationArray.map((item, key) => (
            <p
              key={key}
              onClick={() => {
                setCurrentPage(item);
              }}
              className={`${
                currentPage === item
                  ? "bg-blue-600 text-white px-4 py-2 text-center font-medium rounded-md cursor-pointer mr-2"
                  : "px-4 py-2 font-medium text-blue-600 border border-gray-200 rounded-md cursor-pointer mr-2 hover:bg-blue-600 hover:text-white"
              }`}
            >
              {item}
            </p>
          ))}
          <button
            onClick={() => nextPage()}
            className={`${
              currentPage === totalPage
                ? "bg-gray-300 cursor-not-allowed text-gray-400"
                : ""
            } relative ml-2 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50`}
          >
            Next
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Pagination;
