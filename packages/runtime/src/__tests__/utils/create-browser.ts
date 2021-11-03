import type { DOMWindow } from "jsdom";
import createBrowser from "jsdom-context-require";

export default function (options: Parameters<typeof createBrowser>[0]) {
  const browser = createBrowser(options);
  const window = browser.window as DOMWindow & { MessageChannel: any };
  window.queueMicrotask = queueMicrotask;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  window.MessageChannel = (
    window as any
  ).MessageChannel = class MessageChannel {
    port1: any;
    port2: any;
    constructor() {
      this.port1 = { onmessage() {} };
      this.port2 = {
        postMessage: () => {
          setImmediate(this.port1.onmessage);
        }
      };
    }
  };
  window.requestAnimationFrame = fn => setTimeout(fn) as any;
  return browser;
}
