import { Button } from "@/components/ui/button";
import { List } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function ProblemList() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <List /> Problem List
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Problem List</SheetTitle>
          <SheetDescription>
            Select a problem to view its details
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">Problem 1</div>
          <div className="grid grid-cols-4 items-center gap-4">Problem 2</div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
