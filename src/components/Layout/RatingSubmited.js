import React, { useEffect, useState } from "react";
import styles from "./RatingSubmitted.module.scss";
import illustration from "../../assets/images/illustration-thank-you.svg";

import Card from "../UI/Card";

const RatingSubmited = (props) => {
  const [showRating, setShowRating] = useState(null);

  return (
    <Card>
      <section>
        <div className={styles['image-container']}>
          <img src={illustration} alt="illustration card machine" />
        </div>
        <p className={styles['selected-rating']}>
          You selected {props.rating} out of 5
        </p>
        <h1>Thank you!</h1>
        <p className={styles["main-text"]}>
          We appreciate you taking the time to give a rating. If you ever need
          more suppert, don't hesitate to get in touch
        </p>
      </section>
    </Card>
  );
};

export default RatingSubmited;
