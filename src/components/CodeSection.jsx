import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import CodeTopBar from "./Code/CodeTopBar";

export default function CodeSection() {
	return (
		<Tabs defaultValue="code" className="h-[calc(100%-36px)] ">
			<TabsList className="flex justify-start w-full h-9">
				<TabsTrigger value="code" className="px-2 py-1">
					Code
				</TabsTrigger>
				<TabsTrigger value="note" className="px-2 py-1 hidden">
					Note
				</TabsTrigger>
			</TabsList>
			<TabsContent value="code" className="h-full">
				<div className="flex flex-col h-full">
					<CodeTopBar />
					<Separator />
				</div>
			</TabsContent>
			<TabsContent value="note" className="h-full">
				<div className="h-full px-4 py-3">
					<p>Type here...</p>
				</div>
			</TabsContent>
		</Tabs>
	);
}
