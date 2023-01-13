import React, { useState, useEffect } from "react";
import "./index.css";
import Pagination from "./components/Pagination";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    id: null,
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    phone: "",
  });
  const [users, setUser] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      country: "Unknown",
      email: "johndoe123@gmail.com",
      phone: "N/A",
    },
  ]);

  //Modal Related codes are here

  function modalClose() {
    setShowModal(false);
    setEditMode(false);
    setForm({
      id: null,
      firstName: "",
      lastName: "",
      country: "",
      email: "",
      phone: "",
    });
  }

  function addUser(event) {
    event.preventDefault();
    let userId = users.length + 1;
    const { firstName, lastName, country, email, phone, id } = form;
    const newObj = {
      firstName: firstName,
      lastName: lastName,
      country: country,
      email: email,
      phone: phone,
      id: userId,
    };
    setUser([...users, newObj]);
    modalClose();
  }

  function editModal(user) {
    //open the modal and set editmode to true
    setEditMode(true);
    //and
    setShowModal(true);
    //set edit form
    setForm(user);
  }
  // Crud operation codes are here
  function updateUser(event) {
    event.preventDefault();
    const updatedUser = users.map((user) => {
      if (form.id === user.id) {
        return {
          id: form.id,
          firstName: form.firstName,
          lastName: form.lastName,
          country: form.country,
          email: form.email,
          phone: form.phone,
        };
      } else {
        return user;
      }
    });
    console.log();
    setUser(updatedUser);
    modalClose();
  }

  function updateForm(event) {
    const input = event.target.value;
    const name = event.target.name;
    const { firstName, lastName, email, country, phone, id } = form;
    const newObj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      country: country,
      phone: phone,
      id: id,
    };
    newObj[name] = input;
    setForm(newObj);
  }
  function removeTodo(id) {
    setUser(
      [...users]
        .filter((item) => item.id !== id)
        .map((val, key) => {
          val.id = key + 1;
          return val;
        })
    );
  }
  function limitHandler(e) {
    setItemsPerPage(e.target.value);
  }
  //pagination related codes are here
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    setTotalPage(Math.ceil(users.length / itemsPerPage));
  }, [users]);

  return (
    <div className="mt-[100px]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center w-10/12 mx-auto">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Users</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the user's personal information
            </p>
          </div>
          <div className="flex justify-between">
            <div className="ml-8">
              <label className="bold font-medium">Users limit / page :</label>
              <input
                type="number"
                className="ring-1 rounded-md border-indigo-600 px-2 py-2 font-medium text-sm w-2/5 ml-2"
                onChange={(e) => limitHandler(e)}
              />
            </div>
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Add user
            </button>
          </div>
        </div>
        <div className="mt-8 flex flex-col w-3/2">
          <div className="-my-2 -mx-4 sm:mx-auto lg:mx-auto w-10/12  ">
            <div className="inline-block min-w-full py-2 align-middle ">
              <div className="overflow-x-auto">
                <table className="min-w-full border-separate ">
                  <thead className="bg-slate-300">
                    <tr>
                      <th className="sticky w-1/12 top-0 z-10 text-center border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 sm:table-cell">
                        ID
                      </th>
                      <th className="sticky w-2/12 top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 px-3 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:table-cell">
                        Name
                      </th>
                      <th className="sticky w-3/12 top-0 z-10  border-b border-gray-300 bg-gray-50 bg-opacity-75 pl-4 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">
                        Email
                      </th>
                      <th className="sticky w-2/12 top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:table-cell">
                        Phone
                      </th>
                      <th className="sticky w-2/12 top-0 z-10  border-b border-gray-300 bg-gray-50 bg-opacity-75 pl-4 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">
                        Country
                      </th>

                      <th
                        onClick={() => {}}
                        className="sticky top-0 z-10 border-b border-gray-300  bg-gray-50 bg-opacity-75 px-3 py-3.5 text-sm text-center font-semibold text-gray-900 backdrop-blur backdrop-filter"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <TransitionGroup component="tbody" className="bg-white">
                    {users.length < 1 && (
                      <tr>
                        <td className="whitespace-nowrap border-b border-gray-200 pl-4 py-4 text-sm text-center font-medium text-gray-900">
                          Empty
                        </td>
                        <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 pl-4 text-sm font-medium text-gray-900 lg:pl-6">
                          Empty
                        </td>
                        <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 pl-4 text-sm font-medium text-gray-900 hidden lg:table-cell">
                          Empty
                        </td>
                        <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 pl-4 text-sm font-medium text-gray-900 hidden lg:pl-6 sm:table-cell">
                          Empty
                        </td>
                        <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 pl-4 text-sm font-medium text-gray-900 hidden sm:table-cell">
                          Empty
                        </td>
                        <td className="relative whitespace-nowrap border-b border-gray-200 py-4 pr-4 pl-3 text-center text-sm font-medium sm:pr-6 lg:pr-8">
                          N/A
                        </td>
                      </tr>
                    )}

                    {users
                      .filter(
                        (item, key) =>
                          key >= (currentPage - 1) * itemsPerPage &&
                          key <= itemsPerPage * currentPage - 1
                      )
                      .map((user, key) => (
                        <CSSTransition
                          key={user.id}
                          in="true"
                          classNames="slide-vertical"
                          timeout={300}
                        >
                          <tr>
                            <td className="whitespace-nowrap border-b border-gray-200 pl-4 py-4 text-sm text-center font-medium text-gray-900">
                              {user.id}
                            </td>
                            <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 pl-4 text-sm font-medium text-gray-900 lg:pl-6">
                              {user.firstName} {user.lastName}
                            </td>
                            <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 pl-4 text-sm font-medium text-gray-900 hidden lg:table-cell">
                              {user.email}
                            </td>
                            <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 pl-4 text-sm font-medium text-gray-900 hidden lg:pl-6 sm:table-cell">
                              {user.phone}
                            </td>
                            <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 pl-4 text-sm font-medium text-gray-900 hidden sm:table-cell">
                              {user.country}
                            </td>

                            <td className="relative whitespace-nowrap border-b border-gray-200 py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                              <div className="flex justify-center">
                                <a
                                  onClick={() => removeTodo(user.id)}
                                  className="text-red-700 hover:text-red-800"
                                >
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
                                <a
                                  onClick={() => {
                                    editModal(user);
                                  }}
                                  className="text-indigo-600 hover:text-indigo-900"
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
                        </CSSTransition>
                      ))}
                  </TransitionGroup>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalPage={totalPage}
        setCurrentPage={setCurrentPage}
        users={users}
      />
      <CSSTransition
        in={showModal}
        timeout={300}
        classNames="Transition"
        unmountOnExit
      >
        <div className={`relative z-10 ${showModal ? "" : "hidden"}`}>
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-4 pb-4 text-left shadow-xl transition-all ">
                <div>
                  <form className="space-y-6" onSubmit={addUser}>
                    <div className="bg-white px-2 py-2  sm:rounded-lg sm:p-6">
                      <div>
                        <div>
                          <h3 className="text-lg mb-8 font-medium leading-6 text-gray-900">
                            Personal Information
                          </h3>
                        </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                          <div className="grid grid-cols-8 gap-6">
                            <div className="col-span-4 ">
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                First Name
                              </label>
                              <input
                                onChange={(event) => updateForm(event)}
                                value={form.firstName}
                                type="text"
                                name="firstName"
                                id="first-name"
                                required
                                autoComplete="given-name"
                                className="ring-1 ring-slate-200 mt-1 px-2 block w-full h-8 rounded-md border-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              />
                            </div>

                            <div className="col-span-4 ">
                              <label
                                htmlFor="last-name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Last Name
                              </label>
                              <input
                                onChange={(event) => updateForm(event)}
                                value={form.lastName}
                                type="text"
                                name="lastName"
                                id="last-name"
                                required
                                autoComplete="family-name"
                                className="ring-1 ring-slate-200 mt-1 block w-full px-2 h-8 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              />
                            </div>

                            <div className="col-span-8">
                              <label
                                htmlFor="email-address"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Email Address
                              </label>
                              <input
                                type="text"
                                onChange={(event) => updateForm(event)}
                                value={form.email}
                                name="email"
                                id="email-address"
                                required
                                autoComplete="email"
                                className="ring-1 ring-slate-200 mt-1 block w-full px-2 h-8 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              />
                            </div>
                            <div className="col-span-4 ">
                              <label
                                htmlFor="country"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Country
                              </label>
                              <input
                                type="text"
                                onChange={(event) => updateForm(event)}
                                value={form.country}
                                name="country"
                                id="country"
                                required
                                autoComplete="country"
                                className="ring-1 ring-slate-200 mt-1 block w-full px-2 h-8 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              />
                            </div>
                            <div className="col-span-4">
                              <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Phone
                              </label>
                              <input
                                type="tel"
                                onChange={(event) => updateForm(event)}
                                value={form.phone}
                                name="phone"
                                id="phone"
                                required
                                autoComplete="phone"
                                className="ring-1 ring-slate-200 mt-1 block w-full px-2 h-8 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={() => modalClose()}
                        type="button"
                        className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Cancel
                      </button>
                      {editMode ? (
                        <button
                          onClick={(event) => updateUser(event)}
                          type="submit"
                          className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Update
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
export default App;
