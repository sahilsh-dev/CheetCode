import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import TestsBody from "./TestsBody";

export default function TestcaseSection() {
	return (
		<Tabs defaultValue="tests" className="h-full">
			<TabsList className="flex justify-start w-full h-9">
				<TabsTrigger value="tests" className="text-sm px-2 py-1">
					Testcase
				</TabsTrigger>
				<TabsTrigger value="test-result" className="text-sm px-2 py-1">
					Test Result
				</TabsTrigger>
			</TabsList>
			<TabsContent value="tests" className="h-[calc(100%-36px)] flex flex-col">
				<ScrollArea>
					<TestsBody />
				</ScrollArea>
			</TabsContent>
			<TabsContent value="test-result">
				<div>You must run your code first</div>
			</TabsContent>
		</Tabs>
	);
}
