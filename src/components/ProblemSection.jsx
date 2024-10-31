import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircleCheckBig } from "lucide-react";

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
				<div className="p-4">
					<div className="flex justify-between items-center">
						<div>
							<h1 className="text-2xl font-bold">355. Design Twitter</h1>
						</div>
						<div className="flex items-center gap-1">
							<p className="text-sm text-[#a0a8a4]">Solved</p>
							<CircleCheckBig size={14} className="text-green-500" />
						</div>
					</div>
				</div>
			</TabsContent>
			<TabsContent value="editorial"></TabsContent>
		</Tabs>
	);
}
