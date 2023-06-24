import React, { useEffect } from "react";

const Pagination = ({
  currentPage,
  itemsPerPage,
  totalPage,
  setCurrentPage,
  userData,
  setTotalPage,
}) => {
  useEffect(() => {
    setTotalPage(Math.ceil(userData.length / itemsPerPage));
  }, [itemsPerPage, userData.length]);

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
  const endIndex = Math.min(startIndex + itemsPerPage - 1, userData.length - 1);

  return (
    <div>
      <nav className="flex items-cente bg-white px-4 py-3 sm:px-6 w-10/12 mx-auto">
        <div className="sm:block lg:flex items-center">
          {/* <p className="text-md text-gray-700">
            Showing
            <span className="font-medium text-blue-600">
              &nbsp;{endIndex - startIndex + 1}
            </span>
            <span>
              &nbsp;out of&nbsp;
              <span className="font-medium text-blue-600">
                {userData.length}{" "}
              </span>
            </span>
            results
          </p> */}
        </div>
        <div className="flex flex-1 justify-center sm:justify-end mt-[20px] h-[40px]">
          <button
            onClick={() => previousPage()}
            className={`${
              currentPage === 1
                ? "bg-white cursor-not-allowed text-gray-400 border border-gray-300 hover:bg-gray-50"
                : "bg-white text-blue-500 border border-blue-500 hover:bg-blue-50"
            } relative inline-flex items-center rounded-md border border-gray-300 bg-white mr-4 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-gray-50`}
          >
            Previous
          </button>
          {paginationArray.length > 0 ? (
            paginationArray.map((item, key) => (
              <p
                key={key}
                onClick={() => {
                  setCurrentPage(item);
                }}
                className={`${
                  currentPage === item
                    ? "border border-blue-500 text-blue-500 px-4 py-2 text-center font-medium rounded-md cursor-pointer mr-2"
                    : "px-4 py-2 font-medium text-gray-600 border border-gray-200 rounded-md cursor-pointer mr-2 hover:border-blue-500 hover:text-blue-500"
                }`}
              >
                {item}
              </p>
            ))
          ) : (
            <p
              className={
                "px-4 py-2 font-medium text-gray-600 border border-gray-200 rounded-md cursor-pointer mr-2 hover:border-blue-500 hover:text-blue-500"
              }
            >
              1
            </p>
          )}
          <button
            onClick={() => nextPage()}
            className={`${
              currentPage === totalPage || userData.length === 0
                ? "bg-white cursor-not-allowed text-gray-400 border border-gray-300"
                : "bg-white text-blue-500 border border-blue-500 hover:bg-blue-50"
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
