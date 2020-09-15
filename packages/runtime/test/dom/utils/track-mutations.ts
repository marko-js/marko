import format from "pretty-format";
import { getNodePath, getTypeName } from "./get-node-info";

const { DOMElement, DOMCollection } = format.plugins;

export default function createMutationTracker(window, container) {
  const result: string[] = [];
  const observer = new window.MutationObserver(records => {
    result.push(getStatusString(container, records, "ASYNC"));
  });
  observer.observe(container, {
    attributes: true,
    attributeOldValue: true,
    characterData: true,
    characterDataOldValue: true,
    childList: true,
    subtree: true
  });
  return {
    dropUpdate() {
      observer.takeRecords();
    },
    getUpdate(update) {
      return getStatusString(container, observer.takeRecords(), update);
    },
    log(message) {
      result.push(message);
    },
    logUpdate(update) {
      result.push(getStatusString(container, observer.takeRecords(), update));
    },
    getRawLogs() {
      return result;
    },
    getLogs() {
      return result.join("\n\n\n");
    },
    cleanup() {
      observer.disconnect();
    }
  };
}

function getStatusString(container: HTMLDivElement, changes, update) {
  const clone = container.cloneNode(true);
  clone.normalize();

  return `# Render ${
    typeof update === "function"
      ? `\n${update
          .toString()
          .replace(/^.*?{\s*([\s\S]*?)\s*}.*?$/, "$1")
          .replace(/^ {4}/gm, "")}\n`
      : JSON.stringify(update)
  }\n\`\`\`html\n${Array.from(clone.childNodes)
    .map(child =>
      format(child, {
        plugins: [DOMElement, DOMCollection]
      }).trim()
    )
    .filter(Boolean)
    .join("\n")
    .trim()}\n\`\`\`\n\n# Mutations\n\`\`\`\n${changes
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
