// import { useState } from "react";
// import { Button } from "../components/Button";

// export function CreateNotepadRoute() {
//   const [title, setTitle] = useState("");
//   const [subtitle, setSubtitle] = useState("");
//   const [content, setContent] = useState("");

//   const handleSubmit = event => {
//     event.preventDefault();
//     console.log("title:", title);
//     console.log("subtitle:", subtitle);
//     console.log("content:", content);
//     setTitle("");
//     setSubtitle("");
//     setContent("");
//     alert("O formulário foi enviado com sucesso!");
//   };

//   const handleTitleChange = event => {
//     const newTitle = event.target.value;
//     setTitle(newTitle);
//   };

//   const handleSubtitleChange = event => {
//     const newSubtitle = event.target.value;
//     setSubtitle(newSubtitle);
//   };

//   const handleContentChange = event => {
//     const newContent = event.target.value;
//     setContent(newContent);
//   };

//   const borderStyle =
//     "rounded-lg px-2 py-1 border focus:border-sky-500 outline-none bg-sky-50";

//   return (
//     <div>
//       <form
//         className="flex flex-col gap-2 m-2 md:max-w-screen-md md:mx-auto"
//         onSubmit={handleSubmit}>
//         <h1 className="text-center font-bold text-2xl  my-5">
//           Criar novo notepad
//         </h1>

//         <input
//           type="text"
//           placeholder="Digite o título"
//           className={borderStyle}
//           value={title}
//           onChange={handleTitleChange}
//         />

//         <input
//           type="text"
//           placeholder="Digite o subtítulo"
//           className={borderStyle}
//           value={subtitle}
//           onChange={handleSubtitleChange}
//         />
//         <textarea
//           placeholder="Digite o conteúdo"
//           className={borderStyle}
//           rows={3}
//           value={content}
//           onChange={handleContentChange}
//         />
//         <Button type="submit">Enviar</Button>
//       </form>
//     </div>
//   );
// }
