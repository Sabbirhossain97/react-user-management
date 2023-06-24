import React from "react";
import { Popconfirm } from "antd";

export default function Table({
  userData,
  editModal,
  startIndex,
  endIndex,
  deleteUser,
}) {
  const confirm = (id) => {
    deleteUser(id);
  };

  const cancel = (e) => {
    console.log();
  };
  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex flex-col w-3/2 rounded-md overflow-x-auto ">
          <div className="sm:mx-auto lg:mx-auto w-full md:w-10/12  ">
            <div className="inline-block min-w-full align-middle ">
              <table className="min-w-full border-separate rounded ">
                <thead className="rounded-md border bg-slate-600">
                  <tr>
                    <th className="top-0 text-center z-10 border border-transparent bg-slate-800 bg-opacity-75 py-3.5 pl-4 pr-3 text-sm font-semibold text-white sm:pl-6 ">
                      ID
                    </th>
                    <th className="sticky text-center top-0 z-10 border border-transparent bg-slate-800 bg-opacity-75 py-3.5 px-3 pl-4 pr-3  text-sm font-semibold text-white backdrop-blur backdrop-filter sm:pl-6 ">
                      Name
                    </th>
                    <th className="sticky text-center top-0 z-10  border border-transparent bg-slate-800 bg-opacity-75 pl-4 px-3 py-3.5  text-sm font-semibold text-white backdrop-blur backdrop-filter ">
                      Email
                    </th>
                    <th className="sticky text-center top-0 z-10 border border-transparent bg-slate-800 bg-opacity-75 py-3.5 pl-4 pr-3  text-sm font-semibold text-white backdrop-blur backdrop-filter sm:pl-6 ">
                      Phone
                    </th>
                    <th className="sticky text-center top-0 z-10  border border-transparent bg-slate-800 bg-opacity-75 pl-4 px-3 py-3.5  text-sm font-semibold text-white backdrop-blur backdrop-filter ">
                      Profession
                    </th>

                    <th className="sticky top-0 text-center  z-10 border border-transparent bg-slate-800 bg-opacity-75 px-3 py-3.5 text-sm font-semibold text-white backdrop-blur backdrop-filter">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="w-full">
                  {userData.length > 0 ? (
                    userData
                      .filter(
                        (item, index) =>
                          index >= startIndex && index <= endIndex
                      )
                      .map((user) => (
                        <tr key={user.id}>
                          <td className=" border border-gray-200 pl-4 text-sm text-center font-medium text-gray-900">
                            {user.id}
                          </td>
                          <td className=" text-center border border-gray-200 px-3 pl-4 text-sm font-medium text-gray-900 lg:pl-6">
                            {user.name}
                          </td>
                          <td className="w text-center border overflow-x-auto border-gray-200 px-3 pl-4 text-sm font-medium text-gray-900   ">
                            {user.email}
                          </td>
                          <td className=" text-center border border-gray-200 px-3 pl-4 text-sm font-medium text-gray-900  lg:pl-6 ">
                            {user.phone}
                          </td>
                          <td className=" text-center border border-gray-200 px-3 pl-4 text-sm font-medium text-gray-900  ">
                            {user.profession}
                          </td>

                          <td className="relative  border border-gray-200 py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                            <div className="flex justify-center">
                              <Popconfirm
                                title="Delete"
                                description="Are you sure to delete this ?"
                                onConfirm={() => confirm(user.id)}
                                onCancel={cancel}
                                okText="Yes"
                                cancelText="No"
                              >
                                <a className="border rounded-md p-1 transition hover:border-blue-500  text-red-700 cursor-pointer hover:text-red-800">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </a>
                              </Popconfirm>
                              <a
                                onClick={() => {
                                  editModal(user.id);
                                }}
                                className="ml-2 p-1 transition hover:border-blue-500 border rounded-md text-indigo-600 cursor-pointer hover:text-indigo-900"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                                  <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))
                  ) : (
                    <tr className="bg-white border-b border-gray-200 font-medium text-sm text-gray-900 ">
                      <td className="px-3 py-4 border text-center">Empty</td>

                      <td className="px-3 py-4 border text-center overflow-x-auto">
                        Empty
                      </td>
                      <td className="px-3 py-4 border text-center">Empty</td>
                      <td className="px-3 py-4 border text-center">Empty</td>

                      <td className="px-3 py-4 border text-center">Empty</td>

                      <td className="px-3 py-4 border text-center">N/A</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
