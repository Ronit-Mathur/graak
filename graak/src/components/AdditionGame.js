import React, { Component } from "react";
import quizQuestions from "../api/additionQuestions";
import Quiz from "./Quiz";
import Result from "./AdditionResult";
import "../Styles/AdditionGame.css";
import { useAuth } from "react-use-auth";
//const Database = require('better-sqlite3');
//const Database = require('sqlite3');
class AdditionGame extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {},
      result: "",
      correctNum: 0,
    };
    
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    const { authResult } = useAuth;
    //const userId = authResult.idToken;
    
    //const db = new Database('userData.db', { verbose: console.log });
    
    //db.run("CREATE TABLE IF NOT EXISTS data(userId INTEGER NOT NULL, username TEXT NOT NULL, score INTEGER NOT NULL");
    //const row = db.prepare('SELECT * FROM users WHERE id = ?').get(userId); // user id
    //console.log(row.id, row.name, row.score);
  }
  
  
  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0],
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1,
      },
      answer: answer,
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: "",
    });
  }

  setResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const correctAnswers = answersCount["correct"];
    this.setState({correctNum: correctAnswers.length });
    if (answersCount["incorrect"] == 10) {
      this.setState({ result: "0" });
    } else {
      this.setState({ result: "" + correctAnswers });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    
    console.log("User Gains " + this.state.correctNum + " Points" ); // answersCount ends
    //let insertData = db.prepare("INSERT INTO data VALUES(?,?)");
    
    return <Result quizResult={this.state.result} />;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Addition Game</h2>
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default AdditionGame;
