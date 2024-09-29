import { Registry } from "./schema";

export const ui: Registry = [
  {
    name: "login-01",
    type: "registry:block",
    registryDependencies: ["button", "input", "label", "card"],
    files: ["block/login-01.tsx"],
  },
];
