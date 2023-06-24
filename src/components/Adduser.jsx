import React from "react";
import Table from "./Table";

export default function Adduser({ setShowModal, setEdit }) {
  return (
    <div>
      <div className="mt-[100px] ">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="w-3/2 md:w-10/12 mx-auto ">
            <div className="flex flex-row justify-end md:justify-end ">
              <button
                type="button"
                onClick={() => {
                  setShowModal(true);
                  setEdit(false);
                }}
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
              >
                Add user
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
