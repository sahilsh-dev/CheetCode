import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
	List,
	ChevronLeft,
	ChevronRight,
	Shuffle,
	BugPlay,
	Play,
	CloudUpload,
	LayoutDashboard,
	Settings,
	Flame,
	AlarmClock,
	StickyNote,
} from "lucide-react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";
import logo from "@/assets/logo.png";
import UserAvatar from "./UserAvatar";

export default function MainNav() {
	const getCurrentDateTime = () => {
		const now = new Date();
		return now.toLocaleString("en-US", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		});
	};

	const handleSubmit = () => {
		return new Promise((resolve, reject) =>
			setTimeout(() => reject({ name: "Submit" }), 2000)
		);
	};

	return (
		<TooltipProvider delayDuration={100}>
			<nav className="flex w-full justify-between items-center h-12">
				<div className="flex items-center h-8 space-x-1">
					<div className="flex items-center mx-2">
						<img src={logo} alt="logo" className="w-4" />
					</div>
					<Separator orientation="vertical" className="h-5" />
					<Tooltip>
						<TooltipTrigger>
							<Button variant="ghost">
								<List /> Problem List
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Expand Panel</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger>
							<Button variant="ghost" size="icon">
								<ChevronLeft />
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Prev Question</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger>
							<Button variant="ghost" size="icon">
								<ChevronRight />
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Next Question</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger>
							<Button variant="ghost" size="icon">
								<Shuffle />
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Pick one</p>
						</TooltipContent>
					</Tooltip>
				</div>
				<div className="flex items-center h-8 space-x-2">
					<div className="flex items-center space-x-1">
						<Tooltip>
							<TooltipTrigger>
								<Button size="icon" variant="secondary">
									<BugPlay />
								</Button>
							</TooltipTrigger>
							<TooltipContent>
								<p>Upgrade to premium to use debugger</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger>
								<Button
									variant="secondary"
									onClick={() => {
										toast.success("Code ran successfully", {
											description: getCurrentDateTime(),
											action: {
												label: "Close",
											},
										});
									}}
								>
									<Play /> Run
								</Button>
							</TooltipTrigger>
							<TooltipContent>
								<p>Click Me!</p>
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger>
								<Button
									variant="secondary"
									className="text-[var(--success-green)]"
									onClick={() => {
										toast.promise(handleSubmit, {
											loading: "Pending...",
											success: () => {
												return "Code submitted successfully";
											},
											error: "Did not pass all the test cases",
										});
									}}
								>
									<CloudUpload /> Submit
								</Button>
							</TooltipTrigger>
							<TooltipContent>
								<p>Submit</p>
							</TooltipContent>
						</Tooltip>
					</div>
					<Tooltip>
						<TooltipTrigger>
							<Button variant="secondary" size="icon">
								<AlarmClock />
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Nope, doesnt work</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger>
							<Button variant="secondary" size="icon">
								<StickyNote />
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Take a note</p>
						</TooltipContent>
					</Tooltip>
				</div>
				<div className="flex items-center h-8 space-x-1">
					<Tooltip>
						<TooltipTrigger>
							<Button variant="ghost" size="icon">
								<LayoutDashboard />
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Layouts</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger>
							<Button variant="ghost" size="icon">
								<Settings />
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Settings</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger>
							<Button variant="ghost">
								<Flame /> 0
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Solve today&apos;s daily challenge to refresh your streak</p>
						</TooltipContent>
					</Tooltip>
					<UserAvatar className="!mx-2 rounded-full p-0" />
					<Button>
						<a href="https://github.com/sahilsh-dev/CheetCode/">Premium</a>
					</Button>
				</div>
			</nav>
		</TooltipProvider>
	);
}
