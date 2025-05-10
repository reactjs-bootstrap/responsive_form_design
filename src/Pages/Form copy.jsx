import React, { useState } from "react";

const Form = () => {
  const [value, setValue] = useState(
    "NEXT_PUBLIC_MONGODB_URI = mongodb+srv://bhargavkachhadiya1988:12345@bhargav.cmoi6kt.mongodb.net/?retryWrites=true&w=majority&appName=bhargav"
  );
  return (
    <>
      <div
        className="bg-info"
        style={{
          display: "flex",
          margin: "0 auto",
          // marginTop: 10,
          // padding: 10,
          justifyContent: "",
        }}
      >
        {/* <label htmlFor="input1">FullName</label> */}
        <input
          style={{ maxWidth: 200 }}
          type="text"
          className="form-control shadow-none"
          id="input1"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div class="input-container">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />
      </div>
    </>
  );
};

export default Form;
