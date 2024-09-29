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
    registryDependencies: [
      "button",
      "input",
      "label",
      "card",
      "scroll-area",
      "http://localhost:8080/next-ai-templates/public/registry/use-sidebar.json",
      "http://localhost:8080/next-ai-templates/public/registry/markdown.json",
    ],
    dependencies: ["ai", "lucide-react"],
    files: [
      "block/chatbot-01/chat/chat-window.tsx",
      "block/chatbot-01/chat/chat.tsx",
      "block/chatbot-01/chat/prompt-box.tsx",
      "block/chatbot-01/chat/messages-ui.tsx",
      "block/chatbot-01/sidebar/sidebar.tsx",
      "block/chatbot-01/sidebar/profile-menu.tsx",
      "block/chatbot-01/sidebar/sidebar-box.tsx",
      "block/chatbot-01/sidebar/sidebar-toggle.tsx",
    ],
  },
  {
    type: "registry:hook",
    name: "use-sidebar",
    files: ["hooks/use-sidebar.tsx"],
    dependencies: ["zustand"],
  },
  {
    type: "registry:lib",
    name: "markdown",
    files: ["lib/markdown.ts"],
    dependencies: ["react-markdown"],
  },
];
