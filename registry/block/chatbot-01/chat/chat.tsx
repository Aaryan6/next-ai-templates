import { ChatWindow } from "./chat-window";
import Sidebar from "../sidebar/sidebar";

export default async function Chat() {
  return (
    <div className="flex-1 flex h-screen bg-muted">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}
