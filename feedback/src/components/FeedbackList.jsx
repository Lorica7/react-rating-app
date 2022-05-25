import React from 'react';
import FeedItem from './feedItem';
import PropTypes from 'prop-types';

function FeedbackList({feedback}) {
  if (!feedback || feedback.length === 0) {
    return <p> No Feedback Yet</p>;
  } else {
    console.log (feedback);
    const myArr = feedback.FeedbackData;
    console.log (myArr);
    return (
      <div className="feedback-list">
        {myArr.map (function (item) {
          return <FeedItem key={item.id} item={item} />;
        })}

      </div>
    );
  }
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf (
    PropTypes.shape ({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
