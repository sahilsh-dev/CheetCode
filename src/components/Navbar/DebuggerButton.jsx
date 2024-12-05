import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { BugPlay, ChevronsRight } from "lucide-react";
import debuggerVideo from "@/assets/premium-debugger.mp4";

export default function DebuggerButton() {
  return (
    <Dialog>
      <DialogTrigger>
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
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Premium Feature - Debugger</DialogTitle>
          <DialogDescription>
            <p>
              Add code bugs quickly with CeetCode Premium Bugger. It's a
              practical tool that makes coding smoother and learning easier.
            </p>
            <div className="h-4"></div>
            <video
              className="rounded-2xl"
              src={debuggerVideo}
              loop
              autoPlay
              playsInline
            ></video>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-between">
          <Button variant="link" className="text-[var(--color-golden-yellow)]">
            Learn More <ChevronsRight />
          </Button>
          <DialogClose asChild>
            <Button type="button">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
