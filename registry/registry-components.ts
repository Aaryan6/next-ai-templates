import { Registry } from "./schema";

export const ui: Registry = [
  {
    name: "login-01",
    type: "registry:block",
    registryDependencies: ["button", "input", "label", "card"],
    files: ["block/login-01.tsx"],
  },
  {
    name: "chatbot-01",
    type: "registry:block",
    registryDependencies: ["button", "input", "label", "card", "scroll-area"],
    dependencies: ["ai", "lucide-react", "@ai-sdk/openai", "zustand"],
    files: [
      "block/chatbot-01/chat/chat-window.tsx",
      "block/chatbot-01/chat/chat.tsx",
      "block/chatbot-01/chat/prompt-box.tsx",
      "block/chatbot-01/chat/messages-ui.tsx",
      "block/chatbot-01/sidebar/sidebar.tsx",
      "block/chatbot-01/sidebar/profile-menu.tsx",
      "block/chatbot-01/sidebar/sidebar-box.tsx",
      "block/chatbot-01/sidebar/sidebar-toggle.tsx",
      "lib/markdown.ts",
      "hooks/use-sidebar.tsx",
      "api/chat-01.tsx",
    ],
  },
];
