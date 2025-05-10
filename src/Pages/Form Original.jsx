import React, { useState } from "react";

const Form = () => {
  const [value, setValue] = useState(
    "NEXT_PUBLIC_MONGODB_URI = mongodb+srv://bhargavkachhadiya1988:12345@bhargav.cmoi6kt.mongodb.net/?retryWrites=true&w=majority&appName=bhargav"
  );
  return (
    <>
      <div
        className="border mx-auto px-md-5 mt-5 px-sm-3"
        style={{ maxWidth: 800 }}
      >
        <div className="px-3 px-sm-0 bg-info">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            id="email"
            placeholder="Enter your email"
          />
          <label htmlFor="email2" className="form-label">
            dkfjsdlkfj
          </label>
          <br />
          <div className="row g-2">
            <div className="col-sm-6">
              <input
                className="form-control"
                type="email"
                id="email2"
                value={value}
                onChange={() => {}}
                placeholder="Enter your email"
                // style={{ maxWidth: 300 }}
              />
            </div>
            <div className="col-sm-6">
              <input
                className="form-control"
                type="range"
                id="email2"
                placeholder="Enter your email"
                style={{ minHeight: "100%" }}
              />
            </div>
            <div className="col-sm-6">
              <input
                className="form-control"
                type="file"
                id="email2"
                placeholder="Enter your email"
                // style={{ maxWidth: 300 }}
              />
            </div>
            <div className="col-sm-6">
              <input
                className="form-control"
                type="color"
                id="email2"
                placeholder="Enter your email"
                style={{ minHeight: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
