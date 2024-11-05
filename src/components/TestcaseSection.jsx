import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "./ui/scroll-area";

export default function ProblemSection() {
	return (
		<Tabs defaultValue="testcase" className="h-full">
			<TabsList className="flex justify-start w-full h-9">
				<TabsTrigger value="testcase" className="text-sm px-2 py-1">
					Testcase
				</TabsTrigger>
				<TabsTrigger value="test-result" className="text-sm px-2 py-1">
					Test Result
				</TabsTrigger>
			</TabsList>
			<TabsContent
				value="testcase"
				className="h-[calc(100%-36px)] flex flex-col"
			>
				<ScrollArea></ScrollArea>
			</TabsContent>
			<TabsContent value="test-result">
				<div>You must run your code first</div>
			</TabsContent>
		</Tabs>
	);
}
