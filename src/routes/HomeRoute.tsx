import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { Card } from "../components/Card";
import { api } from "../api";
import { INotepad, IResponseGetNotepad } from "../interfaces/INotepad";

const initialNotepads = [];
const initialLoading = true;

export function HomeRoute() {
  const [notepads, setNotepads] = useState<INotepad[]>(initialNotepads);
  const [loading, setLoading] = useState(initialLoading);

  async function fetchNotepads() {
    const response = await api.get<IResponseGetNotepad>("/notepads");
    const fetchedNotepads = response.data.notepads;
    setNotepads(fetchedNotepads);
  }

  useEffect(() => {
    // Carrega os notepads da API quando o componente é montado
    fetchNotepads();
  }, []);

  useEffect(() => {
    // Define o estado de carregamento como falso quando os notepads são buscados com sucesso
    if (notepads.length > 0) {
      setLoading(false);
    }
  }, [notepads]);

  return (
    <Card>
      {loading && (
        <div className="flex justify-center">
          <FaSpinner className="text-4xl animate-spin" />
        </div>
      )}
      {notepads.map(notepad => {
        return (
          <Link
            to={`/view-notepad/${notepad.id}`}
            key={notepad.id}
            className="border-b py-2 cursor-pointer block">
            <div className="text-gray-500 mb-2">#{notepad.id}</div>

            <span className="text-sm text-gray-500">
              {new Date(notepad.created_at).toLocaleDateString()}
            </span>

            <h2 className="text-lg font-bold leading-tight pb-1">
              {notepad.title}
            </h2>

            <p>{notepad.subtitle}</p>
          </Link>
        );
      })}
    </Card>
  );
}
