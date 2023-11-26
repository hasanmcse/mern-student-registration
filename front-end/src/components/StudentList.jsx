import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";
function StudentList() {
  const [userForm, setUserForm] = useState([]);
  const deleteStudent = (_id) => {
    axios
      .delete("http://localhost:5050/api/v1/delete-student/" + _id)
      .then(() => {
        console.log("Data successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:5050/api/v1/list-student")
      .then((res) => {
        setUserForm(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userForm]);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">firstName</th>
            <th scope="col">lastName</th>
            <th scope="col">gender</th>
            <th scope="col">dateOfBirth</th>
            <th scope="col">nationality</th>
            <th scope="col">address</th>
            <th scope="col">email</th>
            <th scope="col">phone</th>
            <th scope="col">admissionDate</th>
            <th scope="col">courses</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userForm.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="row">{user._id}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>@{user.gender}</td>
                <td>@{user.dateOfBirth}</td>
                <td>@{user.nationality}</td>
                <td>@{user.address}</td>
                <td>@{user.email}</td>
                <td>@{user.phone}</td>
                <td>@{user.admissionDate}</td>
                <td>@{user.courses}</td>
                <td>
                  {/* <Link
                    className="btn btn-primary btn-sm me-2"
                    to={"/edit-student/" + user._id}
                  >
                    Edit
                  </Link>  */}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteStudent(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default StudentList;