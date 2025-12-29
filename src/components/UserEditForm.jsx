import { useState,useEffect } from "react";

export default function UserEditForm({ user, onUpdate }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const submitHandler = (e) => {
    e.preventDefault();

    const updatedUser = {
      ...user,
      name,
      email,
    };
    onUpdate(updatedUser);
  };

  return (
    <form onSubmit={submitHandler} className="space-y-3">
      <input type="text"
        className="border p-2 w-full rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="email"
        className="border p-2 w-full rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Update User
      </button>
    </form>
  );
}
