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
  const flushVisible = () => {
    if (!ioQueue) return;
    const batch = ioQueue;
    ioQueue = undefined;
    for (const { io, targets, callback } of batch) {
      const entries = [...targets].map(
        (target) =>
          ({ isIntersecting: true, target }) as IntersectionObserverEntry,
      );
      if (entries.length) callback(entries, io as IntersectionObserver);
    }
  };
  const flushRaf = () => {
    if (!rafQueue) return;
    const timestamp = performance.now();
    const batch = rafQueue;
    rafQueue = undefined;
    for (const fn of batch) fn(timestamp);
  };
  const flushIdle = () => {
    if (!idleQueue) return;
    const batch = idleQueue;
    idleQueue = undefined;
    for (const fn of batch) {
      fn({
        didTimeout: false,
        timeRemaining: () => 0,
      });
    }
  };
  const flushMedia = () => {
    if (!mediaQueue) return;
    const batch = mediaQueue;
    mediaQueue = undefined;
    for (const { listeners } of batch) {
      for (const listener of listeners) {
        if (typeof listener === "function") listener({} as MediaQueryListEvent);
        else listener.handleEvent({} as MediaQueryListEvent);
      }
    }
  };
  let ioQueue: Set<IOEntry> | undefined;
  let rafQueue: FrameRequestCallback[] | undefined;
  let idleQueue: IdleRequestCallback[] | undefined;
  let mediaQueue: MQLEntry[] | undefined;
  window.__coverage__ = (globalThis as any).__coverage__;
  window.__RESOLVE_STATE__ = globalThis.__RESOLVE_STATE__;
  window.setImmediate = setImmediate;
  window.IntersectionObserver = class IntersectionObserver {
    #entry: IOEntry;
    constructor(callback: IntersectionObserverCallback) {
      (ioQueue ||= new Set()).add(
        (this.#entry = { callback, io: this as any, targets: new Set() }),
      );
    }
    disconnect() {
      ioQueue?.delete(this.#entry);
    }
    observe(target: Element) {
      this.#entry.targets.add(target);
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
    if (rafQueue) {
      rafQueue.push(fn);
    } else {
      rafQueue = [fn];
      setTimeout(flushRaf);
    }
    return 0;
  };
  window.requestIdleCallback = (fn) => {
    if (idleQueue) {
      idleQueue.push(fn);
    } else {
      idleQueue = [fn];
      setTimeout(flushIdle);
    }
    return 0;
  };
  window.matchMedia = (query) => {
    const entry: MQLEntry = { query, listeners: new Set() };
    (mediaQueue ||= []).push(entry);
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
      switch (flushType) {
        case "raf":
          flushRaf();
          break;
        case "idle":
          flushIdle();
          break;
        case "visible":
          flushVisible();
          break;
        case "media":
          flushMedia();
          break;
      }
    },
    async runAsyncScripts(beforeEffects?: () => void): Promise<void> {
      if (dir) {
        // Patch queueMicrotask to prevent scheduled updates (from effects)
        // from executing before we snapshot the dom.
        window.queueMicrotask = (fn: () => void) => deferred.push(fn);
        const deferred: (() => void)[] = [];

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
