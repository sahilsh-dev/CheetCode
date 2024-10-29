import { ThemeProvider } from "./components/ThemeProvider";
import MainNav from "./components/MainNav";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<main>
				<MainNav />
				<h1 className="text-4xl">Hi there</h1>
			</main>
		</ThemeProvider>
	);
}

export default App;
