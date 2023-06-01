import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppBar } from "./components/AppBar";
import { HomeRoute } from "./routes/HomeRoute";
import { CreateNotepadRoute } from "./routes/CreateNotepadRoute";
import { ViewNotepadRoute } from "./routes/ViewNotepadRoute";
import { NotFoundPage } from "./routes/NotFoundPage";
import { Footer } from "./components/FooterComponent";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <AppBar />
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/create-notepad" element={<CreateNotepadRoute />} />
          <Route path="/view-notepad/:id" element={<ViewNotepadRoute />} />
          <Route path="/not-found-page" element={<NotFoundPage />} />
        </Routes>
        <Footer className={"flex justify-end items-center gap-2  bg-[#222]"} />
      </div>
    </BrowserRouter>
  );
}
