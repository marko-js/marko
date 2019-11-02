import { CommentWalker } from "../common/types";
import { getRenderer } from "../common/registry";
import { beginHydrate, endHydrate } from "./dom";
import { beginBatch, endBatch } from "./signals";

const doc = document as Document & { $CW: CommentWalker };

export function init(runtimeId: string = "M") {
  const runtimePrefix = `${runtimeId}$`;
  const inputsVar = `${runtimePrefix}i`;
  const walkerVar = `${runtimePrefix}w`;
  const initialInputs = window[inputsVar];
  const walker: CommentWalker =
    doc[walkerVar] ||
    (doc[walkerVar] = doc.createTreeWalker(
      doc,
      128 /** NodeFilter.SHOW_COMMENT */,
      (() => 1) as any /** NodeFilter.FILTER_ACCEPT */,
      false
    ));

  if (initialInputs) {
    mountAll(initialInputs);
  }

  window[inputsVar] = {
    concat: mountAll
  };

  function mountAll(inputs: Array<Record<string, unknown>>) {
    let boundary: Comment | null;
    let index = 0;

    while ((boundary = walker.nextNode() as Comment)) {
      if (boundary.data.indexOf(runtimePrefix) === 0) {
        walker[boundary.data] = boundary;
      }
    }

    const startBoundaries = Object.keys(walker).filter(key => {
      const endKey = `${key}/`;
      const id = key.slice(runtimePrefix.length);
      const renderer = getRenderer(id);
      return !!renderer && !!walker[endKey];
    });

    if (startBoundaries.length < inputs.length) {
      // Didn't find all of the flushed components while walking from the currentNode.
      // Reset the walker to index the entire document.
      walker.currentNode = document;
      mountAll(inputs);
      return;
    }

    startBoundaries.forEach(key => {
      const endKey = `${key}/`;
      const id = key.slice(runtimePrefix.length);
      const renderer = getRenderer(id);
      const start = walker[key];
      const end = walker[endKey];
      const parentNode = start.parentNode!;
      const input = inputs[index++];

      if (!input) {
        // TODO: should throw error that input was missing.
      }

      beginHydrate(start);

      try {
        const batch = beginBatch();
        renderer(input);
        endBatch(batch);
      } finally {
        parentNode.removeChild(start);
        parentNode.removeChild(end);
        delete walker[key];
        delete walker[endKey];
        endHydrate();
      }
    });

    if (index !== inputs.length) {
      // TODO: should throw an error that we didn't find all the components we expected.
    }
  }
}
