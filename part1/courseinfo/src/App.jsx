import PropTypes from 'prop-types';

const Header = (props) => {
  console.log(props);
  return (
    <h1>
      {props.course}
    </h1>
  )
};

Header.propTypes = {
  course: PropTypes.string.isRequired,
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.partName} {props.exerciseCount}
      </p>
    </>
  )
};

Part.propTypes = {
  partName: PropTypes.string.isRequired,
  exerciseCount: PropTypes.number.isRequired,
};

const Content = (props) => {
  return (
    <>
      <Part partName={props.part1} exerciseCount={props.exercises1} />
      <Part partName={props.part2} exerciseCount={props.exercises2} />
      <Part partName={props.part3} exerciseCount={props.exercises3} />
    </>
  )
};

Content.propTypes = {
  part1: PropTypes.string.isRequired,
  part2: PropTypes.string.isRequired,
  part3: PropTypes.string.isRequired,
  exercises1: PropTypes.number.isRequired,
  exercises2: PropTypes.number.isRequired,
  exercises3: PropTypes.number.isRequired,
};

const Total = (props) => {

  return (
    <>
      <p>
        Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </>
  )
};

Total.propTypes = {
  exercises1: PropTypes.number.isRequired,
  exercises2: PropTypes.number.isRequired,
  exercises3: PropTypes.number.isRequired,
};

const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} part2={part2.name} part3={part3.name} exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
};

export default App;