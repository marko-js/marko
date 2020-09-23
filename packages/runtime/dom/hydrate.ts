import { CommentWalker, HydrateInstance } from "../common/types";
import { Renderer } from "./dom";
import { beginBatch } from "./signals";
import { beginHydrate, endHydrate } from "./walker";

const hydrateById: Record<string, Renderer["___hydrate"]> = {};

export function register(id: string, hydrate: Renderer["___hydrate"]) {
  hydrateById[id] = hydrate;
  return hydrate;
}

const doc = document;

export function init(runtimeId = "M") {
  const runtimePrefix = `${runtimeId}$`;
  const componentsVar = `${runtimePrefix}c`;
  const walkerVar = `${runtimePrefix}w`;
  const initialComponents = window[componentsVar];
  const walker: CommentWalker =
    doc[walkerVar] ||
    (doc[walkerVar] = doc.createTreeWalker(
      doc,
      128 /** NodeFilter.SHOW_COMMENT */,
      (() => 1) as any /** NodeFilter.FILTER_ACCEPT */,
      false
    ));

  const fakeArray = (window[componentsVar] = {
    concat: hydrateAll
  });

  if (initialComponents) {
    hydrateAll(initialComponents);
  }

  function hydrateAll(components: HydrateInstance[]) {
    let boundary: Comment | null;

    if (doc.readyState !== "loading") {
      walker.currentNode = doc;
    }

    while ((boundary = walker.nextNode() as Comment)) {
      if (boundary.data.indexOf(runtimePrefix) === 0) {
        walker[boundary.data] = boundary;
      }
    }

    components.forEach(([markerId, componentType, input]) => {
      const startKey = runtimePrefix + markerId;
      const endKey = `${startKey}/`;
      const start = walker[startKey];
      const end = walker[endKey];
      const parentNode = start.parentNode!;
      const hydrate = hydrateById[componentType]!;

      beginHydrate(start);

      try {
        beginBatch();
        hydrate(input);
      } finally {
        parentNode.removeChild(start);
        parentNode.removeChild(end);
        delete walker[startKey];
        delete walker[endKey];
        endHydrate();
      }
    });

    return fakeArray;
  }
}
