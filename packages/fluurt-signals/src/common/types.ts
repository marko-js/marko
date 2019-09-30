export type Renderer = ((...input: unknown[]) => void) & {
  input?: string[];
};
