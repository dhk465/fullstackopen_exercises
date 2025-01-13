import PropTypes from 'prop-types';

const Header = (props) => {
  
  return (
    <h1>
      {props.course}
    </h1>
  );

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
  );
  
};

Part.propTypes = {
  partName: PropTypes.string.isRequired,
  exerciseCount: PropTypes.number.isRequired,
};

const Content = (props) => {

  return (
    <>
      {props.parts.map((part, index) => (
        <Part
          key={index}
          partName={part.name}
          exerciseCount={part.exercises}
        />
      ))}
    </>
  );

};

Content.propTypes = {
  parts: PropTypes.array.isRequired,
};

const Total = (props) => {
  
  let sum = 0;
  props.parts.forEach(part => {
    sum += part.exercises
  });

  return (
    <>
      <p>
        Number of exercises {sum}
      </p>
    </>
  );

};

Total.propTypes = {
  parts: PropTypes.array.isRequired,
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
  const parts = [part1, part2, part3];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );

};

export default App;