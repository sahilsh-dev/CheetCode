import { Button } from "@/components/ui/button";
import { ThumbsDown, ThumbsUp } from "lucide-react";

export default function ProblemFooter() {
	return (
		<div className="flex border-t my-auto py-[5px]">
			<Button
				variant="secondary"
				size="md"
				className="rounded-none rounded-l-lg mr-[1px]"
			>
				<ThumbsUp /> 4K
			</Button>
			<Button
				variant="secondary"
				size="md"
				className="rounded-none rounded-r-lg"
			>
				<ThumbsDown />
			</Button>
		</div>
	);
}
