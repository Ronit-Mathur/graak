import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Result(props) {
  return (
    <ReactCSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        You earned <strong>{props.quizResult}</strong> credits!
      </div>
      <p>
        <div><strong>Correct answers:</strong></div>
        <div>1) In the number 164, '6' is in the tens place.</div>
        <div>2) In the number 527, '5' is in the hundreds place.</div>
        <div>3) In the number 452, '2' is in the ones place.</div>
        <div>4) In the number 390, '9' is in the tens place.</div>
        <div>5) In the number 712, '7' is in the hundreds place.</div>
        <div>6) In the number 834, '4' is in the ones place.</div>
        <div>7) In the number 908, '0' is in the tens place.</div>
        <div>8) In the number 143, '1' is in the hundreds place.</div>
        <div>9) In the number 268, '8' is in the ones place.</div>
        <div>10) In the number 625, '2' is in the tens place.</div>
      </p>
      <div>
      Click on a game to play again!
      </div>
    </ReactCSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;