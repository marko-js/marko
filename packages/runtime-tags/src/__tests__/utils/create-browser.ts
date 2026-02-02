import { type DOMWindow, VirtualConsole } from "jsdom";
import { createBrowser } from "jsdom-context-require";

export default function (options: Parameters<typeof createBrowser>[0]) {
  const browser = createBrowser({
    ...options,
    virtualConsole: new VirtualConsole(),
  }) as ReturnType<typeof createBrowser> & {
    stream(chunks: string[]): () => boolean;
  };
  const window = browser.window as unknown as DOMWindow & {
    __RESOLVE_STATE__: typeof globalThis.__RESOLVE_STATE__;
    MessageChannel: any;
  };
  window.__RESOLVE_STATE__ = globalThis.__RESOLVE_STATE__;
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

  browser.stream = (chunks) => {
    const { document } = window;
    document.open();

    if (chunks.length > 1) {
      const parsed = document.implementation.createHTMLDocument();
      parsed.write(chunks.join("<!--%%FLUSH%%-->"));
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

          const isScript = (node as Element).tagName === "SCRIPT";
          const clone = document.importNode(node, isScript);
          targetNodes.set(node, clone);
          (targetNodes.get(node.parentNode!) as ParentNode).appendChild(clone);

          if (isScript) {
            walker.nextNode();
          }
        }
        document.close();
        return false;
      };
    }

    return () => {
      if (chunks.length) {
        document.write(chunks[0]);
      }
      document.close();
      return false;
    };
  };

  return browser;
}
