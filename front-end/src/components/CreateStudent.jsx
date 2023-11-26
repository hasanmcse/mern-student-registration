import React, { useEffect, useState } from "react";
import axios from "axios";
function CreateStudent() {
  const [userForm, setUserForm] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    nationality: '',
    address: '',
    email: '',
    phone: '',
    admissionDate: '',
    courses: '',
  });
  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5050/api/v1/create-student", userForm)
      .then((res) => {
        console.log(res.data);
        setUserForm({
            firstName: '',
            lastName: '',
            gender: '',
            dateOfBirth: '',
            nationality: '',
            address: '',
            email: '',
            phone: '',
            admissionDate: '',
            courses: '',
        });
      });
  };
  useEffect(() => {}, []);
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
            <div className="form-wrapper mt-5">
                <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">firstName</label>
                    <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    id="firstName"
                    value={userForm.firstName}
                    onChange={inputsHandler}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">lastName</label>
                    <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    id="lastName"
                    value={userForm.lastName}
                    onChange={inputsHandler}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">gender</label>
                    <input
                    type="text"
                    className="form-control"
                    name="gender"
                    id="gender"
                    value={userForm.gender}
                    onChange={inputsHandler}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">DateOfBirth</label>
                    <input
                    type="text"
                    className="form-control"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    value={userForm.preventDefaultateOfBirth}
                    onChange={inputsHandler}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nationality</label>
                    <input
                    type="text"
                    className="form-control"
                    name="nationality"
                    id="nationality"
                    value={userForm.nationality}
                    onChange={inputsHandler}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                    type="text"
                    className="form-control"
                    name="address"
                    id="address"
                    value={userForm.address}
                    onChange={inputsHandler}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                    type="text"
                    className="form-control"
                    name="email"
                    id="email"
                    value={userForm.email}
                    onChange={inputsHandler}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                    type="text"
                    className="form-control"
                    name="phone"
                    id="phone"
                    value={userForm.phone}
                    onChange={inputsHandler}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">AdmissionDate</label>
                    <input
                    type="text"
                    className="form-control"
                    name="admissionDate"
                    id="admissionDate"
                    value={userForm.admissionDate}
                    onChange={inputsHandler}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Courses</label>
                    <input
                    type="text"
                    className="form-control"
                    name="courses"
                    id="courses"
                    value={userForm.courses}
                    onChange={inputsHandler}
                    />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">
                    Create Student
                    </button>
                </div>
                </form>
      </div>
            </div>
        </div>
    </div>
  );
}
export default CreateStudent;