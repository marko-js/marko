export type Renderer = (...args: unknown[]) => unknown;

export type CommentWalker = TreeWalker & Record<string, Comment>;

export type HydrateInstance = [
  number, // markerId
  string, // componentType
  Record<string, unknown> // inputData
];
