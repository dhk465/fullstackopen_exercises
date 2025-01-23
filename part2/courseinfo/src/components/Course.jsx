const Header = ({ course }) => {
  return (
    <h2>{course}</h2>
  );
};
  
const Total = ({ parts }) => {
  const init = 0;
  const total = parts.reduce((accumulator, part) => {
    return accumulator + part.exercises
  }, init );

  return (
    <p><strong>total of {total} exercises</strong></p>
  );
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part => <Part key={part.id} part={part}/>)} 
    </>
  );
};

const Course = ({ courses }) => {
  return (
    <>
      {courses.map(course => {
        return (
          <div key={course.id}>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
          </div>
        );
      })}
    </>
  );
};

export default Course;