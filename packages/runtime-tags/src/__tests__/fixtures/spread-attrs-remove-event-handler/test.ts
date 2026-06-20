import type { TestConfig } from "../../main.test";

// An event handler dropped from a spread between renders must stop firing.
// Clicking removes `onMouseOver` from the spread; the following mouseover must
// be a no-op (log stays empty).
function click(container: Element) {
  container.querySelector("div")!.click();
}

function mouseover(container: Element) {
  const div = container.querySelector("div")!;
  div.dispatchEvent(
    new container.ownerDocument!.defaultView!.MouseEvent("mouseover", {
      bubbles: true,
    }),
  );
}

export const config: TestConfig = {
  skip_ssr: true,
  steps: [{}, click, mouseover],
};
