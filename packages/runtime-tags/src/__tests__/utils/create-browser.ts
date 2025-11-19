import type { DOMWindow } from "jsdom";
import { createBrowser } from "jsdom-context-require";

import { resolveAfter } from "./resolve";

export default function (options: Parameters<typeof createBrowser>[0]) {
  const browser = createBrowser(options) as ReturnType<typeof createBrowser> & {
    open(): {
      write(chunk: string): void;
      close(): undefined | (() => Promise<void>);
    };
  };
  const window = browser.window as unknown as DOMWindow & {
    MessageChannel: any;
  };
  window.MARKO_DEBUG = true;
  window.MessageChannel = (window as any).MessageChannel =
    class MessageChannel {
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
  window.requestAnimationFrame = (fn) => window.setTimeout(fn) as any;

  browser.open = () => {
    const doc = window.document;
    let chunkCount = 0;
    let buffer = "";

    doc.open();

    return {
      write(chunk: string) {
        if (buffer) {
          buffer += "<!--%%FLUSH%%-->";
        }
        buffer += chunk;
        chunkCount++;
      },
      close() {
        if (chunkCount > 1) {
          const parsed = doc.implementation.createHTMLDocument();
          parsed.write(buffer);
          parsed.doctype?.remove();

          const walker = parsed.createTreeWalker(parsed);
          const targetNodes = new WeakMap<Node, Node>([[parsed, doc]]);
          let node: Node | null;

          function walkFlush() {
            while ((node = walker.nextNode())) {
              if (
                node.nodeType === 8 /* Node.COMMENT_NODE */ &&
                (node as Comment).data === "%%FLUSH%%"
              ) {
                return true;
              }

              const isScript = (node as Element).tagName === "SCRIPT";
              const clone = doc.importNode(node, isScript);
              targetNodes.set(node, clone);
              (targetNodes.get(node.parentNode!) as ParentNode).appendChild(
                clone,
              );

              if (isScript) {
                walker.nextNode();
              }
            }
            doc.close();
          }

          if (walkFlush()) {
            return async () => {
              await resolveAfter(0, 1);
              while (walkFlush()) {
                await resolveAfter(0, 1);
              }
            };
          }
        }

        doc.write(buffer);
        doc.close();
      },
    };
  };
  return browser;
}
