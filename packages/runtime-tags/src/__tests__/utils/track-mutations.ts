import type { JSDOM, VirtualConsole } from "jsdom";
import format, { plugins } from "pretty-format";

import {
  captureConsole,
  type ConsoleRecord,
  formatConsoleRecord,
} from "./capture-console";
import * as nodeInfo from "./get-node-info";

const { DOMElement, DOMCollection } = plugins;

export default function createMutationTracker(
  browser: {
    window: JSDOM["window"];
    virtualConsole: VirtualConsole;
  },
  /** Rejections the run leaves unhandled by design (`String(reason)`). */
  allowedRejections: string[] = [],
) {
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
  // jsdom never fires a window's `unhandledrejection`; Node reports every realm's.
  process.on("unhandledRejection", handleRejection);

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
    async cleanup() {
      observer.disconnect();
      consoleCapture.cleanup();
      // A rejection the last step left surfaces once its task ends.
      await new Promise((resolve) => setImmediate(resolve));
      window.removeEventListener("error", handleError);
      process.off("unhandledRejection", handleRejection);
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

  function handleRejection(reason: Error) {
    if (!allowedRejections.includes(String(reason))) errors.add(reason);
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
      return `\n\`\`\`js\n${getFunctionBody(update.toString())}\n\`\`\``;
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
  // In page order of where each change landed, so a step reads top to bottom
  // rather than in the order its independent renders happened to run.
  const changes: Change[] = [];
  for (const record of mutationRecords) pushChanges(record, changes);
  changes.sort(compareChanges);
  let formattedMutations = "";
  for (const { text } of changes) {
    formattedMutations += formattedMutations ? `\n${text}` : text;
  }
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

interface Change {
  text: string;
  at: number[] | undefined;
}

function pushChanges(record: MutationRecord, changes: Change[]) {
  const { target, oldValue } = record;

  if (record.type === "characterData") {
    if (!target.parentNode || !isIgnoredMutationNode(target.parentNode)) {
      changes.push({
        text: `UPDATE: ${nodeInfo.getNodePath(target)} ${JSON.stringify(
          oldValue || "",
        )} => ${JSON.stringify(target.nodeValue || "")}`,
        at: getPagePath(target),
      });
    }
  } else if (isIgnoredMutationNode(target)) {
    return;
  } else if (record.type === "attributes") {
    const { attributeName } = record;
    const newValue = (target as HTMLElement).getAttribute(
      attributeName as string,
    );
    changes.push({
      text: `UPDATE: ${nodeInfo.getNodePath(target)}[${attributeName}] ${JSON.stringify(
        oldValue,
      )} => ${JSON.stringify(newValue)}`,
      at: getPagePath(target),
    });
  } else {
    // Nodes are named where they ended up or under their parent, never by a
    // sibling, which depends on the order the step's changes ran in.
    let removed: Node[] | undefined;
    for (const node of record.removedNodes) {
      if (!isIgnoredMutationNode(node)) (removed ||= []).push(node);
    }
    let inserted = "";
    let at: number[] | undefined;
    for (const node of record.addedNodes) {
      if (isIgnoredMutationNode(node)) continue;
      if (inserted) inserted += ", ";
      if (node.isConnected) {
        at ||= getPagePath(node);
        inserted += nodeInfo.isElement(node)
          ? nodeInfo.getNodePath(node)
          : nodeInfo.getNodeSelector([node], node.parentNode!);
      } else {
        inserted += nodeInfo.getNodeSelector([node], target);
      }
    }
    if (removed) {
      changes.push({
        text: `REMOVE: ${nodeInfo.getNodeSelector(removed, target)}`,
        at: getPositionIn(target),
      });
    }
    if (inserted) {
      changes.push({
        text: `INSERT: ${inserted}`,
        at: at || getPositionIn(target),
      });
    }
  }
}

// Under a node, ahead of its children.
function getPositionIn(node: Node) {
  const path = getPagePath(node);
  path?.push(-0.5);
  return path;
}

// Child indices from the document down, counting only nodes the log shows.
function getPagePath(node: Node) {
  if (!node.isConnected) return;
  const path: number[] = [];
  for (let cur = node; cur.parentNode; cur = cur.parentNode) {
    let index = 0;
    for (let sib = cur.previousSibling; sib; sib = sib.previousSibling) {
      if (!isIgnoredMutationNode(sib)) index++;
    }
    path.push(index);
  }
  return path.reverse();
}

// Ancestors before their descendants, changes out of the page last.
function compareChanges(a: Change, b: Change) {
  if (a.at && b.at) {
    for (let i = 0; i < a.at.length && i < b.at.length; i++) {
      if (a.at[i] !== b.at[i]) return a.at[i] - b.at[i];
    }
    if (a.at.length !== b.at.length) return a.at.length - b.at.length;
  } else if (a.at || b.at) {
    return a.at ? -1 : 1;
  }
  return a.text < b.text ? -1 : a.text > b.text ? 1 : 0;
}

function isIgnoredMutationNode(node: Node) {
  if (!nodeInfo.isIgnoredNode(node)) return false;
  return !(
    nodeInfo.isElement(node) && /^(?:LINK|STYLE|TITLE)$/i.test(node.tagName)
  );
}

function getFunctionBody(rawSource: string) {
  // Node's type stripping blanks out type annotations, so `fn.toString()`
  // contains space runs where generics/assertions were; collapse them,
  // leaving string/template literals untouched.
  const source = rawSource.replace(
    /(["'`])(?:\\.|(?!\1)[^\\])*\1|(\S) +(?=[.),;\]])|(\S) {2,}/g,
    (match, quote, beforePunct, beforeRun) =>
      quote ? match : beforePunct || beforeRun,
  );
  const match = source.match(/^[^(=]*(?:\(.*?\))?(?:\s*=>)?\s*({)?/m);
  if (match) {
    if (match[1]) {
      return trimDedent(
        source
          .slice(match[0].length)
          .replace(/\s*}\s*$/, "")
          .trim(),
      );
    }
    return trimDedent(source.slice(match[0].length).replace(/;?\s*$/, ";"));
  }

  return trimDedent(source);
}

function trimDedent(str: string) {
  let indent = Infinity;
  for (const [space] of str.matchAll(/^[ \t]+(?=\S)/gm)) {
    if (space.length < indent) indent = space.length;
  }

  return str
    .replace(/^[ \t]+/gm, (space) =>
      space.length < indent ? space : space.slice(indent),
    )
    .trim();
}
