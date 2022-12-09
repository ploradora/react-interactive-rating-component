import { useState } from "react";
import "./App.scss";
import Rating from "./components/Layout/Rating";
import RatingSubmited from "./components/Layout/RatingSubmited";
import Error from "./components/Modal/Error";

function App() {
  const [rating, setRating] = useState(null);
  const [rated, setRated] = useState(false);
  const [showError, setShowError] = useState(false);

  const receivedRating = (r) => {
    setRating(r);
  };
  const showRating = (r) => {
    setRated(r);
  };

  const closeError = (e) => {
    setShowError(false);
  };

  const handleError = (e) => {
    setShowError(e);
  };

  return (
    <div className="App">
      {!rated && (
        <Rating
          onAddRating={receivedRating}
          ratingCompleted={showRating}
          showModalError={handleError}
        />
      )}
      {rated && <RatingSubmited rating={rating} />}
      {showError && <Error onClose={closeError} />}
    </div>
  );
}

export default App;
