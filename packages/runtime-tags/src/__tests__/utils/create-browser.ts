import path from "node:path";

import { JSDOM, VirtualConsole } from "jsdom";

import {
  importWithContext,
  waitForPendingModules,
} from "./import-with-context";

export default function createBrowser(dir?: string) {
  const virtualConsole = new VirtualConsole();
  const dom = new JSDOM("", {
    runScripts: "dangerously",
    pretendToBeVisual: true,
    virtualConsole,
  });
  const { window } = dom;
  const ctx = dom.getInternalVMContext();
  const loadedScripts = new Set<string>();
  const qmt = window.queueMicrotask;
  window.__coverage__ = (globalThis as any).__coverage__;
  window.__RESOLVE_STATE__ = globalThis.__RESOLVE_STATE__;
  window.setImmediate = setImmediate;
  window.MessageChannel = class MessageChannel {
    port1: any;
    port2: any;
    constructor() {
      this.port1 = { onmessage() {} };
      this.port2 = {
        postMessage: () => {
          setImmediate(() => {
            window.queueMicrotask(this.port1.onmessage);
          });
        },
      };
    }
  };
  window.requestAnimationFrame = (() => {
    let queue: FrameRequestCallback[] | undefined;
    return function requestAnimationFrame(fn) {
      if (queue) {
        queue.push(fn);
      } else {
        queue = [fn];
        setTimeout(() => {
          const timestamp = performance.now();
          const batch = queue!;
          queue = undefined;
          for (const fn of batch) {
            fn(timestamp);
          }
        });
      }
      return 0;
    };
  })();

  return {
    window,
    virtualConsole,
    ctx,
    async runAsyncScripts(beforeEffects?: () => void): Promise<void> {
      if (dir) {
        // Patch queueMicrotask to prevent scheduled updates (from effects)
        // from executing before we snapshot the dom.
        window.queueMicrotask = (fn: () => void) => deferred.push(fn);
        const deferred: (() => void)[] = [];
        if (!loadedScripts.size) {
          loadedScripts.add("template.marko.page.mjs");
          importWithContext(
            path.join(dir, "template.marko.page.mjs"),
            { browser: true },
            ctx,
          );
        }

        for (const { src, type } of window.document.scripts) {
          if (src && type === "module" && !loadedScripts.has(src)) {
            loadedScripts.add(src);
            importWithContext(path.join(dir, src), { browser: true }, ctx);
          }
        }
        await waitForPendingModules(ctx);
        window.queueMicrotask = qmt;
        beforeEffects?.();
        deferred.forEach(qmt);
      }
    },
    stream(chunks: string[]): () => boolean {
      const { document } = window;
      document.open();

      if (chunks.length > 1) {
        const parsed = document.implementation.createHTMLDocument();
        parsed.write(ensureBody(chunks.join("<!--%%FLUSH%%-->")));
        parsed.doctype?.remove();

        const walker = parsed.createTreeWalker(parsed);
        const targetNodes = new WeakMap<Node, Node>([[parsed, document]]);
        let node: Node | null;

        return () => {
          while ((node = walker.nextNode())) {
            if (
              node.nodeType === 8 /* Node.COMMENT_NODE */ &&
              (node as Comment).data === "%%FLUSH%%"
            ) {
              return true;
            }

            const isInline = isInlineScript(node);
            const clone = document.importNode(node, isInline);
            targetNodes.set(node, clone);
            (targetNodes.get(node.parentNode!) as ParentNode).appendChild(
              clone,
            );

            if (isInline) {
              walker.nextNode();
            }
          }
          document.close();
          return false;
        };
      }

      return () => {
        if (chunks.length) {
          document.write(ensureBody(chunks[0]));
        }
        document.close();
        return false;
      };
    },
  };
}

function isInlineScript(node: Node): node is HTMLScriptElement {
  return (
    (node as HTMLScriptElement).tagName === "SCRIPT" &&
    (node as HTMLScriptElement).type !== "module"
  );
}

function ensureBody(html: string) {
  return /<body/i.test(html) ? html : `<body>${html}`;
}
