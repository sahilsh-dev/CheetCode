import { Button } from "@/components/ui/button";
import { List } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProblemsTable from "./ProblemsTable";

export default function ProblemList() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <List /> Problem List
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Problem List</SheetTitle>
          <SheetDescription>
            Select a problem to view its details
          </SheetDescription>
        </SheetHeader>
        <ProblemsTable />
      </SheetContent>
    </Sheet>
  );
}
