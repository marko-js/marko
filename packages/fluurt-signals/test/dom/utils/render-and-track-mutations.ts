import format from "pretty-format";
import { getNodePath, getTypeName } from "./get-node-info";
import {
  createSignal,
  set,
  beginBatch,
  endBatch,
  dynamicKeys,
  MaybeSignal,
  init,
  createRenderer
} from "../../../dom/index";
import { resolveAfter } from "../../utils/resolve";

const { DOMElement, DOMCollection } = format.plugins;

export default async function renderAndGetMutations(
  id: string,
  test: {
    wait?: number;
    inputs: [
      Record<string, unknown>,
      ...Array<Record<string, unknown> | ((container: Element) => void)>
    ];
    default: ((input: MaybeSignal<Record<string, unknown>>) => void) & {
      input: string[];
    };
    FAILS_HYDRATE?: boolean;
  }
): Promise<string> {
  const { inputs, default: renderer, wait } = test;
  const render = createRenderer(renderer);
  const [firstInput] = inputs;
  const result: string[] = [];
  const observer = new MutationObserver(records => {
    result.push(getStatusString(container, records, "ASYNC"));
  });
  const container = Object.assign(document.createElement("div"), {
    TEST_ROOT: true
  });

  document.body.appendChild(container);

  try {
    const instance = render(firstInput);

    observer.observe(container, {
      attributes: true,
      attributeOldValue: true,
      characterData: true,
      characterDataOldValue: true,
      childList: true,
      subtree: true
    });
    container.appendChild(instance);

    const initialHTML = container.innerHTML;
    result.push(getStatusString(container, observer.takeRecords(), firstInput));

    for (const update of inputs.slice(1)) {
      if (wait) {
        await resolveAfter(null, wait);
      }
      if (typeof update === "function") {
        update(container);
      } else {
        instance.rerender(update);
      }
      result.push(getStatusString(container, observer.takeRecords(), update));
    }

    if (wait) {
      await resolveAfter(null, wait);
    }

    if (!test.FAILS_HYDRATE) {
      const inputSignal = createSignal(firstInput);
      (window as any).M$i = [dynamicKeys(inputSignal, renderer.input)];
      container.innerHTML = `<!M$${id}>${initialHTML}<!M$${id}/>`;
      container.insertBefore(document.createTextNode(""), container.firstChild);
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
        if (wait) {
          await resolveAfter(null, wait);
        }
        if (typeof update === "function") {
          update(container);
        } else {
          const batch = beginBatch();
          set(inputSignal, update);
          endBatch(batch);
        }

        expect(
          getStatusString(container, observer.takeRecords(), update)
        ).toEqual(result[++resultIndex]);
      }

      if (wait) {
        await resolveAfter(null, wait);
      }
    }

    return result.join("\n\n\n");
  } finally {
    observer.disconnect();
    document.body.removeChild(container);
  }
}

function getStatusString(container: HTMLDivElement, changes, update) {
  const clone = container.cloneNode(true);
  clone.normalize();

  return `# Render ${
    typeof update === "function"
      ? `\n${update
          .toString()
          .replace(/^.*?{\s*([\s\S]*?)\s*}.*?$/, "$1")
          .replace(/^    /gm, "")}\n`
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
