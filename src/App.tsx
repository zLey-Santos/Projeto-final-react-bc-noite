import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppBar } from "./components/AppBar";
import { HomeRoute } from "./routes/HomeRoute";
import { CreateNotepadRoute } from "./routes/CreateNotepadRoute";

import { ViewNotepadRoute } from "./routes/ViewNotepadRoute";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <AppBar />
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/create-notepad" element={<CreateNotepadRoute />} />
          <Route path="/view-notepad/:id" element={<ViewNotepadRoute />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
