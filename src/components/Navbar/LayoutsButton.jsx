import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LayoutsButton() {
  return (
    <Dialog>
      <DialogTrigger>
        <Tooltip>
          <TooltipTrigger>
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
          </TooltipTrigger>
          <TooltipContent>
            <p>Upgrade to premium to use debugger</p>
          </TooltipContent>
        </Tooltip>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Layouts</DialogTitle>
          <DialogDescription>
            <div className="flex w-full h-[200px] items-center justify-center text-[var(--color-golden-yellow)]">
              <p>Upgrade to premium to use custom layouts</p>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
