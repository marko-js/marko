export const WALKER_RUNTIME_CODE = MARKO_DEBUG
  ? /* js */ `((runtimeId) =>
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
  : `(e=>self[e]=self[e]||(l=>{let t,d={},s=[],f=document,i=f.createTreeWalker(f,129),n=self[e][l]={i:l=e+l,d:f,l:d,v:s,x(){},w(e){for(;e=i.nextNode();)this.x(n=(n=e.data)&&!n.indexOf(l)&&(d[t=n.slice(x+1)]=e,n[x]),t,e),n>"#"&&s.push(e)}},x=l.length}))`;
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
      placeholder.c = () => placeholderCallback() + op(runtime);
    }
  }
};
})`
  : `(e=>{let i,t,r,l={},o=(e,i)=>{e.replaceWith(...i.childNodes),i.remove()};e.d.head.append(e.d.querySelector("style["+e.i+"]")||""),e.j={},e.x=(d,n,a,c,p)=>{"#"==d?(l[n]=t).i++:a==r&&i(),"T"==a.tagName&&(n=a.getAttribute(e.i))&&((c=e.l["^"+n])&&(l[n]={i:1,c(i=e.l[n]||a){for(;i.parentNode!==c.parentNode;)i=i.parentNode;for(;i!=r;(r=c.nextSibling).remove());o(c,a)}}),r=a.nextSibling,t=l[n],i=()=>{c||o(e.l[n],a),--t.i||t.c()},(d=e.j[n])&&(p=t.c,t.c=()=>p()+d(e)))}})`;
