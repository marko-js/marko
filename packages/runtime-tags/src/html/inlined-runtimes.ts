export const WALKER_RUNTIME_CODE = MARKO_DEBUG
  ? /* js */ `((runtimeId) => (self[runtimeId] || (self[runtimeId] = (
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
), self[runtimeId]))`
  : `(e=>(self[e]||(self[e]=(l,s=e+l,f=s.length,o={},d=[],n=document,t=n.createTreeWalker(n,129))=>n=self[e][l]={i:s,d:n,l:o,v:d,x(){},w(e,l,a){for(;e=t.nextNode();)n.x(l=(l=e.data)&&!l.indexOf(s)&&(o[a=l.slice(f+1)]=e,l[f]),a,e),l>"#"&&d.push(e)}}),self[e]))`;
export const REORDER_RUNTIME_CODE = MARKO_DEBUG
  ? /* js */ `((runtime) => {
if (runtime.j) return;
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
  : `(e=>{if(e.j)return;let i,o,l,r={},t=(e,i)=>{e.replaceWith(...i.childNodes),i.remove()};e.d.head.append(e.d.querySelector("style["+e.i+"]")||""),e.j={},e.x=(c,d,n,a,g)=>{"#"==c?(r[d]=o).i++:n==l&&i(),"T"==n.tagName&&(d=n.getAttribute(e.i))&&((a=e.l["^"+d])&&(r[d]={i:1,c(i=e.l[d]||n){for(;(l=i.previousSibling||a).remove(),a!=l;);t(i,n)}}),l=n.nextSibling,o=r[d],i=()=>{a||t(e.l[d],n),--o.i||o.c()},(c=e.j[d])&&(g=o.c,o.c=()=>g()+c(e.r)))}})`;
