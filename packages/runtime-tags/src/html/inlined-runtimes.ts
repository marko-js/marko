export const WALKER_RUNTIME_CODE = MARKO_DEBUG
  ? `((runtimeId) =>
(self[runtimeId] =
  self[runtimeId] ||
  ((renderId) => {
    let id,
      markers = {},
      visits = [],
      doc = document,
      walker = doc.createTreeWalker(
        doc,
        129,
      ) /* NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_ELEMENT */,
      op = (self[runtimeId][renderId] = {
        i: (renderId = runtimeId + renderId),
        d: doc,
        l: markers,
        v: visits,
        x() {},
        w(node) {
          while ((node = walker.nextNode())) {
            this.x(
              (op =
                (op = node.data) &&
                !op.indexOf(renderId) &&
                ((markers[(id = op.slice(prefix + 1))] = node), op[prefix])),
              id,
              node,
            );

            if (op > "#") {
              visits.push(node);
            }
          }
        },
      }),
      prefix = renderId.length;
  })))`
  : `(e=>self[e]=self[e]||(l=>{let t,d={},f=[],s=document,a=s.createTreeWalker(s,129),r=self[e][l]={i:l=e+l,d:s,l:d,v:f,x(){},w(e){for(;e=a.nextNode();)this.x(r=(r=e.data)&&!r.indexOf(l)&&(d[t=r.slice(x+1)]=e,r[x]),t,e),r>"#"&&f.push(e)}},x=l.length}))`;
export const REORDER_RUNTIME_CODE = MARKO_DEBUG
  ? `((runtime) => {
let insertOne,
  placeholder,
  nextSibling,
  previousSibling,
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
  // "node" and "end" are all closed over and can't be repurposed. "start" is too but only in the new placeholder case

  if (op == "#") {
    (placeholders[id] = placeholder).i++;
  } else if (node == nextSibling) {
    insertOne();
  }

  if (node.tagName == "T" && (id = node.getAttribute(runtime.i))) {
    start = runtime.l["^" + id];

    if (start) {
      placeholder = placeholders[id] = {
        i: 0,
        c(end = runtime.l[id] || previousSibling || node) {
          while (end.parentNode !== start.parentNode) {
            end = end.parentNode;
          }

          for (
            ;
            end != nextSibling;
            (nextSibling = start.nextSibling).remove()
          );
          replace(start, node);
        },
      };
    } else {
      insertOne = () => {
        previousSibling = node.previousSibling;
        replace(runtime.l[id], node);
        if (!--start.i) {
          start.c();
        }
      };

      // repurpose "start" to hold this placeholder
      start = placeholder = placeholders[id];
      nextSibling = node.nextElementSibling || insertOne();
    }

    // repurpose "op" for callbacks ...carefully
    placeholderCallback = placeholder.c;
    (op = runtime.j[id]) &&
      (placeholder.c = () => placeholderCallback() + op());

    if (node.attributes.c) placeholder.c();
  }
};
})`
  : `(e=>{let t,i,r,l,o={},a=(e,t)=>{e.replaceWith(...t.childNodes),t.remove()};e.d.head.append(e.d.querySelector("style["+e.i+"]")||""),e.j={},e.x=(d,n,c,p,b)=>{"#"==d?(o[n]=i).i++:c==r&&t(),"T"==c.tagName&&(n=c.getAttribute(e.i))&&((p=e.l["^"+n])?i=o[n]={i:0,c(t=e.l[n]||l||c){for(;t.parentNode!==p.parentNode;)t=t.parentNode;for(;t!=r;(r=p.nextSibling).remove());a(p,c)}}:(t=()=>{l=c.previousSibling,a(e.l[n],c),--p.i||p.c()},p=i=o[n],r=c.nextElementSibling||t()),b=i.c,(d=e.j[n])&&(i.c=()=>b()+d()),c.attributes.c&&i.c())}})`;
