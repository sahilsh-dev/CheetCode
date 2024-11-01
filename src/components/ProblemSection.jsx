import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircleCheckBig, Tag, Lock } from "lucide-react";
import { Button } from "./ui/button";
import ProblemText from "./ProblemText";

export default function ProblemSection() {
	return (
		<Tabs defaultValue="description" className="w-full">
			<TabsList className="flex justify-start w-full h-9">
				<TabsTrigger value="description" className="text-sm px-2 py-1">
					Description
				</TabsTrigger>
				<TabsTrigger value="editorial" className="text-sm px-2 py-1">
					Editorial
				</TabsTrigger>
				<TabsTrigger value="solutions" className="text-sm px-2 py-1">
					Solutions
				</TabsTrigger>
				<TabsTrigger value="submissions" className="text-sm px-2 py-1">
					Submissions
				</TabsTrigger>
			</TabsList>
			<TabsContent value="description">
				<div className="flex flex-col p-4">
					<div className="flex justify-between items-center">
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
					<ProblemText />
				</div>
			</TabsContent>
			<TabsContent value="editorial"></TabsContent>
		</Tabs>
	);
}
