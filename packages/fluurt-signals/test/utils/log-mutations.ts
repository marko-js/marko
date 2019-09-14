import diffableHTML from "diffable-html";
import { window, document } from "./jsdom";
import { getNodePath, getTypeName } from "./get-node-info";
import { Signal, computeInput, set, get } from "../../src";

export default async function logMutations(renderer, updates): Promise<string> {
  let changes = [];
  const observer = new (window as any).MutationObserver(list => {
    changes = changes.concat(list);
  });

  const container = document.createElement("div");
  observer.observe(container, {
    attributes: true,
    attributeOldValue: true,
    characterData: true,
    characterDataOldValue: true,
    childList: true,
    subtree: true
  });

  const first = updates[0];
  const inputSignal = new Signal(first);

  renderer(container, computeInput(() => get(inputSignal), renderer.input));

  await tick();

  const result: string[] = [getStatusString(container, changes, first)];

  for (const update of updates.slice(1)) {
    changes = [];
    set(inputSignal, update);
    await tick();
    result.push(getStatusString(container, changes, update));
  }

  observer.disconnect();

  return result.join("\n\n\n");
}

function getStatusString(container: HTMLDivElement, changes, input) {
  return `# Render ${JSON.stringify(input)}\n\`\`\`html\n${diffableHTML(
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

function tick() {
  return new Promise(resolve => setTimeout(resolve));
}
