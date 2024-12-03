import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import CodeBody from "./Code/CodeBody";

export default function CodeSection({ isNoteTabVisible }) {
  return (
    <Tabs defaultValue="code" className="h-[calc(100%-36px)] ">
      <TabsList className="flex justify-start w-full h-9">
        <TabsTrigger value="code" className="px-2 py-1">
          Code
        </TabsTrigger>
        <TabsTrigger
          value="note"
          className={cn("px-2 py-1", !isNoteTabVisible && "hidden")}
        >
          Note
        </TabsTrigger>
      </TabsList>
      <TabsContent value="code" className="h-full">
        <div className="flex flex-col h-full">
          <CodeBody />
        </div>
      </TabsContent>
      <TabsContent value="note" className="h-full">
        <div className="h-full px-4 py-3">
          <Textarea className="h-full border-0" placeholder="Type here..." />
        </div>
      </TabsContent>
    </Tabs>
  );
}
