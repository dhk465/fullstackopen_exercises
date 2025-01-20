import { useState } from 'react';

const AnecdoteDisplay = ({ anecdote, votes }) => {
  return (
    <>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </>
  );
};

const VoteButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>vote</button>
  );
};

const NextButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>next anecdote</button>
  );
};

const TopVote = ({ anecdote, votes }) => {
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </>
  );
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({ 0: 1, 1: 3, 2: 4, 3: 2, 4: 5, 5: 1, 6: 2, 7: 3 });

  const getRandomInt = (max) => {
    let random = Math.floor(Math.random() * max);
    console.log(random);
    return random;
  };

  const vote = (selected) => () => {
    const copy = { ...votes };
    copy[selected] += 1;
    setVotes(copy);
    console.log(copy);
  };

  const findTopVote = () => {
    const voteValues = Object.values(votes);
    const maxVotes = Math.max(...voteValues);
    const index = voteValues.indexOf(maxVotes);
    return index;
  };

  return (
    <>
      <AnecdoteDisplay anecdote={anecdotes[selected]} votes={votes[selected]} />
      <VoteButton onClick={vote(selected)} />
      <NextButton onClick={() => setSelected(getRandomInt(anecdotes.length))} />
      <TopVote anecdote={anecdotes[findTopVote()]} votes={votes[findTopVote()]} />
    </>
  );
};

export default App;