import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
} from "lucide-react";
import logo from "@/assets/logo.png";

export default function MainNav() {
	return (
		<nav className="flex w-full justify-between items-center h-16 px-4">
			<div className="flex items-center h-8 space-x-1">
				<div className="flex items-center mr-2">
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
					<Button variant="secondary">
						<CloudUpload className="caret-green-500" /> Submit
					</Button>
				</div>
				<Button variant="ghost" size="icon">
					<ChevronRight />
				</Button>
				<Button variant="ghost" size="icon">
					<Shuffle />
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
				<Avatar className="w-6 h-auto">
					<AvatarImage
						src="https://assets.leetcode.com/users/default_avatar.jpg"
						alt="@shadcn"
					/>
					<AvatarFallback>CH</AvatarFallback>
				</Avatar>
				<Button>Premium</Button>
			</div>
		</nav>
	);
}
