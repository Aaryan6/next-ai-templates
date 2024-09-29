"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useRef } from "react";
import { useChat } from "ai/react";
import { FileSpreadsheet } from "lucide-react";
import { UserMessage, BotMessage } from "./messages-ui";
import { cn } from "@/lib/utils";
import Image from "next/image";
import PromptBox from "./prompt-box";

export function ChatWindow() {
  const bottomScrollRef = useRef<HTMLDivElement>(null);
  const { handleSubmit, handleInputChange, messages, input } = useChat({
    initialMessages: [],
    maxToolRoundtrips: 2,
    api: "/api/chat",
  });

  useEffect(() => {
    bottomScrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <ScrollArea className="h-full w-full flex flex-col px-2">
      <div
        className={cn(
          "mb-4 flex-1 flex flex-col gap-4 max-w-4xl mx-auto pt-10 pb-20"
        )}
      >
        {messages.map((message, index: number) => {
          return (
            <div key={message?.id ?? index}>
              {message.role === "assistant"
                ? message.content.length > 0 && (
                    <BotMessage message={message.content} />
                  )
                : message.role === "user" && (
                    <UserMessage message={message.content} />
                  )}
              <div className="flex justify-end gap-2 mt-2 pr-10">
                {message?.experimental_attachments?.map((attachment, index) => {
                  if (attachment?.contentType?.startsWith("image/")) {
                    return (
                      <Image
                        key={`${message.id}-${index}`}
                        src={attachment.url}
                        width={200}
                        height={200}
                        alt={"attachment"}
                        className="rounded-md"
                      />
                    );
                  } else {
                    return (
                      <div
                        key={`${message.id}-${index}`}
                        className="flex bg-muted px-4 py-2 rounded-lg items-center gap-2 max-w-sm"
                      >
                        <FileSpreadsheet size={16} className="shrink-0" />
                        <p className="text-sm truncate">{attachment.name}</p>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
        <div ref={bottomScrollRef} className="pb-12" />
      </div>
      <PromptBox
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        input={input}
      />
    </ScrollArea>
  );
}
