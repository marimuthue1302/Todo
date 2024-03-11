import React, { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert(false, type, msg);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [list, type, msg, removeAlert]);

  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  );
}

export default Alert;
