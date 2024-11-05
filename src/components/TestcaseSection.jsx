import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import TestsBody from "./Testcase/TestsBody";

export default function TestcaseSection() {
	return (
		<Tabs defaultValue="tests" className="h-[calc(100%-36px)] ">
			<TabsList className="flex justify-start w-full h-9">
				<TabsTrigger value="tests" className="px-2 py-1">
					Testcase
				</TabsTrigger>
				<TabsTrigger value="test-result" className="px-2 py-1">
					Test Result
				</TabsTrigger>
			</TabsList>
			<TabsContent value="tests">
				<div className="flex flex-col h-full">
					<ScrollArea>
						<TestsBody />
					</ScrollArea>
				</div>
			</TabsContent>
			<TabsContent value="test-result" className="h-full">
				<div className="flex items-center justify-center h-full">
					<p>You must run your code first</p>
				</div>
			</TabsContent>
		</Tabs>
	);
}
