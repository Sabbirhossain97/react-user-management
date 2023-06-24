import React from "react";

export default function Modal({
  addUser,
  showModal,
  setShowModal,
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  profession,
  setProfession,
  edit,
  setEdit,
  updateUser,
}) {
  return (
    <div>
      <div className={`fixed  z-10 ${showModal ? "" : "hidden"}`}>
        <div className="fixed z-10 top-1/4 md:inset-0 overflow-y-auto">
          {showModal ? (
            <div
              onClick={() => {
                setShowModal(false);
                setName("");
                setEmail("");
                setPhone("");
                setProfession("");
              }}
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-out duration-300"
            ></div>
          ) : (
            ""
          )}
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
                          <div className="col-span-8 ">
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Name
                            </label>
                            <input
                              onChange={(e) => setName(e.target.value)}
                              value={name}
                              type="text"
                              name="mame"
                              id="name"
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
                              type="email"
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                              name="email"
                              id="email-address"
                              required
                              autoComplete="email"
                              className="ring-1 ring-slate-200 mt-1 block w-full px-2 h-8 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                          <div className="col-span-4 ">
                            <label
                              htmlFor="profession"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Profession
                            </label>
                            <input
                              type="text"
                              onChange={(e) => setProfession(e.target.value)}
                              value={profession}
                              name="profession"
                              id="profession"
                              required
                              autoComplete="profession"
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
                              onChange={(e) => setPhone(e.target.value)}
                              value={phone}
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
                      onClick={() => {
                        setShowModal(false);
                        setName("");
                        setEmail("");
                        setPhone("");
                        setProfession("");
                        setEdit(false);
                      }}
                      type="button"
                      className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Cancel
                    </button>
                    {edit ? (
                      <button
                        onClick={(event) => updateUser(event)}
                        type="button"
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
    </div>
  );
}
