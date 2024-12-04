import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
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
  CirclePlay,
  CirclePause,
  TimerReset,
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
import UserAvatar from "./Navbar/UserAvatar";
import ProblemList from "./Navbar/ProblemList";
import UnsupportedDialog from "./Navbar/UnsupportedDialog";
import { useState } from "react";

export default function MainNav({ setNoteTabVisible }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const handleToggleTimer = () => {
    if (isRunning) {
      if (intervalId) clearInterval(intervalId);
      setIsRunning(false);
    } else {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(id);
      setIsRunning(true);
    }
  };

  const handleResetTimer = () => {
    if (intervalId) clearInterval(intervalId);
    setIsRunning(false);
    setTime(0);
  };

  const handleExpandTimer = () => {
    setIsExpanded((prev) => !prev);
  };

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
      setTimeout(() => reject({ name: "Submit" }), 2000),
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
              <ProblemList />
            </TooltipTrigger>
            <TooltipContent>
              <p>Expand Panel</p>
            </TooltipContent>
          </Tooltip>
          <UnsupportedDialog>
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
          </UnsupportedDialog>
          <UnsupportedDialog>
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
          </UnsupportedDialog>
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
          {!isExpanded && (
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={handleExpandTimer}
                >
                  <AlarmClock />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Show Timer</p>
              </TooltipContent>
            </Tooltip>
          )}
          {isExpanded && (
            <div className="flex items-center space-x-2">
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={handleExpandTimer}
                  >
                    <ChevronLeft />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Hide Timer</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={handleToggleTimer}
                  >
                    {isRunning ? <CirclePause /> : <CirclePlay />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isRunning ? "Pause" : "Start"}</p>
                </TooltipContent>
              </Tooltip>
              <div className="text-sm">{formatTime(time)}</div>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={handleResetTimer}
                  >
                    <TimerReset />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Reset Timer</p>
                </TooltipContent>
              </Tooltip>
            </div>
          )}
          <Tooltip>
            <TooltipTrigger>
              <Button
                variant="secondary"
                size="icon"
                onClick={() => setNoteTabVisible((isVisible) => !isVisible)}
              >
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
