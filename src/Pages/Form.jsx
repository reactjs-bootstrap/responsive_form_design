import React, { useState } from "react";

const Form = () => {
  const [value, setValue] = useState(
    "NEXT_PUBLIC_MONGODB_URI = mongodb+srv://bhargavkachhadiya1988:12345@bhargav.cmoi6kt.mongodb.net/?retryWrites=true&w=majority&appName=bhargav"
  );
  return (
    <>
      <div
        className="border px-md-5 px-sm-3 bg-info"
        style={{
          // maxWidth: 800,
          // height: "100vh",
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <div
          className="rounded-2 mt-md-3 p-4 px-sm-4 bg-light"
          style={{ width: 800 }}
        >
          <label htmlFor="fname" className="form-label mt-2">
            First Name :
          </label>
          <input
            className="form-control"
            type="text"
            id="fname"
            placeholder=""
          />
          <label htmlFor="lname" className="form-label mt-2">
            Last Name :
          </label>
          <input
            className="form-control"
            type="text"
            id="lname"
            placeholder=""
          />
          <label htmlFor="fullName" className="form-label mt-2">
            FullName :
          </label>
          <div className="row g-2">
            <div className="col-sm-6">
              <input
                className="form-control"
                type="text"
                id="FirstName"
                placeholder="Enter your FirstName"
              />
            </div>
            <div className="col-sm-6">
              <input
                className="form-control"
                type="text"
                id="LastName"
                placeholder="Enter your LastName"
              />
            </div>
          </div>
          <label htmlFor="email" className="form-label mt-2">
            Email Address :
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            placeholder=""
          />
          <label htmlFor="password" className="form-label mt-2">
            Password :
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            placeholder=""
          />
          <label htmlFor="retype-password" className="form-label mt-2">
            Re-Type Password :
          </label>
          <input
            className="form-control"
            type="password"
            id="retype-password"
            placeholder=""
          />
          <label htmlFor="gender" className="form-label mt-2">
            Gender :
          </label>
          <select class="form-select" id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <label htmlFor="birthdate" className="form-label mt-2">
            Birthdate :
          </label>
          <input className="form-control" type="date" id="birthdate" />
          <label className="form-label mt-2">Select Course :</label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="checkDefault"
            />
            <label class="form-check-label" for="checkDefault">
              MBBS
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="checkChecked"
            />
            <label class="form-check-label" for="checkChecked">
              MD Medicine
            </label>
          </div>
          <label htmlFor="profilePicture" className="form-label mt-2">
            Upload Profile Picture :
          </label>
          <input className="form-control" type="file" id="profilePicture" />
          <label htmlFor="radioButton" className="form-label mt-2">
            Social Account :
          </label>
          <div class="form-check ">
            <input
              class="form-check-input"
              type="radio"
              name="radioDefault"
              id="radioDefault1"
            />
            <label class="form-check-label" for="radioDefault1">
              Facebook
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="radioDefault"
              id="radioDefault2"
            />
            <label class="form-check-label" for="radioDefault2">
              Instagram
            </label>
          </div>
          <label htmlFor="color" className="form-label mt-2">
            Color :
          </label>
          <input
            className="form-control"
            type="color"
            id="color"
            value="#800080"
          />
          <label htmlFor="range" className="form-label mt-2">
            Range :
          </label>
          <input className="form-control" type="range" id="range" value={10} />
          <br />
          <button className="btn btn-secondary">Submit</button>

          <div className="row g-2">
            <div className="col-6">
              <label htmlFor="color" className="form-label mt-2">
                Color :
              </label>
              <input
                className="form-control"
                type="color"
                id="color"
                value="#800080"
              />
            </div>
            <div className="col-6">
              <label htmlFor="range" className="form-label mt-2">
                Range :
              </label>
              <input
                className="form-control"
                type="range"
                id="range"
                value={10}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
