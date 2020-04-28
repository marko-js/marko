import { MaybeSignal } from "../dom/index";

export type Renderer = ((
  ...args: MaybeSignal[]
) => void) & {
  input?: string[];
};

export type CommentWalker = TreeWalker & Record<string, Comment>;

export type HydrateInstance = [
  number, // markerId
  string, // componentType
  Record<string, unknown> // inputData
];
