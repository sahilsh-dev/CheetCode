import LanguageSelector from "./LanguageSelector";

export default function CodeTopBar() {
	return (
		<div className="flex justify-between h-6">
			<div>
				<LanguageSelector />
			</div>
			<div>Reset</div>
		</div>
	);
}
