import React, { Fragment } from "react";
import styles from "../Modal/Error.module.scss";

const Error = (props) => {

  const closeErorr = () => {
    props.onClose(false);
  };

  return (
    <Fragment>
        <article>
          <h2>Please select a rating</h2>
          <button onClick={closeErorr}>Close</button>
        </article>
        <div className={styles.overlay} onClick={closeErorr}></div>
    </Fragment>
  );
};

export default Error;
