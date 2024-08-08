import type { JSDOM } from "jsdom";
import format, { plugins } from "pretty-format";
import { getNodePath } from "./get-node-info";
import { stripInlineRuntime } from "./strip-inline-runtime";

const { DOMElement, DOMCollection } = plugins;

export default function createMutationTracker(
  window: JSDOM["window"],
  container: ParentNode,
) {
  let connected = true;
  const result: string[] = [];
  const sanitizedResult: string[] = [];
  let currentRecords: MutationRecord[] | null = null;
  const tracker = {
    beginUpdate() {
      currentRecords = [];
    },
    dropUpdate() {
      observer.takeRecords();
      currentRecords = null;
    },
    log(message: string) {
      if (!connected) {
        throw new Error(`log called after cleanup`);
      }
      result.push(message);
    },
    logUpdate(update: unknown, expectedError?: Error) {
      if (!connected) {
        throw new Error(`logUpdate called after cleanup`);
      }

      if (currentRecords) {
        currentRecords = currentRecords.concat(observer.takeRecords());
      } else {
        currentRecords = observer.takeRecords();
      }

      if (expectedError) {
        result.push(getErrorStatusString(expectedError, update));
        sanitizedResult.push(getErrorStatusString(expectedError, update, true));
      } else {
        result.push(
          getStatusString(cloneAndNormalize(container), currentRecords, update),
        );
        sanitizedResult.push(
          getStatusString(
            cloneAndSanitize(window, container),
            currentRecords,
            update,
            true,
          ),
        );
      }

      currentRecords = null;
    },
    getRawLogs(sanitized?: boolean) {
      return sanitized ? sanitizedResult : result;
    },
    getLogs(sanitized?: boolean) {
      return (sanitized ? sanitizedResult : result).join("\n\n\n");
    },
    cleanup() {
      observer.disconnect();
      connected = false;
    },
  };
  const observer = new window.MutationObserver((records) => {
    if (currentRecords) {
      currentRecords = currentRecords.concat(records);
    } else {
      currentRecords = records;
      tracker.logUpdate("ASYNC");
    }
  });
  observer.observe(container, {
    attributes: true,
    attributeOldValue: true,
    characterData: true,
    characterDataOldValue: true,
    childList: true,
    subtree: true,
  });

  return tracker;
}

function cloneAndNormalize(container: ParentNode) {
  const clone = container.cloneNode(true);
  clone.normalize();
  return clone;
}

function cloneAndSanitize(window: JSDOM["window"], container: ParentNode) {
  if (!(container as any).TEST_ROOT) {
    container = window.document.body || window.document.createElement("body");
  }
  const clone = container.cloneNode(true);
  const treeWalker = window.document.createTreeWalker(clone);
  const nodesToRemove: ChildNode[] = [];

  while (treeWalker.nextNode()) {
    const node = treeWalker.currentNode;
    if (node.nodeType === 8 || isSanitizedTag(node as Element)) {
      nodesToRemove.push(node as ChildNode);
    } else if ((node as Element).tagName === "TEXTAREA") {
      node.textContent = (node as HTMLTextAreaElement).value;
    }
  }

  nodesToRemove.forEach((n) => n.remove());

  clone.normalize();

  return clone;
}

function getUpdateString(update: unknown) {
  return typeof update === "function"
    ? `\n${update
        .toString()
        .replace(/^.*?{\s*([\s\S]*?)\s*}.*?$/, "$1")
        .replace(/^ {4}/gm, "")
        .replace(/;$/, "")}\n`
    : JSON.stringify(update);
}

function getStatusString(
  container: Node,
  records: MutationRecord[],
  update: unknown,
  omitMutations?: boolean,
) {
  const updateString = getUpdateString(update);
  const formattedHTML = stripInlineRuntime(
    Array.from(container.childNodes)
      .map((child) =>
        format(child, {
          plugins: [DOMElement, DOMCollection],
        }).trim(),
      )
      .filter(Boolean)
      .join("\n")
      .trim(),
  );

  return `# Render ${updateString}\n\`\`\`html\n${formattedHTML}\n\`\`\`${
    omitMutations
      ? ""
      : `\n\n# Mutations\n\`\`\`\n${records
          .map(formatMutationRecord)
          .filter(Boolean)
          .join("\n")}\n\`\`\``
  }`;
}

function getErrorStatusString(
  error: Error,
  update: unknown,
  omitStack?: boolean,
) {
  const updateString = getUpdateString(update);
  const formattedError =
    !omitStack && error.stack
      ? error.stack.replaceAll(process.cwd(), "")
      : error.message;
  return `# Render ${updateString}\n# Error\n\`\`\`\n${formattedError}\n\`\`\``;
}

function formatMutationRecord(record: MutationRecord) {
  const { target, oldValue } = record;

  switch (record.type) {
    case "attributes": {
      const { attributeName } = record;
      const newValue = (target as HTMLElement).getAttribute(
        attributeName as string,
      );
      return `${getNodePath(target)}: attr(${attributeName}) ${JSON.stringify(
        oldValue,
      )} => ${JSON.stringify(newValue)}`;
    }

    case "characterData": {
      const newValue = target.nodeValue;

      // if the new value begins with the old value
      // and whitespace delimits the old value and remaining new value
      if (
        newValue?.indexOf(oldValue!) === 0 &&
        (/\s$/ms.test(oldValue!) || /\s$/ms.test(newValue![oldValue!.length]))
      ) {
        // filter out invalid records that jsdom creates
        // see https://github.com/jsdom/jsdom/issues/3261
        // TODO: remove if fixed
        return;
      }

      return `${getNodePath(target)}: ${JSON.stringify(
        oldValue || "",
      )} => ${JSON.stringify(target.nodeValue || "")}`;
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
            .map(getNodePath)
            .join(", ")} ${position} ${getNodePath(relativeNode)}`,
        );
      }

      if (addedNodes.length) {
        details.push(
          `inserted ${Array.from(addedNodes).map(getNodePath).join(", ")}`,
        );
      }

      return details.join("\n");
    }
  }
}

function isSanitizedTag(node: Element) {
  switch (node.tagName) {
    case "LINK":
    case "TITLE":
    case "STYLE":
    case "SCRIPT":
      return true;
    default:
      return false;
  }
}
