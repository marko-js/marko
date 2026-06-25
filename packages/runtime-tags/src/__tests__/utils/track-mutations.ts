import type { JSDOM, VirtualConsole } from "jsdom";
import format, { plugins } from "pretty-format";

import {
  captureConsole,
  type ConsoleRecord,
  formatConsoleRecord,
} from "./capture-console";
import * as nodeInfo from "./get-node-info";

const { DOMElement, DOMCollection } = plugins;

export default function createMutationTracker(browser: {
  window: JSDOM["window"];
  virtualConsole: VirtualConsole;
}) {
  let cleaned = false;
  let hasRendered = false;
  let pendingMutations: undefined | MutationRecord[];
  const { window, virtualConsole } = browser;
  const logs: string[] = [];
  const errors: Set<Error> = new Set();
  const consoleCapture = captureConsole(virtualConsole);
  const observer = new window.MutationObserver((records) => {
    if (pendingMutations) {
      pendingMutations = [...pendingMutations, ...records];
    } else {
      // TODO: throw
      pendingMutations = records;
      logRecords();
    }
  });
  window.addEventListener("error", handleError);
  window.addEventListener("unhandledrejection", handleRejection);

  return {
    beginUpdate() {
      pendingMutations = [];
    },
    logErrors(update: unknown) {
      if (!errors.size) {
        throw new Error("Expected error to be thrown");
      }

      if (cleaned) {
        throw new Error(`logError called after cleanup`);
      }

      logs.push(getErrorStatusString([...errors], update, hasRendered));
      errors.clear();
      hasRendered = true;
    },
    logRender(input: unknown) {
      observer.observe(window.document, {
        attributes: true,
        attributeOldValue: true,
        characterData: true,
        characterDataOldValue: true,
        childList: true,
        subtree: true,
      });

      this.logUpdate(input);
      hasRendered = true;
    },
    logUpdate(update?: unknown) {
      const pending = observer.takeRecords();
      if (pending.length) {
        pendingMutations = pendingMutations
          ? [...pendingMutations, ...pending]
          : pending;
      }

      throwErrors();
      logRecords(update);
    },
    getLogs() {
      return logs.length ? logs.join("\n\n") + "\n" : "";
    },
    cleanup() {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
      observer.disconnect();
      consoleCapture.cleanup();
      throwErrors();
      cleaned = true;
    },
  };

  function logRecords(update?: unknown) {
    if (cleaned) {
      throw new Error(`log called after cleanup`);
    }

    const entry = getStatusString(
      window.document.body,
      pendingMutations || [],
      consoleCapture.records(),
      update,
      hasRendered,
    );
    if (entry !== null) logs.push(entry);
    pendingMutations = undefined;
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

function cloneAndSanitize(body: Document["body"]) {
  const clone = body.cloneNode(true) as ParentNode;
  const ignoredNodes: ChildNode[] = [];
  normalizeTree(body, clone, ignoredNodes);
  for (const node of ignoredNodes) {
    node.remove();
  }
  clone.normalize();
  return clone;
}

function normalizeTree(source: Node, target: Node, ignoredNodes: ChildNode[]) {
  if (nodeInfo.isIgnoredNode(target)) {
    ignoredNodes.push(target);
    return;
  }
  if (nodeInfo.isElement(target) && nodeInfo.isElement(source)) {
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

    if (nodeInfo.isInputElement(target) && nodeInfo.isInputElement(source)) {
      if (target.type === "checkbox" || target.type === "radio") {
        if (source.defaultChecked && !source.checked) {
          target.setAttribute("default-checked", "");
        }
        if (source.checked) {
          target.setAttribute("checked", "");
        } else {
          target.removeAttribute("checked");
        }
      } else {
        if (source.defaultValue && source.defaultValue !== source.value) {
          target.setAttribute("default-value", source.defaultValue);
        }
        if (source.value) {
          target.setAttribute("value", source.value);
        } else {
          target.removeAttribute("value");
        }
      }
    } else if (
      nodeInfo.isTextAreaElement(target) &&
      nodeInfo.isTextAreaElement(source)
    ) {
      if (source.defaultValue && source.defaultValue !== source.value) {
        target.setAttribute("default-value", source.defaultValue);
      }
      target.textContent = source.value;
    } else if (
      nodeInfo.isOptionElement(target) &&
      nodeInfo.isOptionElement(source)
    ) {
      if (source.defaultSelected && !source.selected) {
        target.setAttribute("default-selected", "");
      }
      if (source.selected) {
        target.setAttribute("selected", "");
      } else {
        target.removeAttribute("selected");
      }
    }
  }

  for (let i = 0; i < source.childNodes.length; i++) {
    normalizeTree(source.childNodes[i], target.childNodes[i], ignoredNodes);
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
  return ` \`${JSON.stringify(update)}\``;
}

function getStatusString(
  body: Document["body"] | null,
  mutationRecords: MutationRecord[],
  consoleRecords: ConsoleRecord[],
  update: unknown,
  hasRendered: boolean,
): string | null {
  const updateStr = getUpdateString(update);
  const formattedMutations = mutationRecords
    .map(formatMutationRecord)
    .filter(Boolean)
    .join("\n");
  const formattedConsole = consoleRecords
    .map(formatConsoleRecord)
    .filter(Boolean)
    .join("\n");
  const formattedHTML =
    !body || (hasRendered && !formattedMutations)
      ? ""
      : Array.from(cloneAndSanitize(body).childNodes, (node) =>
          format(node, { plugins: [DOMElement, DOMCollection] }).trim(),
        )
          .filter(Boolean)
          .join("\n")
          .trim();

  if (
    hasRendered &&
    !(updateStr || formattedMutations || formattedConsole || formattedHTML)
  ) {
    return null;
  }

  let result = `# ${hasRendered ? "Update" : "Render"}${updateStr}`;
  if (formattedHTML) result += `\n\`\`\`html\n${formattedHTML}\n\`\`\``;
  if (formattedMutations)
    result += `\n## Change\n\`\`\`\n${formattedMutations}\n\`\`\``;
  if (formattedConsole)
    result += `\n## Console\n\`\`\`\n${formattedConsole}\n\`\`\``;
  return result;
}

function getErrorStatusString(
  errors: Error[],
  update: unknown,
  hasRendered: boolean,
) {
  return `# ${hasRendered ? "Update" : "Render"}${getUpdateString(update)}\n## Error\n\`\`\`\n${errors.map((err) => err.message).join("\n\n")}\n\`\`\``;
}

function formatMutationRecord(record: MutationRecord) {
  const { target, oldValue } = record;

  if (record.type === "characterData") {
    if (nodeInfo.isIgnoredNode(target.parentNode!)) return;

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

    return `UPDATE: ${nodeInfo.getNodePath(target)} ${JSON.stringify(
      oldValue || "",
    )} => ${JSON.stringify(target.nodeValue || "")}`;
  }

  if (nodeInfo.isIgnoredNode(target)) return;

  switch (record.type) {
    case "attributes": {
      const { attributeName } = record;
      const newValue = (target as HTMLElement).getAttribute(
        attributeName as string,
      );
      return `UPDATE: ${nodeInfo.getNodePath(target)}[${attributeName}] ${JSON.stringify(
        oldValue,
      )} => ${JSON.stringify(newValue)}`;
    }

    case "childList": {
      const { removedNodes, addedNodes, previousSibling } = record;
      const removed = nodeInfo.getSanitizedNodes(removedNodes);
      const added = nodeInfo.getSanitizedNodes(addedNodes);

      if (!removed.length && !added.length) return;

      const details: string[] = [];
      if (removed.length) {
        details.push(
          `REMOVE: ${nodeInfo.getNodeSelector(removed, previousSibling, target)}`,
        );
      }

      if (added.length) {
        details.push(
          `INSERT: ${nodeInfo.getNodeSelector(added, previousSibling, target)}`,
        );
      }

      return details.join("\n");
    }
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
