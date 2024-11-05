import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "./ui/scroll-area";
import DescriptionHeader from "./DescriptionHeader";
import DescriptionBody from "./DescriptionBody";
import DescriptionFooter from "./DescriptionFooter";
import ProblemFooter from "./ProblemFooter";

export default function ProblemSection() {
	return (
		<Tabs defaultValue="description" className="h-[calc(100%-36px)] ">
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
			<TabsContent value="description" className="h-full">
				<div className="flex flex-col h-full">
					<ScrollArea>
						<div className="flex flex-col p-4 h-full">
							<DescriptionHeader />
							<DescriptionBody />
							<DescriptionFooter />
						</div>
					</ScrollArea>
					<ProblemFooter />
				</div>
			</TabsContent>
			<TabsContent value="editorial">Editorial</TabsContent>
		</Tabs>
	);
}
