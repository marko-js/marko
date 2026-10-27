/**
 * Whether the event that ran, or is running, navigates this document: a submit,
 * or a primary click without modifier keys on `a[href]` without `download`;
 * aimed at this browsing context, that no handler prevented, and not a
 * fragment of this page. A `patch()` started in the dispatch counts as
 * navigating too: the runtime asks only for events no patch claimed.
 */
export function navigates(ev: Event) {
  const { button, metaKey, ctrlKey, shiftKey, altKey } = ev as MouseEvent;
  const source =
    ev.type == "submit"
      ? (ev.target as Element)
      : !(button || metaKey || ctrlKey || shiftKey || altKey) &&
        (ev.target as Element).closest?.("a[href]");
  if (!source || ev.defaultPrevented || source.hasAttribute("download")) {
    return false;
  }
  const target =
    (ev as SubmitEvent).submitter?.getAttribute("formtarget") ??
    source.getAttribute("target");
  const { href } = source as HTMLAnchorElement;
  return (
    (!target || target == "_self") &&
    !(href?.includes("#") && href.split("#")[0] == location.href.split("#")[0])
  );
}
