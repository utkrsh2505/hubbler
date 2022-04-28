import React from "react";
import axios from "axios";
import { RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";
import styless from "./middle.module.css";
import styles from "./home.module.css";

export const Middle = ({ isEdit }) => {
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [arr1, setArr1] = useState([1]);

  const handleAddNewButton = () => {
    setArr1([...arr1, arr1.length + 1]);
  };

  const handleDelete = (_id) => {
    console.log("id", _id);
    setArr1(arr1.filter((item) => item != _id));
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.main_left}>
          <div>
            <p>Rules</p>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <button>Add New Rule</button>
          </div>
        </div>
        <div className={styles.main_right}>
          <div style={{ textAlign: "left", marginLeft: "1vh" }}>
            <h4>{name}</h4>

            <p>Button Name</p>
            <input type="text" />

            {arr1.map((i) => {
              return (
                <div key={i}>
                  <select>
                    <option>Text</option>
                  </select>
                  <select>
                    <option>Contains</option>
                  </select>
                  <select>
                    <option>Urgent</option>
                  </select>
                  <input type="text" placeholder="Type to search  & add" />
                  <RiDeleteBinLine
                    onClick={() => {
                      handleDelete(i);
                    }}
                  />
                </div>
              );
            })}

            <button
              className={styless.add_new_btn}
              onClick={handleAddNewButton}
            >
              Add New Condition
            </button>
          </div>
          <br />
          <hr />
        </div>
      </div>
    </>
  );
};
