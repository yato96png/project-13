import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://json-placeholder.mock.beeceptor.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Ошибка загрузки:", error));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Список пользователей</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id}>
            <Link
              to={`/users/${user.id}`}
              className="text-blue-500 hover:underline"
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
