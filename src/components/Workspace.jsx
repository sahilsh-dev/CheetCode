import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";
import ProblemSection from "./ProblemSection";
import TestcaseSection from "./TestcaseSection";
import CodeSection from "./CodeSection";

export default function Workspace() {
	return (
		<ResizablePanelGroup direction="horizontal">
			<ResizablePanel defaultSize={50}>
				<ResizablePanelGroup direction="vertical">
					<ResizablePanel defaultSize={60} className="border rounded-lg">
						<div className="h-full">
							<ProblemSection />
						</div>
					</ResizablePanel>
					<ResizableHandle
						withHandle
						className="my-1 bg-background hover:bg-[var(--color-section-splitter)] transition-all"
					/>
					<ResizablePanel defaultSize={40} className="border rounded-lg">
						<div className="h-full">
							<TestcaseSection />
						</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			</ResizablePanel>
			<ResizableHandle
				withHandle
				className="mx-1 bg-background hover:bg-[var(--color-section-splitter)] transition-all"
			/>
			<ResizablePanel defaultSize={50} className="border rounded-lg">
				<div className="h-full">
					<CodeSection />
				</div>
			</ResizablePanel>
		</ResizablePanelGroup>
	);
}
