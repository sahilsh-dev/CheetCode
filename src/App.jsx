import { ThemeProvider } from "./components/ThemeProvider";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<main>
				<h1 className="text-4xl">Hi there</h1>
			</main>
		</ThemeProvider>
	);
}

export default App;
