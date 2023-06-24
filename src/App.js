import React, { useState, useEffect } from "react";
import "./index.css";
import Pagination from "./components/Pagination";
import toast from "react-hot-toast";
import Modal from "./components/Modal";
import Table from "./components/Table";
import Adduser from "./components/Adduser";
import Notification from "./components/Notification";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const [userData, setUserData] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });
  const [editKey, setEditKey] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const addUser = (e) => {
    e.preventDefault();

    const newObj = {
      id: userData.length + 1,
      name: name,
      email: email,
      phone: phone,
      profession: profession,
    };

    setShowModal(false);
    setUserData([...userData, newObj]);
    toast.success("User added successfully!", {
      position: "top-center",
    });
    setName("");
    setEmail("");
    setPhone("");
    setProfession("");
  };

  const deleteUser = (id) => {
    const result = userData.filter((elm) => {
      if (id !== elm.id) {
        return elm;
      }
    });
    setUserData(result);
    toast.success("deleted!", {
      position: "top-center",
    });
  };

  const editModal = (key) => {
    setShowModal(true);
    setEdit(true);
    const getUsers = localStorage.getItem("users");
    const getCurrentUser = JSON.parse(getUsers).filter((elm) => {
      if (key === elm.id) {
        return elm;
      }
    });
    const [values] = getCurrentUser;
    const { id, name, email, phone, profession } = values;
    setEditKey(id);
    setName(name);
    setEmail(email);
    setPhone(phone);
    setProfession(profession);
  };

  function updateUser(e) {
    const getUsers = JSON.parse(localStorage.getItem("users"));
    const getCurrentUser = getUsers.map((elm) => {
      if (editKey === elm.id) {
        return {
          id: editKey,
          name: name,
          email: email,
          phone: phone,
          profession: profession,
        };
      } else {
        return elm;
      }
    });
    setUserData(getCurrentUser);
    toast.success("User edited successfully!", {
      position: "top-center",
    });
    setShowModal(false);
    setName("");
    setEmail("");
    setPhone("");
    setProfession("");
  }

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(userData));
  }, [userData]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, userData.length - 1);

  return (
    <>
      <Notification />
      <Adduser {...{ setShowModal, setEdit }} />
      <Table {...{ userData, editModal, startIndex, endIndex, deleteUser }} />

      <Pagination
        {...{
          currentPage,
          itemsPerPage,
          totalPage,
          setCurrentPage,
          userData,
          setTotalPage,
        }}
      />

      <Modal
        {...{
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
        }}
      />
    </>
  );
}
export default App;
