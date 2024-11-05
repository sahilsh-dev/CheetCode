import { CircleCheckBig, Tag, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DescriptionHeader() {
	return (
		<div>
			<div className="flex justify-between items-center pt-1">
				<div>
					<h1 className="text-2xl font-bold">355. Design Twitter</h1>
				</div>
				<div className="flex items-center gap-1">
					<p className="text-sm text-[#a0a8a4]">Solved</p>
					<CircleCheckBig className="w-[14px] text-[var(--success-green)]" />
				</div>
			</div>
			<div className="flex items-center space-x-2 my-4">
				<Button size="sm">Medium</Button>
				<Button size="sm">
					<Tag className="!w-3" /> Topics
				</Button>
				<Button size="sm">
					<Lock className="!w-3" /> Companies
				</Button>
			</div>
		</div>
	);
}
