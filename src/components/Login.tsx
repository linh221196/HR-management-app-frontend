"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Login() {
  const [values, setValues] = useState<{ [key: string]: string } | null>(null);
  const router = useRouter();
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
        <div className="row justify-content-center mt-3">
          <button className="w-25 btn btn-primary">Submit</button>
        </div>
        <div className="row justify-content-center mt-3">
          <button
            type="button"
            className="w-25 btn btn-link"
            onClick={() => router.push("/Register")}>
            Register
          </button>
        </div>
      </div>
    </form>
  );
}
