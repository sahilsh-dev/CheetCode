import { ThemeProvider } from "./components/ThemeProvider";
import MainNav from "./components/MainNav";
import Workspace from "./components/Workspace";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<main className="px-2 pb-2">
				<MainNav />
				<Workspace />
			</main>
		</ThemeProvider>
	);
}

export default App;
