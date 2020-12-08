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
        <div>1) 12 - 5 = 7</div>
        <div>2) 9 - 4 = 5</div>
        <div>3) 6 - 3 = 3</div>
        <div>4) 14 - 8 = 6</div>
        <div>5) 17 - 5 = 12</div>
        <div>6) 5 - 2 = 3</div>
        <div>7) 10 - 4 = 6</div>
        <div>8) 16 - 2 = 14</div>
        <div>9) 18 - 10 = 10</div>
        <div>10) 7 - 6 = 1</div>
      </p>
      <div>
        Play again
      </div>
    </ReactCSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;