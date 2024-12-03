import { useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import MainNav from "./components/MainNav";
import Workspace from "./components/Workspace";

function App() {
  const [isNoteTabVisible, setNoteTabVisible] = useState(false);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="px-2 pb-2 flex flex-col h-screen">
        <MainNav setNoteTabVisible={setNoteTabVisible} />
        <Workspace isNoteTabVisible={isNoteTabVisible} />
      </main>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
