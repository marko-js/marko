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
        doc.x(
          (op =
            (op = node.data) &&
            !op.indexOf(prefix) &&
            ((lookup[(id = op.slice(prefixLen + 1))] = node), op[prefixLen])),
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
    // Captured once, here at this render's reorder-runtime init
    // (effectively document-resume time): a persisted apply bumps
    // \`runtime.n\` (see \`dom/resume\`'s \`bumpNavEpoch\`, called from
    // \`dom/update\`'s \`createUpdate\` before any frame applies), so a swap
    // whose epoch predates a navigation that has since applied is stale --
    // \`replace\` no-ops it instead of splicing pre-navigation content into
    // the post-navigation page. Ordinary streaming pages (no persisted
    // navigation ever applies) never advance \`runtime.n\`, so this is
    // always \`0 > 0\` (false) there and every swap proceeds as before.
    epoch = runtime.n || 0,
    placeholders = runtime.p = {},
    replace = (id, container) =>
      runtime.n > epoch || runtime.l[id].replaceWith(...container.childNodes);
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
            c(start = runtime.l["^" + id]) {
              if (--placeholderRoot.i) return 1;
              for (
                ;
                (nextSibling =
                  runtime.l[id].previousSibling || start).remove(),
                  start != nextSibling;

              );
              replace(id, node);
            },
          });
      // repurpose "op" for callbacks ...carefully
      if ((op = runtime.j[id])) {
        placeholderCb = placeholder.c;
        placeholder.c = () => placeholderCb() || op(runtime.r);
      }
    }
  };
})`;
