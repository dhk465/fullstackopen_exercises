const Notification = ({ message, type }) => {

  const normalStyle = {
    color: 'green'
  };

  const errorStyle = {
    color: 'red'
  };
  
  if (message === null) {
    return null;
  }

  return (
    <div 
      style={ type != "error" ? normalStyle : errorStyle }
      className="notification">
      {message}
    </div>
  );

};

export default Notification;