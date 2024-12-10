"use client";
import { useState } from "react";

export default function SignIn() {
  const [values, setValues] = useState<{ [key: string]: string } | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(values, value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <form className="container-fluid " onSubmit={handleSubmit}>
      <div className="col">
        <div className="row mt-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            className="rounded p-1"
            onChange={handleChange}
          />
        </div>
        <div className="row mt-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            required
            className="rounded p-1"
            onChange={handleChange}
          />
        </div>
        <div className="row mt-3">
          <label>User's Name</label>
          <input
            type="text"
            name="username"
            required
            className="rounded p-1"
            onChange={handleChange}
          />
        </div>
        <div className="row justify-content-center mt-3">
          <button className="w-25 btn btn-primary">Submit</button>
        </div>
        <div className="row justify-content-center mt-3 pt-3 border-top text-center">
          <p>Already Have An Account?</p>
          <button className="w-25 btn btn-success">Login</button>
        </div>
      </div>
    </form>
  );
}
