import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";

const USERS_API = "https://jsonplaceholder.typicode.com/users";


const avatarBase = (username) =>
  `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(
    username
  )}&mood=happy`;

// `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(USERS_API);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err?.message || "Failed to load users");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div class="spinner">
        <div class="bounce1">.</div>
        <div class="bounce2">.</div>
        <div class="bounce3">.</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page center">
        <p className="error">Failed to fetch users: {error}</p>
        <button onClick={() => location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <main className="page">
      <div className="container">
      <div className="grid">
        {users.map((u) => (
          <UserCard key={u.id} user={u} avatarUrl={avatarBase(u.username)} />
        ))}
      </div></div>
    </main>
  );
}
