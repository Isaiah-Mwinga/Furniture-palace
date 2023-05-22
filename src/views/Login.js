import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(true);
  const [user, setUser] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/${isSignup ? 'signup' : 'login'}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      setUser(data.user);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log('Authentication failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full mx-auto p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-6">
          {isSignup ? 'Signup' : 'Login'}
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Email:</label>
            <input
              className="border border-gray-300 rounded px-3 py-2 w-full"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password:</label>
            <input
              className="border border-gray-300 rounded px-3 py-2 w-full"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            {isSignup ? 'Signup' : 'Login'}
          </button>
        </form>
        {user && (
          <div className="mt-4">
            <h2 className="text-lg">
              Welcome, {user.name}! You are now logged in.
            </h2>
          </div>
        )}
        <div className="mt-4">
          <p>
            {isSignup ? 'Already have an account?' : 'Need an account?'}
            <button
              className="text-blue-500 ml-1"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? 'Login' : 'Signup'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;