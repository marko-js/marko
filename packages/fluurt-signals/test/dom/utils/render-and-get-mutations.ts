import diffableHTML from "diffable-html";
import { getNodePath, getTypeName } from "./get-node-info";
import {
  render,
  Signal,
  set,
  beginBatch,
  endBatch,
  dynamicKeys,
  MaybeSignal,
  init
} from "../../../dom/index";

export default async function renderAndGetMutations(
  id: string,
  test: {
    inputs: [{ [x: string]: unknown }, ...unknown[]];
    default: ((input: MaybeSignal<{ [x: string]: unknown }>) => void) & {
      input: string[];
    };
  }
): Promise<string> {
  const { inputs, default: renderer } = test;
  const [firstInput] = inputs;
  const container = Object.assign(document.createElement("div"), {
    TEST_ROOT: true
  });
  const observer = new MutationObserver(() => {
    throw new Error("Async mutation");
  });
  let inputSignal = new Signal(firstInput);
  document.body.appendChild(container);
  observer.observe(container, {
    attributes: true,
    attributeOldValue: true,
    characterData: true,
    characterDataOldValue: true,
    childList: true,
    subtree: true
  });

  container.appendChild(
    render(() => renderer(dynamicKeys(inputSignal, renderer.input)))
  );

  const initialHTML = container.innerHTML;
  const result: string[] = [
    getStatusString(container, observer.takeRecords(), firstInput)
  ];

  for (const update of inputs.slice(1)) {
    if (typeof update === "function") {
      update(container);
    } else {
      const batch = beginBatch();
      set(inputSignal, update);
      endBatch(batch);
    }
    result.push(getStatusString(container, observer.takeRecords(), update));
  }
  inputSignal = new Signal(firstInput);
  (window as any).$T = [dynamicKeys(inputSignal, renderer.input)];
  container.innerHTML = `<!T:${id}>${initialHTML}`;
  observer.takeRecords();

  init();
  result.push(
    `--- Hydrate ---\n${getStatusString(
      container,
      observer.takeRecords(),
      firstInput
    )}`
  );

  // Hydrate should end up with the same html as client side render.
  expect(container.innerHTML).toBe(initialHTML);

  // Run the same updates after hydrate and ensure the same mutations.
  let resultIndex = 0;
  for (const update of inputs.slice(1)) {
    if (typeof update === "function") {
      update(container);
    } else {
      const batch = beginBatch();
      set(inputSignal, update);
      endBatch(batch);
    }

    expect(getStatusString(container, observer.takeRecords(), update)).toEqual(
      result[++resultIndex]
    );
  }

  observer.disconnect();
  document.body.removeChild(container);

  return result.join("\n\n\n");
}

function getStatusString(container: HTMLDivElement, changes, update) {
  return `# Render ${
    typeof update === "function"
      ? `\n${update
          .toString()
          .replace(/^.*?{\s*([\s\S]*?)\s*}.*?$/, "$1")
          .replace(/^    /gm, "")}\n`
      : JSON.stringify(update)
  }\n\`\`\`html\n${diffableHTML(
    container.innerHTML
  ).trim()}\n\`\`\`\n\n# Mutations\n\`\`\`\n${changes
    .map(formatMutationRecord)
    .join("\n")}\n\`\`\``;
}

function formatMutationRecord(record: MutationRecord) {
  const { target, oldValue } = record;

  switch (record.type) {
    case "attributes": {
      const { attributeName } = record;
      const newValue = (target as HTMLElement).getAttribute(
        attributeName as string
      );
      return `${getNodePath(target)}: attr(${attributeName}) ${JSON.stringify(
        oldValue
      )} => ${JSON.stringify(newValue)}`;
    }

    case "characterData": {
      return `${getNodePath(target)}: ${JSON.stringify(
        oldValue
      )} => ${JSON.stringify(target.nodeValue)}`;
    }

    case "childList": {
      const { removedNodes, addedNodes, previousSibling, nextSibling } = record;
      const details: string[] = [];
      if (removedNodes.length) {
        const relativeNode = previousSibling || nextSibling || target;
        const position =
          relativeNode === previousSibling
            ? "after"
            : relativeNode === nextSibling
            ? "before"
            : "in";
        details.push(
          `removed ${Array.from(removedNodes)
            .map(getTypeName)
            .join(", ")} ${position} ${getNodePath(relativeNode)}`
        );
      }

      if (addedNodes.length) {
        details.push(
          `inserted ${Array.from(addedNodes)
            .map(getNodePath)
            .join(", ")}`
        );
      }

      return details.join("\n");
    }
  }
}
