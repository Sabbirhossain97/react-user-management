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
    title: "",
    email: "",
    role: "",
  });
  const [users, setUser] = useState([
    {
      id: 1,
      firstName: "Sakib",
      lastName: "Hossain",
      title: "Full Stack Developer",
      email: "sakibwebworm85@gmail.com",
      role: "Admin",
    },
    {
      id: 2,
      firstName: "Sabbir",
      lastName: "Hossain",
      title: "Web Developer",
      email: "sabbirshawon1994@gmail.com",
      role: "Editor",
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
      title: "",
      email: "",
      role: "",
    });
  }

  function addUser(event) {
    event.preventDefault();
    let userId = users.length + 1;
    const { firstName, lastName, title, email, role, id } = form;
    const newObj = {
      firstName: firstName,
      lastName: lastName,
      title: title,
      email: email,
      role: role,
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
          title: form.title,
          email: form.email,
          role: form.role,
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
    const { firstName, lastName, email, title, role, id } = form;
    const newObj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      title: title,
      role: role,
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
  //pagination related codes are here
  const [perPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    setTotalPage(Math.ceil(users.length / perPage));
  }, [users]);
  console.log(users.length);
  return (
    <div className="mt-[100px]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center w-10/12 mx-auto">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Users</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the users including their name, title, email and
              role.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
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
          <div className="-my-2 -mx-4 sm:mx-auto lg:mx-auto w-10/12 ">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="shadow-sm ring-1 ring-black ring-opacity-5">
                <table className="min-w-full border-separate">
                  <thead className="bg-gray-500">
                    <tr>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                      >
                        Role
                      </th>
                      <th
                        onClick={() => {}}
                        scope="col"
                        className="sticky top-0 z-10 border-b border-gray-300  bg-gray-50 bg-opacity-75 px-3 py-3.5 text-sm text-center font-semibold text-gray-900 backdrop-blur backdrop-filter"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <TransitionGroup component="tbody" className="bg-white">
                    {users.length < 1 ? (
                      <tr>
                        <td className="whitespace-nowrap border-b border-gray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                          Empty
                        </td>
                      </tr>
                    ) : (
                      users
                        .filter(
                          (item, key) =>
                            key >= (currentPage - 1) * perPage &&
                            key <= perPage * currentPage - 1
                        )
                        .map((user, key) => (
                          <CSSTransition
                            key={user.id}
                            in="true"
                            classNames="slide-vertical"
                            timeout={300}
                          >
                            <tr>
                              <td className="whitespace-nowrap border-b border-gray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                                {user.firstName} {user.lastName}
                              </td>
                              <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden sm:table-cell">
                                {user.title}
                              </td>
                              <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500 hidden lg:table-cell">
                                {user.email}
                              </td>
                              <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500">
                                {user.role}
                              </td>
                              <td className="relative whitespace-nowrap border-b border-gray-200 py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                                <div className="flex justify-center">
                                  <a
                                    onClick={() => removeTodo(user.id)}
                                    className="text-red-700 hover:text-indigo-900"
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
                        ))
                    )}
                  </TransitionGroup>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        perPage={perPage}
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
        <div
          className={`relative z-10 ${showModal ? "" : "hidden"}`}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <form className="space-y-6" onSubmit={addUser}>
                    <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
                      <div>
                        <div>
                          <h3 className="text-lg mb-8 font-medium leading-6 text-gray-900">
                            Personal Information
                          </h3>
                        </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                          <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
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
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
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
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              />
                            </div>

                            <div className="col-span-6 sm:col-span-4">
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
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-4">
                              <label
                                htmlFor="title"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Title
                              </label>
                              <input
                                type="text"
                                onChange={(event) => updateForm(event)}
                                value={form.title}
                                name="title"
                                id="title"
                                required
                                autoComplete="title"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="role"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Role
                              </label>
                              <select
                                id="role"
                                onChange={(event) => updateForm(event)}
                                value={form.role}
                                name="role"
                                required
                                autoComplete="country-name"
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              >
                                <option>Admin</option>
                                <option>Editor</option>
                                <option>User</option>
                              </select>
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
