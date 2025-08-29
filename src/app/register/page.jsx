"use client";

import { registerUser } from "../actions/auth/registerUser";

export default function RegisterPage() {
  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;

    const payload = { username, password };

    const result = await registerUser(payload);

    console.log(result);

    console.log(username, password);
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="username"
          placeholder="User Name"
          className="bg-white"
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="bg-white"
        />
        <br />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
}
