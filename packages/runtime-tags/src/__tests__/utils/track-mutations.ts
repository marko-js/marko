import type { JSDOM } from "jsdom";
import format, { plugins } from "pretty-format";

import { getNodePath } from "./get-node-info";
import { stripInlineRuntime } from "./strip-inline-runtime";

const { DOMElement, DOMCollection } = plugins;

export default function createMutationTracker(
  window: JSDOM["window"],
  container: ParentNode = window.document,
) {
  let cleaned = false;
  let pendingRecords: undefined | MutationRecord[];
  const logs: string[] = [];
  const sanitizedLogs: string[] = [];
  const errors: Set<Error> = new Set();
  const observer = new window.MutationObserver((records) => {
    if (pendingRecords) {
      pendingRecords = [...pendingRecords, ...records];
    } else {
      logRecords("ASYNC", records);
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
  window.addEventListener("error", handleError);
  window.addEventListener("unhandledrejection", handleRejection);

  return {
    beginUpdate() {
      pendingRecords = [];
    },
    log(message: string) {
      if (cleaned) {
        throw new Error(`log called after cleanup`);
      }
      logs.push(message);
    },
    logError(update: unknown, expectedError: Error) {
      throwErrors();

      if (cleaned) {
        throw new Error(`logError called after cleanup`);
      }

      logs.push(getErrorStatusString(expectedError, update));
      sanitizedLogs.push(getErrorStatusString(expectedError, update, true));
    },
    logUpdate(update: unknown, optional?: boolean) {
      throwErrors();

      if (cleaned) {
        throw new Error(`logUpdate called after cleanup`);
      }

      const records = [...(pendingRecords || []), ...observer.takeRecords()];
      pendingRecords = undefined;
      if (records.length || !optional) {
        logRecords(update, records);
      }
    },
    getRawLogs(sanitized?: boolean) {
      return sanitized ? sanitizedLogs : logs;
    },
    getLogs(sanitized?: boolean) {
      return (sanitized ? sanitizedLogs : logs).join("\n\n");
    },
    cleanup() {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
      observer.disconnect();
      throwErrors();
      cleaned = true;
    },
  };

  function logRecords(update: unknown, records: MutationRecord[]) {
    if (cleaned) {
      throw new Error(`log called after cleanup`);
    }

    logs.push(getStatusString(container, records, update));
    sanitizedLogs.push(getStatusString(container, records, update, true));
  }

  function throwErrors() {
    switch (errors.size) {
      case 0:
        return;
      case 1:
        for (const err of errors) throw err;
        break;
      default:
        throw new AggregateError(
          errors,
          `\n${[...errors].join("\n").replace(/^(?!\s*$)/gm, "\t")}`,
        );
    }
  }

  function handleError(ev: ErrorEvent) {
    errors.add(ev.error.detail || ev.error);
    ev.preventDefault();
  }

  function handleRejection(ev: PromiseRejectionEvent) {
    errors.add(ev.reason.detail || ev.reason);
    ev.preventDefault();
  }
}

function cloneAndNormalize(container: ParentNode) {
  const clone = container.cloneNode(true) as ParentNode;
  normalizeTree(container, clone);
  clone.normalize();
  return clone;
}

function cloneAndSanitize(container: ParentNode) {
  if (isDocument(container)) {
    container = container.body || container.createElement("body");
  }
  const clone = container.cloneNode(true) as ParentNode;
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
    const style = target.getAttribute("style");
    if (style) {
      target.setAttribute(
        "style",
        style
          .split(";")
          .map((decl) => decl.trim())
          .filter((decl) => decl !== "")
          .map((decl) => {
            const [property, value] = decl.split(":");
            return `${property
              .trim()
              .replace(/-([a-z])/g, (_, letter) =>
                letter.toUpperCase(),
              )}:${value.trim()}`;
          })
          .sort()
          .join(";"),
      );
    }

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
  switch (typeof update) {
    case "function":
      return `\n\`\`\`js\n${getFunctionBody(update.toString()).replace(/^ {4}/gm, "")}\n\`\`\``;
    case "string":
      return ` ${update}`;
  }

  if (update == null || !Object.keys(update).length) return "";
  return ` \`${JSON.stringify(update)}\`\n`;
}

function getStatusString(
  container: ParentNode,
  records: MutationRecord[],
  update: unknown,
  sanitized?: boolean,
) {
  const updateString = getUpdateString(update);
  const formattedHTML = stripInlineRuntime(
    Array.from(
      (sanitized ? cloneAndSanitize(container) : cloneAndNormalize(container))
        .childNodes,
      (node) =>
        format(node, {
          plugins: [DOMElement, DOMCollection],
        }).trim(),
    )
      .filter(Boolean)
      .join("\n"),
  ).trim();
  const formattedMutations =
    !sanitized &&
    records
      .map((record) => formatMutationRecord(record, container))
      .filter(Boolean)
      .join("\n");

  let result = `# Render${updateString}\n`;

  if (formattedHTML) {
    result += `\`\`\`html\n${formattedHTML}\n\`\`\`\n`;
    if (formattedMutations) result += "\n";
  }

  if (formattedMutations) {
    result += `# Mutations\n\`\`\`\n${formattedMutations}\n\`\`\``;
  }

  return result;
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
  return `# Render${updateString}\n# Error\n\`\`\`\n${formattedError}\n\`\`\``;
}

function formatMutationRecord(record: MutationRecord, container: ParentNode) {
  const { target, oldValue } = record;

  switch (record.type) {
    case "attributes": {
      const { attributeName } = record;
      const newValue = (target as HTMLElement).getAttribute(
        attributeName as string,
      );
      return `UPDATE ${getNodePath(target, container)}[${attributeName}] ${JSON.stringify(
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

      return `UPDATE ${getNodePath(target, container)} ${JSON.stringify(
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
          `REMOVE ${Array.from(removedNodes, (node) =>
            getNodePath(node, container),
          ).join(", ")} ${position} ${getNodePath(relativeNode, container)}`,
        );
      }

      if (addedNodes.length) {
        details.push(
          `INSERT ${Array.from(addedNodes)
            .map((node) => getNodePath(node, container))
            .join(", ")}`,
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

function getFunctionBody(source: string) {
  const match = source.match(/^[^(=]*(?:\(.*?\))?(?:\s*=>)?\s*({)?/m);
  if (match) {
    if (match[1]) {
      return trimDedent(
        source
          .slice(match[0].length)
          .replace(/;?\s*}\s*$/m, ";")
          .trim(),
      );
    }
    return trimDedent(source.slice(match[0].length).replace(/;?\s*$/m, ";"));
  }

  return trimDedent(source);
}

function trimDedent(str: string) {
  const indent = str.match(/^[ \t]+(?=\S)/gm);
  if (!indent) {
    return str.trim();
  }

  return str
    .replace(new RegExp(`^[ \\t]{${indent[0].length}}`, "gm"), "")
    .trim();
}

function isDocument(node: Node): node is Document {
  return node.nodeType === 9;
}

function isElement(node: Node): node is HTMLElement {
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
