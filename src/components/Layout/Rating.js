import React, { useEffect, useState } from "react";
import styles from "./Rating.module.scss";
import Card from "../UI/Card";
import icon from "../../assets/images/icon-star.svg";

const Rating = (props) => {
  const ratings = [1, 2, 3, 4, 5];
  const [rate, setRate] = useState(null);

  const submitRating = (e) => {
    e.preventDefault();

    if (rate === null) {
      props.showModalError(true);
      return;
    }

    props.onAddRating(rate);
    props.ratingCompleted(true);
  };
  return (
    <Card>
      <div className={styles.rating}>
        <div className={styles["image-container"]}>
          <img className={styles.image} src={icon} alt="icon star" />
        </div>
        <h1>How did we do?</h1>
        <p className={styles["main-text"]}>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className={styles["rating-list"]}>
          {ratings.map((rating, i) => (
            <button
              onClick={() => setRate(rating)}
              className={`${styles.rate} ${
                rate === rating ? styles.active : ""
              }`}
              key={i}
            >
              {rating}
            </button>
          ))}
        </div>
        <button className={styles.btn} onClick={submitRating}>
          Submit
        </button>
      </div>
    </Card>
  );
};

export default Rating;
