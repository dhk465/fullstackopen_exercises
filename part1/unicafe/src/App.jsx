import { useState } from 'react';

const ScoreButton = ({increaseScore, text}) => {
  return (
    <button onClick={increaseScore}>{text}</button>
  );
};

const Feedback = () => {
  return (
    <>
      <h1>
        give feedback
      </h1>
    </>
  );
};

const Part = ({score, text}) => {
  return (
    <p>
      {text} {score}
    </p>
  );
};

const Statistics = ({good, neutral, bad}) => {
  return (
    <>
      <h1>
        statistics
      </h1>
      <Part score={good} text='good'/>
      <Part score={neutral} text='neutral'/>
      <Part score={bad} text='bad'/>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseScore = (setter) => () => {
    setter((value) => value + 1);
  };

  return (
    <>
      <Feedback />
      <ScoreButton increaseScore={increaseScore(setGood)} text='good'/>
      <ScoreButton increaseScore={increaseScore(setNeutral)} text='neutral'/>
      <ScoreButton increaseScore={increaseScore(setBad)} text='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  );
};

export default App;