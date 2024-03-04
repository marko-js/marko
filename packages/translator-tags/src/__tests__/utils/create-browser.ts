import type { DOMWindow } from "jsdom";
import { createBrowser } from "jsdom-context-require";
import init from "../test-globals";

export default function (options: Parameters<typeof createBrowser>[0]) {
  const browser = createBrowser(options);
  const window = browser.window as DOMWindow & { MessageChannel: any };
  init(window);
  window.queueMicrotask = queueMicrotask;
  window.MessageChannel = (window as any).MessageChannel =
    class MessageChannel {
      port1: any;
      port2: any;
      constructor() {
        this.port1 = { onmessage() {} };
        this.port2 = {
          postMessage: () => {
            setImmediate(this.port1.onmessage);
          },
        };
      }
    };
  window.requestAnimationFrame = (fn) => setTimeout(fn) as any;
  return browser;
}
