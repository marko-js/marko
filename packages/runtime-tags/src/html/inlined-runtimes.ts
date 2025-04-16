export const WALKER_RUNTIME_CODE = MARKO_DEBUG
  ? /* js */ `((runtimeId) => (
(self[runtimeId] = (
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
  })),
self[runtimeId]
))`
  : `(e=>(self[e]=(l,d=e+l,f=d.length,o={},n=[],s=document,t=s.createTreeWalker(s,129))=>s=self[e][l]={i:d,d:s,l:o,v:n,x(){},w(e,l,x){for(;e=t.nextNode();)s.x(l=(l=e.data)&&!l.indexOf(d)&&(o[x=l.slice(f+1)]=e,l[f]),x,e),l>"#"&&n.push(e)}},self[e]))`;
export const REORDER_RUNTIME_CODE = MARKO_DEBUG
  ? /* js */ `((runtime) => {
let onNextSibling,
  placeholder,
  nextSibling,
  placeholders = {},
  replace = (marker, container) => {
    marker.replaceWith(...container.childNodes);
    container.remove();
  };
runtime.d.head.append(
  runtime.d.querySelector("style[" + runtime.i + "]") || "",
);
runtime.j = {};
runtime.x = (op, id, node, start, placeholderCallback) => {
  if (op == "#") {
    (placeholders[id] = placeholder).i++;
  } else if (node == nextSibling) {
    onNextSibling();
  }

  if (node.tagName == "T" && (id = node.getAttribute(runtime.i))) {
    start = runtime.l["^" + id];

    if (start) {
      placeholders[id] = {
        i: 1,
        c(end = runtime.l[id] || node) {
          for (
            ;
            (nextSibling = end.previousSibling || start).remove(),
            start != nextSibling;
          );
          replace(end, node);
        },
      };
    }

    nextSibling = node.nextSibling;
    placeholder = placeholders[id];
    onNextSibling = () => {
      start || replace(runtime.l[id], node);
      if (!--placeholder.i) {
        placeholder.c();
      }
    };

    // repurpose "op" for callbacks ...carefully
    if (op = runtime.j[id]) {
      placeholderCallback = placeholder.c;
      placeholder.c = () => placeholderCallback() + op(runtime.r);
    }
  }
};
})`
  : `(e=>{let i,l,t,r={},c=(e,i)=>{e.replaceWith(...i.childNodes),i.remove()};e.d.head.append(e.d.querySelector("style["+e.i+"]")||""),e.j={},e.x=(d,o,n,a,g)=>{"#"==d?(r[o]=l).i++:n==t&&i(),"T"==n.tagName&&(o=n.getAttribute(e.i))&&((a=e.l["^"+o])&&(r[o]={i:1,c(i=e.l[o]||n){for(;(t=i.previousSibling||a).remove(),a!=t;);c(i,n)}}),t=n.nextSibling,l=r[o],i=()=>{a||c(e.l[o],n),--l.i||l.c()},(d=e.j[o])&&(g=l.c,l.c=()=>g()+d(e.r)))}})`;
