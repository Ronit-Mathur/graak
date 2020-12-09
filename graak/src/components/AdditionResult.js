import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Result(props) {
  // props.quizResult -> database
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
        <div>1) 2 + 3 = 5</div>
        <div>2) 4 + 8 = 12</div>
        <div>3) 3 + 9 = 12</div>
        <div>4) 5 + 5 = 10</div>
        <div>5) 6 + 2 = 8</div>
        <div>6) 7 + 10 = 17</div>
        <div>7) 9 + 9 = 18</div>
        <div>8) 3 + 7 = 10</div>
        <div>9) 2 + 4 = 6</div>
        <div>10) 10 + 10 = 20</div>
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