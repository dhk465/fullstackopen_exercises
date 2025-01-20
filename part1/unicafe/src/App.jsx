import { useState } from 'react';

const ScoreButton = ({increaseScore, text}) => {
  return (
    <button onClick={increaseScore}>{text}</button>
  );
};

const StatisticLine = ({scores, text}) => {
  return (
    <tr>
      <td>
        {text}
      </td>
      <td>
        {scores}
        {text === 'positive' ? '%' : ''}
      </td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const sum = good + neutral + bad;
  const average = sum ? (good - bad) / sum : 0;
  const positivePercentage = sum ? (good / sum) * 100 : 0;

  return sum < 1 ? (
    <p>No feedback given</p>
  ) : (
    <>
      <table>
        <tbody>
          <StatisticLine scores={good} text="good" />
          <StatisticLine scores={neutral} text="neutral" />
          <StatisticLine scores={bad} text="bad" />
          <StatisticLine scores={sum} text="all" />
          <StatisticLine scores={average} text="average" />
          <StatisticLine scores={positivePercentage} text="positive" />
        </tbody>
      </table>
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
      <h1>give feedback</h1>
      <ScoreButton increaseScore={increaseScore(setGood)} text='good'/>
      <ScoreButton increaseScore={increaseScore(setNeutral)} text='neutral'/>
      <ScoreButton increaseScore={increaseScore(setBad)} text='bad'/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  );
};

export default App;