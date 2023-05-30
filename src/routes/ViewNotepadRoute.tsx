import { useEffect, useState } from "react";
import toast from "react-simple-toasts";
import { api } from "../api";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import { INotepad } from "../interfaces/INotepad";
import { NotFoundPage } from "../components/NotFoundPage";
import { TrashIconAnimation } from "../components/TrashIconAnimation";

// Estado inicial do notepad
const initialNotepadState: INotepad = {
  id: 0,
  title: "",
  subtitle: "",
  content: "",
  created_at: "",
};

export function ViewNotepadRoute() {
  const { id } = useParams(); // Obtém o ID do notepad da URL
  const navigate = useNavigate(); // Utilizado para navegar entre as rotas
  const [notepad, setNotepad] = useState<INotepad>(initialNotepadState); // Estado do notepad

  useEffect(() => {
    // Função assíncrona para buscar o notepad da API
    async function fetchNotepad() {
      try {
        const response = await api.get(`/notepads/${id}`); // forçar o erro podemos alterar o {id}
        const fetchedNotepad = response.data;
        setNotepad(fetchedNotepad);
      } catch (error) {
        toast(<NotFoundPage />);
      }
    }

    // Chama a função para buscar o notepad quando o componente é montado
    fetchNotepad();
  }, [id]);

  async function handleDeleteNotepad() {
    try {
      const response = await api.delete(`/notepads/${i}`);
      if (response.data.success) {
        toast(`O notepad #${notepad.id} foi deletado com sucesso!`);
        navigate("/ ");
      } else {
        toast("Houve um erro ao deletar o notepad");
      }
    } catch (error) {
      toast("[ERRO]: Impossivel deletar o notepad ");
    }
  }

  return (
    <Card>
      <div className="flex justify-end items-end">
        <Button typeClass="danger" onClick={handleDeleteNotepad}>
          <TrashIconAnimation />
        </Button>
      </div>
      <div className="text-gray-500 mb-2">#{notepad.id}</div>
      <div className="text-gray-500">
        {new Date(notepad.created_at).toLocaleDateString()}
      </div>
      <Title>{notepad.title}</Title>
      <p className="mb-4 text-gray-500">{notepad.subtitle}</p>
      <p>{notepad.content}</p>
    </Card>
  );
}
