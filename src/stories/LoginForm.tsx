import React, { useState } from 'react';

interface LoginFormProps {
  title: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ title }) => {
  const [showResult, setShowResult] = useState(false);

  const formHandler = () => {
    // setShowResult(true);
  };

  return (
    <div>
      <input data-testid="email" />
      <input data-testid="password" />
      <button onClick={formHandler}>Submit</button>
      {showResult && (
        <div>
          Everything is perfect. Your account is ready and we should probably
          get you started!
        </div>
      )}
    </div>
  );
};

export default LoginForm;
