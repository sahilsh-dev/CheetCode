import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/testcase-tabs";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";

const testcaseData = [
	[
		`["Twitter","postTweet","getNewsFeed","follow","postTweet","getNewsFeed","unfollow","getNewsFeed"]`,
		"[[],[1,5],[1],[1,2],[2,6],[1],[1,2],[1]]",
	],
	[`["Twitter","postTweet","postTweet","getNewsFeed"]`, "[[],[1,5],[1,3],[1]]"],
	[`["Twitter","getNewsFeed"]`, "[[],[1]]"],
];

export default function TestsBody() {
	return (
		<div className="px-5 py-4">
			<Tabs defaultValue="case-1">
				<TabsList className="flex justify-start w-full h-9 gap-4 mb-4">
					<TabsTrigger value="case-1">Case 1</TabsTrigger>
					<TabsTrigger value="case-2">Case 2</TabsTrigger>
					<TabsTrigger value="case-3">Case 3</TabsTrigger>
					<Plus
						className="text-muted hover:text-inherit hover:cursor-pointer"
						width={16}
					/>
				</TabsList>
				{testcaseData.map((data, index) => (
					<TabsContent
						key={index}
						value={`case-${index + 1}`}
						className="h-full"
					>
						<div className="flex flex-col gap-4 h-full font-mono break-words">
							<div className="bg-muted p-3 rounded-lg">{data[0]}</div>
							<div className="bg-muted p-3 rounded-lg">{data[1]}</div>
						</div>
					</TabsContent>
				))}
			</Tabs>
		</div>
	);
}
