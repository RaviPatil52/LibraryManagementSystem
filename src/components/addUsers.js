import { useState } from "react";
import "../styles/addUsers.css";

const AddUsers = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");

  let handleSubmit = (e) => {
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, mobile }),
    });
    alert("added successfully");
  };

  let handleReset = () => {
    setName("");
    setEmail("");
    setMobile("");
  };
  return (
    <section id="section">
     <section className="section-div">
     <div className="add-users">
        <div className="add-users2">
          <h1>Add Users</h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="form1">
              <label htmlFor="">Name</label>
            </div>
            <div className="form2">
              <input
                type="text"
                placeholder="enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form3">
              <label htmlFor="">Email</label>
            </div>
            <div className="form4">
              <input
                type="text"
                placeholder="enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form6">
              <label htmlFor="">Mobile</label>
            </div>
            <div className="form7">
              <input
                type="text"
                placeholder="enter mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="form5">
              <button className="btn1">Submit</button>
              <button className="btn2" onClick={handleReset} type="reset">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
     </section>
    </section>
  );
};

export default AddUsers;
