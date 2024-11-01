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
import logo from "@/assets/logo.png";
import UserAvatar from "./UserAvatar";

export default function MainNav() {
	return (
		<nav className="flex w-full justify-between items-center h-12">
			<div className="flex items-center h-8 space-x-1">
				<div className="flex items-center mx-2">
					<img src={logo} alt="logo" className="w-4" />
				</div>
				<Separator orientation="vertical" className="h-5" />
				<Button variant="ghost">
					<List /> Problem List
				</Button>
				<Button variant="ghost" size="icon">
					<ChevronLeft />
				</Button>
				<Button variant="ghost" size="icon">
					<ChevronRight />
				</Button>
				<Button variant="ghost" size="icon">
					<Shuffle />
				</Button>
			</div>
			<div className="flex items-center h-8 space-x-2">
				<div className="flex items-center space-x-1">
					<Button size="icon" variant="secondary">
						<BugPlay />
					</Button>
					<Button variant="secondary">
						<Play /> Run
					</Button>
					<Button variant="secondary" className="text-[var(--success-green)]">
						<CloudUpload /> Submit
					</Button>
				</div>
				<Button variant="secondary" size="icon">
					<AlarmClock />
				</Button>
				<Button variant="secondary" size="icon">
					<StickyNote />
				</Button>
			</div>
			<div className="flex items-center h-8 space-x-1">
				<Button variant="ghost" size="icon">
					<LayoutDashboard />
				</Button>
				<Button variant="ghost" size="icon">
					<Settings />
				</Button>
				<Button variant="ghost">
					<Flame /> 0
				</Button>
				<UserAvatar className="!mx-2 rounded-full p-0" />
				<Button>Premium</Button>
			</div>
		</nav>
	);
}
