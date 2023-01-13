import React from "react";

const Pagination = ({
  currentPage,
  itemsPerPage,
  totalPage,
  setCurrentPage,
  users,
}) => {
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
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, users.length - 1);
  return (
    <div>
      <nav
        className="flex items-cente bg-white px-4 py-3 sm:px-6 w-10/12 mx-auto"
        aria-label="Pagination"
      >
        <div className="sm:block lg:flex items-center">
          <p className="text-md text-gray-700">
            Showing
            <span className="font-medium text-blue-600">
              &nbsp;{(endIndex-startIndex)+1}
            </span>
            <span className="">
              &nbsp;out of&nbsp;
              <span className="font-medium text-blue-600">{users.length} </span>
            </span>
            results
          </p>
        </div>
        <div className="flex flex-1 justify-center sm:justify-end mt-[30px]">
          <button
            onClick={() => previousPage()}
            className={`${
              currentPage === 1
                ? "bg-gray-300 pointer-events-none text-gray-400"
                : ""
            } relativeinline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50`}
          >
            Previous
          </button>
          <button
            onClick={() => nextPage()}
            className={`${
              currentPage === totalPage
                ? "bg-gray-300 pointer-events-none text-gray-400"
                : ""
            } relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50`}
          >
            Next
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Pagination;
