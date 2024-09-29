import { BotIcon, UserIcon } from "lucide-react";
import { MemoizedReactMarkdown } from "@/lib/markdown";

type UserMessageProps = {
  message: string;
};
export const UserMessage: React.FC<UserMessageProps> = ({ message }) => {
  return (
    <div className="flex-1 relative w-full flex flex-col items-end">
      <div className="flex w-fit justify-start gap-x-2 max-w-[80%]">
        <div
          className={
            "w-fit grid grid-cols-1 gap-2 text-sm leading-5 border py-2.5 px-4 rounded-xl bg-background rounded-se-none whitespace-pre-wrap"
          }
        >
          {message}
        </div>
        <div className="bg-background border w-8 h-8 rounded-full grid place-items-center">
          <UserIcon size={18} className="" />
        </div>
      </div>
    </div>
  );
};

export const BotMessage = ({ message }: { message: string }) => {
  return (
    <div className="flex-1 relative w-full max-w-[80%]">
      <div className="flex w-full justify-start gap-x-2 max-w-4xl mx-auto h-full">
        <div className="bg-background border w-8 h-8 rounded-full grid place-items-center">
          <BotIcon size={18} className="" />
        </div>
        <BotMarkdownMessage>{message}</BotMarkdownMessage>
      </div>
    </div>
  );
};

const BotMarkdownMessage = ({ children }: { children: string }) => {
  return (
    <div
      className={
        "w-fit grid grid-cols-1 gap-2 border text-sm leading-5 bg-background py-1 px-4 rounded-xl rounded-ss-none"
      }
    >
      <MemoizedReactMarkdown
        className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
        components={{
          li: ({ children }) => (
            <li className="list-decimal ml-4">{children}</li>
          ),
          ol: ({ children }) => <ol className="list-disc ">{children}</ol>,
          h1: ({ children }) => (
            <h1 className="text-xl font-bold ">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-lg font-bold ">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-base font-bold ">{children}</h3>
          ),
          blockquote: ({ children }) => (
            <blockquote className="italic bg-white px-4 rounded-md ">
              {children}
            </blockquote>
          ),
          b: ({ children }) => <b className="font-bold">{children}</b>,
          a: ({ children }) => {
            return (
              <a
                className="text-background underline cursor-pointer"
                target="_blank"
              >
                {children}
              </a>
            );
          },
          p: ({ children }) => <p className="my-2">{children}</p>,
        }}
      >
        {children}
      </MemoizedReactMarkdown>
    </div>
  );
};
