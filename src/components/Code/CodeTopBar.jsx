import { Button } from "@/components/ui/button";
import {
	Lock,
	ChartNoAxesGantt,
	Bookmark,
	Braces,
	RotateCcw,
} from "lucide-react";
import LanguageSelector from "./LanguageSelector";

export default function CodeTopBar() {
	return (
		<div className="flex justify-between h-8 p-1">
			<div className="flex gap-1">
				<LanguageSelector />
				<Button variant="ghost" className="h-6 px-2">
					<Lock className="!w-3.5" /> Auto
				</Button>
			</div>
			<div className="flex gap-1">
				<Button variant="ghost" className="h-6 p-1">
					<ChartNoAxesGantt />
				</Button>
				<Button variant="ghost" className="h-6 p-1">
					<Bookmark />
				</Button>
				<Button variant="ghost" className="h-6 p-1">
					<Braces />
				</Button>
				<Button variant="ghost" className="h-6 p-1">
					<RotateCcw />
				</Button>
			</div>
		</div>
	);
}
