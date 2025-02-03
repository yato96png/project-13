import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function UserDetail() {
  const { user_id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://json-placeholder.mock.beeceptor.com/users/${user_id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Ошибка загрузки:", error));
  }, [user_id]);

  if (!user) return <p>Загрузка данных...</p>;

  return (
    <div className="p-6">
      <Link to="/" className="text-blue-500 hover:underline">← Назад</Link>
      <h1 className="text-3xl font-bold my-4">{user.name}</h1>
      <img
        src={user.avatar}
        alt={user.name}
        className="w-40 h-40 rounded-full mb-4"
      />
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Телефон:</strong> {user.phone}</p>
      <p><strong>Компания:</strong> {user.company}</p>
    </div>
  );
}
