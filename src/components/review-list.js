import React from "react";
import PropTypes from "prop-types";
import { Button, List } from "antd";
import useToggler from "../custom-hooks/use-toggle-open";
import Review from "./review";
import ReviewForm from "./review-form";
import {connect} from "react-redux";
import {loadRestaurantReviews} from "../ac";

function ReviewList({ restaurant, loadRestaurantReviews }) {
  const { isOpen, toggleOpen } = useToggler();
  const body = isOpen && (
    <div>
      <List
        dataSource={restaurant.reviews}
        renderItem={reviewId => (
          <List.Item key={reviewId}>
            <Review id={reviewId} />
          </List.Item>
        )}
      />
      <ReviewForm restaurantId={restaurant.id} />
    </div>
  );
  return (
    <div>
      {body}
      <Button onClick={()=>{toggleOpen(); loadRestaurantReviews();}}>
        {isOpen ? "hide reviews" : "show reviews"}
      </Button>
    </div>
  );
}

ReviewList.propTypes = {
  restaurant: PropTypes.object.isRequired
};

export default connect(null,{loadRestaurantReviews})(ReviewList);
