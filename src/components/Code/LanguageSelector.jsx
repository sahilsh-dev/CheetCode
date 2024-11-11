import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export default function LanguageSelector() {
	return (
		<div>
			<Select>
				<SelectTrigger className="w-fit h-6">
					<SelectValue placeholder="Python3" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="python" className="h-6">
						Python
					</SelectItem>
					<SelectItem value="javascript" className="h-6">
						Javascript
					</SelectItem>
					<SelectItem value="java" className="h-6">
						Java
					</SelectItem>
					<SelectItem value="cpp" className="h-6">
						C++
					</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
}
