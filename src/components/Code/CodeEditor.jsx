import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditor() {
	const [language, setLanguage] = useState("python");
	const [code, setCode] = useState("# some code");

	const handleLanguageChange = (newLanguage) => {
		setLanguage(newLanguage);
	};

	return (
		<Editor
			height="100%"
			language={language}
			theme="vs-dark"
			value={code}
			options={{
				minimap: { enabled: false },
				quickSuggestions: false,
				scrollBeyondLastLine: false,
			}}
		/>
	);
}
