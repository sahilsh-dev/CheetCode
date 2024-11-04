import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "./ui/scroll-area";
import DescriptionHeader from "./DescriptionHeader";
import DescriptionText from "./DescriptionText";
import DescriptionFooter from "./DescriptionFooter";
import ProblemFooter from "./ProblemFooter";

export default function ProblemSection() {
	return (
		<Tabs defaultValue="description" className="h-full">
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
			<TabsContent
				value="description"
				className="h-[calc(100%-36px)] flex flex-col"
			>
				<ScrollArea>
					<div className="flex flex-col p-4 h-full">
						<DescriptionHeader />
						<DescriptionText />
						<DescriptionFooter />
					</div>
				</ScrollArea>
				<ProblemFooter />
			</TabsContent>
			<TabsContent value="editorial"></TabsContent>
		</Tabs>
	);
}
