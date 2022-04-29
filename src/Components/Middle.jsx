import React from "react";
import { v4 as uuid } from "uuid";
import { RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";
import styless from "./middle.module.css";
import styles from "./home.module.css";

export const Middle = ({ editStatus }) => {
  const [data, setData] = useState([{ id: 1, ruleName: "Rule1" }]);
  const [name, setName] = useState("");
  const [arr1, setArr1] = useState([1]);

  const [arr2, setArr2] = useState([1]);

  const handleAddNewRule = () => {
    if (name) {
      const payload = {
        id: uuid(),
        ruleName: name
      };

      setData([...data, payload]);
      setName("");
    }
  };

  const handleAddAnotherAction = () => {
    if (!editStatus) {
      if (arr2.length < 3) {
        setArr2([...arr2, arr2.length + 1]);
      }
    } else {
      alert("change to edit ");
    }
  };
  const handleDelete2 = (_id) => {
    if (!editStatus) {
      setArr2(arr2.filter((item) => item != _id));
    } else {
      alert("change to edit ");
    }
  };

  const handleAddNewButton = () => {
    if (!editStatus) {
      if (arr1.length < 8) {
        setArr1([...arr1, arr1.length + 1]);
      }
    } else {
      alert("change to edit ");
    }
  };

  const handleDelete = (_id) => {
    if (!editStatus) {
      setArr1(arr1.filter((item) => item != _id));
    } else {
      alert("change to edit");
    }
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.main_left}>
          <div style={{ textAlign: "left", marginLeft: "1vh" }}>
            <p>Rules</p>

            {editStatus ? (
              <input
                disabled
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            ) : (
              <input value={name} onChange={(e) => setName(e.target.value)} />
            )}

            <br />
            {data.map((item) => {
              return (
                <p className={styless.rule_input} key={item.id}>
                  {item.ruleName}
                </p>
              );
            })}
            <button onClick={handleAddNewRule}>Add New Rule</button>
          </div>
        </div>
        <div className={styles.main_right}>
          <div style={{ textAlign: "left", marginLeft: "1vh" }}>
            <h4>{name}</h4>

            <p>Button Name</p>
            {editStatus ? (
              <input disabled type="text" />
            ) : (
              <input type="text" />
            )}

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
                  {editStatus ? (
                    <input
                      disabled
                      type="text"
                      placeholder="Type to search  & add"
                    />
                  ) : (
                    <input type="text" placeholder="Type to search  & add" />
                  )}

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
          <div style={{ textAlign: "left", marginLeft: "1vh" }}>
            <p>Perform the following action:</p>

            {arr2.map((i) => {
              return (
                <span key={i} className={styless.another_parent}>
                  <span className={styless.another}>
                    <p>START NEW APP</p>
                    <p style={{ color: "blue" }}>Setup</p>
                  </span>
                  <RiDeleteBinLine
                    onClick={() => {
                      handleDelete2(i);
                    }}
                  />
                </span>
              );
            })}

            <hr />
            <button onClick={handleAddAnotherAction}>Add another action</button>
          </div>
        </div>
      </div>
    </>
  );
};
