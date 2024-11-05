import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";
import ProblemSection from "./ProblemSection";
import TestcaseSection from "./TestcaseSection";

export default function Workspace() {
	return (
		<ResizablePanelGroup direction="horizontal" className="border rounded-lg">
			<ResizablePanel defaultSize={50}>
				<ResizablePanelGroup direction="vertical">
					<ResizablePanel defaultSize={40}>
						<div className="h-full">
							<ProblemSection />
						</div>
					</ResizablePanel>
					<ResizableHandle withHandle />
					<ResizablePanel defaultSize={60}>
						<div className="h-full">
							<TestcaseSection />
						</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			</ResizablePanel>
			<ResizableHandle withHandle />
			<ResizablePanel defaultSize={50}>
				<div className="flex h-full flex-col items-center justify-center p-6">
					<span className="font-semibold">Code Section</span>
				</div>
			</ResizablePanel>
		</ResizablePanelGroup>
	);
}
