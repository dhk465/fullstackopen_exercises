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

const Opinion = ({score, text}) => {
  return (
    <p>
      {text} {score}
    </p>
  );
};

const Calculate = ({scores}) => {
  let sum = 0;

  scores.forEach(score => {
    sum += score;
  });

  let weightedTotal = scores[0] + (scores[2] * -1);
  
  return (
    <>
      <p>
        all {sum}
      </p>
      <p>
        average {(sum == 0) ? 0 : (weightedTotal / sum)}
      </p>
      <p>
        positive {(sum == 0) ? 0 : (scores[0] / sum * 100)}%
      </p>
    </>
  );
};

const Statistics = ({good, neutral, bad}) => {
  return (
    <>
      <h1>
        statistics
      </h1>
      <Opinion score={good} text='good'/>
      <Opinion score={neutral} text='neutral'/>
      <Opinion score={bad} text='bad'/>
      <Calculate scores={[good, neutral, bad]}/>
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