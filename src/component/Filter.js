import React from "react";
import { Form } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";

const Filter = ({ setKeyRate, search, keyRate }) => {
  const onStarClick = (nextValue) => {
    setKeyRate(nextValue);
  };
  return (
    <div>
      <Form>
        <Form.Control
          type="text"
          placeholder="search for a movie"
          onChange={(e) => {
            search(e.target.value);
          }}
        />
      </Form>
      <StarRatingComponent
        name="keyRate"
        starCount={5}
        value={keyRate}
        onStarClick={onStarClick}
      />
    </div>
  );
};

export default Filter;