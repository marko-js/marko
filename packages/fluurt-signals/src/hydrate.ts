import { Renderer, beginHydrate, endHydrate } from "./dom";
const renderersById: { [x: string]: Renderer } = {};

export function register(id: string, renderer: Renderer) {
  renderersById[id] = renderer;
  return renderer;
}

export function init(runtimeId: string = "T") {
  const inputsVar = `$${runtimeId}`;
  const initialInputs = window[inputsVar];
  if (initialInputs) {
    mountAll(initialInputs);
  }

  window[inputsVar] = {
    concat: mountAll
  };

  function mountAll(inputs: any[]) {
    let remaining = inputs.length;
    const boundaryStart = `${runtimeId}:`;
    (function hydrateBoundariesReverse(node: Node) {
      if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
        const { data } = node as Comment;
        if (data.indexOf(boundaryStart) === 0) {
          beginHydrate(node);
          const id = data.slice(boundaryStart.length);
          const input = inputs[--remaining];
          const renderer = renderersById[id];
          renderer(input);
          node.parentNode!.removeChild(node);
          endHydrate();
        }
      }

      let next: Node | null = node.lastChild;
      while (remaining && next) {
        const cur = next;
        next = next.previousSibling;
        hydrateBoundariesReverse(cur);
      }
    })(document);

    if (remaining) {
      // TODO: should throw an error that we didn't find all the components we expected.
    }
  }
}
