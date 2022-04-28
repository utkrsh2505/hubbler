import React from "react";
import { useState } from "react";
import styles from "./home.module.css";
import { Middle } from "./Middle";

const Home = () => {
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };
  return (
    <>
      <div className={styles.head}>
        <div className={styles.nav}>
          {isEdit ? (
            <button onClick={handleEdit}>Edit</button>
          ) : (
            <button onClick={handleEdit}>Done</button>
          )}
        </div>
        <Middle editStatus={isEdit} />
      </div>
    </>
  );
};

export { Home };
