// Inside the walker, `doc` is rebound from the document to the runtime object,
// so every later `doc.x(...)` is a late-bound call the reorder runtime replaces.
export const WALKER_RUNTIME_CODE = /* js */ `((runtimeId) => (self[runtimeId] ||= (
  renderId,
  prefix = runtimeId + renderId,
  prefixLen = prefix.length,
  lookup = {},
  visits = [],
  doc = document,
  walker = doc.createTreeWalker(
    doc,
    129 /* NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_ELEMENT */,
  ),
) =>
  doc = (self[runtimeId][renderId] = {
    i: prefix,
    d: doc,
    l: lookup,
    v: visits,
    x() {},
    w(node, op, id) {
      while ((node = walker.nextNode())) {
        // Only reorder markers ("#", "!") are ever looked up, so only they are
        // kept: the lookup lives as long as the page, and every node marker
        // would otherwise stay referenced in it after resume consumed it.
        doc.x(
          (op =
            (op = node.data) &&
            !op.indexOf(prefix) &&
            ((id = op.slice(prefixLen + 1)),
            (op = op[prefixLen]) > "#" || (lookup[id] = node),
            op)),
          id,
          node,
        );

        if (op > "#") {
          visits.push(node);
        }
      }
    },
  })
, self[runtimeId]))`;
export const REORDER_RUNTIME_CODE = /* js */ `((runtime) => {
  if (runtime.j) return;
  let onNextSibling,
    placeholder,
    nextSibling,
    placeholders = runtime.p = {},
    replace = (id, container) => runtime.l[id].replaceWith(...container.childNodes);
  runtime.j = {};
  runtime.x = (op, id, node, placeholderRoot, placeholderCb) => {
    if (node == nextSibling) {
      onNextSibling();
    }

    if (op == "#") {
      (placeholders[id] = placeholder).i++;
    } else if (op == "!") {
      if (runtime.l[id] && placeholders[id]) {
        nextSibling = node.nextSibling;
        onNextSibling = () => placeholders[id].c();
      }
    } else if (node.tagName == "T" && (id = node.getAttribute(runtime.i))) {
      nextSibling = node.nextSibling;
      onNextSibling = () => {
        node.remove();
        placeholderRoot || replace(id, node);
        placeholder.c();
      };
      placeholder =
        placeholders[id] ||
        (placeholderRoot = placeholders[id] =
          {
            i: runtime.l[id] ? 1 : 2,
            r: id,
            // Resume may still walk markers inside the dropped placeholder, so
            // park it in any detached parent (a bare <t> clone is the cheapest).
            c(start = runtime.l["^" + id], removed = node.cloneNode()) {
              if (--placeholderRoot.i) return 1;
              for (
                ;
                removed.prepend(
                  (nextSibling = runtime.l[id].previousSibling || start),
                ),
                  start != nextSibling;

              );
              replace(id, node);
            },
          });
      // Opens the chunk's visits for resume to parent to the root's branch; the
      // walk that this chunk's own script triggers closes it.
      runtime.v.push({ data: runtime.i + "*" + placeholder.r });
      // repurpose "op" for callbacks ...carefully
      if ((op = runtime.j[id])) {
        placeholderCb = placeholder.c;
        placeholder.c = () => placeholderCb() || op(runtime.r);
      }
    }
  };
})`;
