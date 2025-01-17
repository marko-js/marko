import type { JSDOM } from "jsdom";
import format, { plugins } from "pretty-format";

import { getNodePath } from "./get-node-info";
import { stripInlineRuntime } from "./strip-inline-runtime";

const { DOMElement, DOMCollection } = plugins;

export default function createMutationTracker(
  window: JSDOM["window"],
  container: ParentNode,
) {
  window.addEventListener("error", console.error);
  window.addEventListener("unhandledrejection", console.error);

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
  normalizeTree(container, clone);
  clone.normalize();
  return clone;
}

function cloneAndSanitize(window: JSDOM["window"], container: ParentNode) {
  if (!(container as any).TEST_ROOT) {
    container = window.document.body || window.document.createElement("body");
  }
  const clone = container.cloneNode(true);
  const ignoredNodes: ChildNode[] = [];
  normalizeTree(container, clone, shouldIgnore);
  for (const ignoredNode of ignoredNodes) {
    ignoredNode.remove();
  }
  clone.normalize();

  return clone;

  function shouldIgnore(node: Node) {
    if (isComment(node) || isIgnoredTag(node)) {
      ignoredNodes.push(node);
      return true;
    }

    return false;
  }
}

function normalizeTree(
  source: Node,
  target: Node,
  shouldIgnore?: (node: Node) => boolean,
) {
  if (shouldIgnore?.(target)) return;
  if (isElement(target) && isElement(source)) {
    if (isInputElement(target) && isInputElement(source)) {
      if (target.type === "checkbox" || target.type === "radio") {
        if (source.checked) {
          target.setAttribute("checked", "");
        } else {
          target.removeAttribute("checked");
        }
      } else if (source.value) {
        target.setAttribute("value", source.value);
      } else {
        target.removeAttribute("value");
      }
    } else if (isTextAreaElement(target) && isTextAreaElement(source)) {
      target.textContent = source.value;
    } else if (isOptionElement(target) && isOptionElement(source)) {
      if (source.selected) {
        target.setAttribute("selected", "");
      } else {
        target.removeAttribute("selected");
      }
    }
  }

  // Recursively handle child nodes
  for (let i = 0; i < source.childNodes.length; i++) {
    normalizeTree(source.childNodes[i], target.childNodes[i], shouldIgnore);
  }
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

function isIgnoredTag(node: Node): node is Element {
  switch (isElement(node) && node.tagName) {
    case "LINK":
    case "TITLE":
    case "STYLE":
    case "SCRIPT":
      return true;
    default:
      return false;
  }
}

function isElement(node: Node): node is Element {
  return node.nodeType === 1;
}

function isComment(node: Node): node is Comment {
  return node.nodeType === 8;
}

function isInputElement(node: Element): node is HTMLInputElement {
  return node.tagName === "INPUT";
}

function isOptionElement(node: Element): node is HTMLOptionElement {
  return node.tagName === "OPTION";
}

function isTextAreaElement(node: Element): node is HTMLTextAreaElement {
  return node.tagName === "TEXTAREA";
}
