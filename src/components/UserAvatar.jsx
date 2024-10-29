import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function UserAvatar({ className }) {
	return (
		<Button variant="ghost" className={className}>
			<Avatar className="w-6 h-auto">
				<AvatarImage
					src="https://assets.leetcode.com/users/default_avatar.jpg"
					alt="@shadcn"
				/>
				<AvatarFallback>LC</AvatarFallback>
			</Avatar>
		</Button>
	);
}
