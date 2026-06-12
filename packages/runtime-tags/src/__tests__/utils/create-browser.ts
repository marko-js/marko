import path from "node:path";

import { JSDOM, VirtualConsole } from "jsdom";

import {
  importWithContext,
  waitForPendingModules,
} from "./import-with-context";
import type { FlushType } from "./resolve";
type IOEntry = {
  callback: IntersectionObserverCallback;
  io: IntersectionObserver;
  targets: Set<Element>;
};
type MQLEntry = {
  query: string;
  listeners: Set<EventListenerOrEventListenerObject>;
};

export default function createBrowser(dir?: string, loadOrder?: string[]) {
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
  const queues = {
    visible: batchQueue<IOEntry>(({ io, targets, callback }) => {
      const entries = [...targets].map(
        (target) =>
          ({ isIntersecting: true, target }) as IntersectionObserverEntry,
      );
      if (entries.length) callback(entries, io as IntersectionObserver);
    }),
    raf: batchQueue<FrameRequestCallback>((fn) => fn(performance.now())),
    idle: batchQueue<IdleRequestCallback>((fn) =>
      fn({ didTimeout: false, timeRemaining: () => 0 }),
    ),
    media: batchQueue<MQLEntry>(({ listeners }) => {
      for (const listener of listeners) {
        if (typeof listener === "function") listener({} as MediaQueryListEvent);
        else listener.handleEvent({} as MediaQueryListEvent);
      }
    }),
  };
  window.__RESOLVE_STATE__ = globalThis.__RESOLVE_STATE__;
  window.setImmediate = setImmediate;
  window.IntersectionObserver = class IntersectionObserver {
    #entry: IOEntry;
    constructor(callback: IntersectionObserverCallback) {
      queues.visible.add(
        (this.#entry = { callback, io: this as any, targets: new Set() }),
      );
    }
    disconnect() {
      queues.visible.delete(this.#entry);
      this.#entry.targets.clear();
    }
    observe(target: Element) {
      const entry = this.#entry;
      entry.targets.add(target);
      // Real observers always deliver an initial entry batch reflecting the
      // current intersection state (not intersecting until flushVisible).
      setTimeout(() => {
        if (entry.targets.has(target)) {
          entry.callback(
            [{ isIntersecting: false, target } as IntersectionObserverEntry],
            entry.io,
          );
        }
      });
    }
  };
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
  window.requestAnimationFrame = (fn) => {
    if (queues.raf.add(fn)) setTimeout(queues.raf.flush);
    return 0;
  };
  window.requestIdleCallback = (fn) => {
    if (queues.idle.add(fn)) setTimeout(queues.idle.flush);
    return 0;
  };
  window.matchMedia = (query) => {
    const entry: MQLEntry = { query, listeners: new Set() };
    queues.media.add(entry);
    return {
      matches: false,
      media: query,
      addEventListener(
        _type: string,
        listener: EventListenerOrEventListenerObject,
      ) {
        entry.listeners.add(listener);
      },
      removeEventListener(
        _type: string,
        listener: EventListenerOrEventListenerObject,
      ) {
        entry.listeners.delete(listener);
      },
    } as unknown as MediaQueryList;
  };

  return {
    window,
    virtualConsole,
    ctx,
    flush(flushType: Exclude<FlushType, "stream">) {
      queues[flushType].flush();
    },
    async runAsyncScripts(beforeEffects?: () => void): Promise<void> {
      if (dir) {
        // Patch queueMicrotask to prevent scheduled updates (from effects)
        // from executing before we snapshot the dom.
        window.queueMicrotask = (fn: () => void) => deferred.push(fn);
        const deferred: (() => void)[] = [];
        const pending: string[] = [];

        for (const { src, type } of window.document.scripts) {
          if (src && type === "module" && !loadedScripts.has(src)) {
            loadedScripts.add(src);
            pending.push(src);
          }
        }

        if (loadOrder) {
          // Completes lazy load scripts in the explicitly given order
          // (network order is not guaranteed in real browsers). Page entry
          // scripts keep document order and run first; unlisted load
          // scripts follow the listed ones in document order.
          const orderOf = (src: string) => {
            if (!src.endsWith(".load.mjs")) return 0;
            const i = loadOrder.findIndex((name) => src.endsWith(name));
            return (i === -1 ? loadOrder.length : i) + 1;
          };
          pending.sort((a, b) => orderOf(a) - orderOf(b));
        }

        for (const src of pending) {
          importWithContext(path.join(dir, src), { browser: true }, ctx);
          // With an explicit order each script is fully evaluated before
          // the next starts so that the arrival order is deterministic.
          if (loadOrder) await waitForPendingModules(ctx);
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

// A lazily created batch that swaps itself out when flushed (entries
// added during a flush land in the next batch).
function batchQueue<T>(each: (item: T) => void) {
  let items: Set<T> | undefined;
  return {
    add(item: T) {
      if (items) {
        items.add(item);
        return false;
      }
      items = new Set([item]);
      return true;
    },
    delete(item: T) {
      items?.delete(item);
    },
    flush() {
      if (items) {
        const batch = items;
        items = undefined;
        for (const item of batch) each(item);
      }
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
