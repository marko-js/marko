// A step logging, to the page's console, the scripts that ran (each pushes its
// name to `window.ran`) and each style's nonce, so a fixture's log shows both.
export function logScriptsAndStyles(document: Document) {
  const window = document.defaultView!;
  window.console.log(
    (window as typeof window & { ran?: string[] }).ran,
    Array.from(document.querySelectorAll("style"), (style) => style.nonce),
  );
}
