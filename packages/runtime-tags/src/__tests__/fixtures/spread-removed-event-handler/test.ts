import type { TestConfig } from "../../main.test";

// When attributes come from a spread (`<div ...attrs>`), a delegated event
// handler that was applied on a previous render but is absent now must be
// cleared -- delegated handlers live on the element as `$<type>` properties
// (see `event.ts`), so they aren't covered by the `el.attributes` removal scan
// that handles plain attributes.
//
// phase 0 spread = { onClick, onMouseOver }; phase 1 spread = { onClick } only.
// Steps below verify, in order:
//   click     -> phase 1, onMouseOver removed from the spread
//   mouseover -> no-op: the removed onMouseOver must NOT fire (the fix)
//   click     -> phase 0 via the surviving onClick (it wasn't over-cleared)
//   mouseover -> fires again: onMouseOver re-added, appends "M"
export const config: TestConfig = {
  skip_ssr: true, // event-listener lifecycle is a client-only (CSR) concern
  steps: [{}, click, mouseover, click, mouseover],
};

function click(container: Element) {
  container.querySelector("div")!.click();
}

function mouseover(container: Element) {
  const div = container.querySelector("div")!;
  const win = container.ownerDocument!.defaultView!;
  div.dispatchEvent(new win.MouseEvent("mouseover", { bubbles: true }));
}
