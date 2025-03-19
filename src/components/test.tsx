import React, { useState } from 'react';

const PasswordEntry = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  const validatePassword = (pwd: string, confirmPwd: string) => {
    const validationErrors = [];

    if (pwd.length < 6) validationErrors.push('Password must be at least 6 characters.');
    if (!/[A-Z]/.test(pwd)) validationErrors.push('Password must contain at least one uppercase character.');
    if (!/[a-z]/.test(pwd)) validationErrors.push('Password must contain at least one lowercase character.');
    if (!/[0-9]/.test(pwd)) validationErrors.push('Password must contain at least one number.');
    if (!/[!@#$%^&*()_\-+={[\]}|:;"'<,>.]/.test(pwd)) validationErrors.push('Password must contain at least one special character.');
    if (pwd !== confirmPwd) validationErrors.push('Passwords do not match.');

    return validationErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validatePassword(password, confirmPassword);

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setMessage('');
    } else {
      setErrors([]);
      setMessage('Password entry successful! ✅');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-2xl shadow-xl bg-white mt-10">
      <h2 className="text-2xl font-bold mb-4">Create Your Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold mt-4"
        >
          Submit
        </button>

        {message && (
          <p className="text-green-600 font-medium mt-4 text-center">{message}</p>
        )}

        {errors.length > 0 && (
          <div className="mt-4 bg-red-100 p-3 rounded-xl">
            <h4 className="font-semibold text-red-600 mb-2">Validation Errors:</h4>
            <ul className="list-disc pl-5 text-red-700">
              {errors.map((err, index) => (
                <li key={index}>{err}</li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
};

export default PasswordEntry;
