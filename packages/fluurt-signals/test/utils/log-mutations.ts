import diffableHTML from "diffable-html";
import { window, document } from "./jsdom";
import { getNodePath, getTypeName } from "./get-node-info";
import { Signal, dynamicKeys, set, beginBatch, endBatch } from "../../src";

export default async function logMutations(renderer, updates): Promise<string> {
  let changes = [];
  const observer = new (window as any).MutationObserver(list => {
    changes = changes.concat(list);
  });

  const container = document.createElement("div");
  container.TEST_ROOT = true;
  document.body.appendChild(container);
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

  renderer(container, dynamicKeys(inputSignal, renderer.input));

  await tick();

  const result: string[] = [getStatusString(container, changes, first)];

  for (const update of updates.slice(1)) {
    changes = [];
    if (typeof update === "function") {
      update(container);
    } else {
      const batch = beginBatch();
      set(inputSignal, update);
      endBatch(batch);
    }
    await tick();
    result.push(getStatusString(container, changes, update));
  }

  document.body.removeChild(container);
  observer.disconnect();

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

function tick() {
  return new Promise(resolve => setTimeout(resolve));
}
