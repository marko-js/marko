import { Renderer } from "./types";
import {
  nextId,
  writeStartMarker,
  writeEndMarker,
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
      writeStartMarker(nextid, id);
      isUnderComponent = true;
    }
    renderer(input);
    if (isTopLevel) {
      writeEndMarker(nextid, id);
      addComponentToInit(nextid, input || {}, id);
      isUnderComponent = false;
    }
  };
}

export function getRenderer(id: string) {
  return renderersById[id];
}
