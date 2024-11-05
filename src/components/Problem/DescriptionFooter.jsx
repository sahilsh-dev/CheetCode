import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { LockKeyhole, ListTree, MessageCircle, Tag } from "lucide-react";

export default function DescriptionFooter() {
	return (
		<div>
			<Separator />
			<div className="space-y-3 py-4">
				<p>Seen this question in a real interview before?</p>
				<div className="flex gap-3">
					<Button size="sm">Yes</Button>
					<Button size="sm">No</Button>
				</div>
				<div className="flex h-4 gap-2 text-xs">
					<p>Accepted</p>
					<p>210K</p>
					<Separator orientation="vertical" />
					<p>Submissions</p>
					<p>514K</p>
					<Separator orientation="vertical" />
					<p>Acceptance Rate</p>
					<p>40.9%</p>
				</div>
			</div>
			<Accordion type="single" collapsible className="w-full text-sm">
				<AccordionItem value="item-1">
					<AccordionTrigger>
						<div className="flex gap-3">
							<Tag width={16} />
							Topics
						</div>
					</AccordionTrigger>
					<AccordionContent>
						Yes. It adheres to the WAI-ARIA design pattern.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>
						<div className="flex gap-3">
							<LockKeyhole width={16} />
							Companies
						</div>
					</AccordionTrigger>
					<AccordionContent>
						Yes. It comes with default styles that matches the other
						components&apos; aesthetic.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger>
						<div className="flex gap-3">
							<ListTree width={16} />
							Similar Questions
						</div>
					</AccordionTrigger>
					<AccordionContent>
						Yes. It&apos;s animated by default, but you can disable it if you
						prefer.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-4">
					<AccordionTrigger>
						<div className="flex gap-3">
							<MessageCircle width={16} />
							Discussions (91)
						</div>
					</AccordionTrigger>
					<AccordionContent>
						Yes. It&apos;s animated by default, but you can disable it if you
						prefer.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
			<div className="mt-8 text-xs">
				Copyright ©️ 2024 CheetCode All rights reserved
			</div>
		</div>
	);
}
