import { Renderer } from "./types";
import {
  nextId,
  markReplaceStart,
  markReplaceEnd,
  addComponentToInit
} from "../html/writer";

const renderersById: Record<string, Renderer> = {};
let isUnderComponent = false;

export function serverRegister(id: string, renderer: Renderer) {
  renderersById[id] = renderer;
  return input => {
    const isTopLevel = !isUnderComponent;
    const nextid = nextId();
    if (isTopLevel) {
      markReplaceStart(nextid);
      isUnderComponent = true;
    }
    renderer(input);
    if (isTopLevel) {
      markReplaceEnd(nextid);
      addComponentToInit(nextid, input || {}, id);
      isUnderComponent = false;
    }
  };
}

export function getRenderer(id: string) {
  return renderersById[id];
}
