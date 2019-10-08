import { Renderer } from "./types";

const renderersById: Record<string, Renderer> = {};

export function register(id: string, renderer: Renderer) {
  renderersById[id] = renderer;
  return renderer;
}

export function getRenderer(id: string) {
  return renderersById[id];
}
