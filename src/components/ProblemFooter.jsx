import { Button } from "@/components/ui/button";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { MessageCircle, Star, ExternalLink, CircleHelp } from "lucide-react";

export default function ProblemFooter() {
	return (
		<div className="flex my-auto py-1 gap-1 ml-1">
			<div>
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
			<Button variant="ghost" size="md">
				<MessageCircle /> 92
			</Button>
			<Separator orientation="vertical" className="h-5 my-auto" />
			<Button variant="ghost" size="md">
				<Star />
			</Button>
			<Button variant="ghost" size="md">
				<ExternalLink />
			</Button>
			<Button variant="ghost" size="md">
				<CircleHelp />
			</Button>
		</div>
	);
}
