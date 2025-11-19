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
  : `(e=>(self[e]||(self[e]=(l,f=e+l,s=f.length,a={},d=[],t=document,n=t.createTreeWalker(t,129))=>t=self[e][l]={i:f,d:t,l:a,v:d,x(){},w(e,l,r){for(;e=n.nextNode();)t.x(l=(l=e.data)&&!l.indexOf(f)&&(a[r=l.slice(s+1)]=e,l[s]),r,e),l>"#"&&d.push(e)}}),self[e]))`;
export const REORDER_RUNTIME_CODE = MARKO_DEBUG
  ? /* js */ `((runtime) => {
  if (runtime.j) return;
  let onNextSibling,
    placeholder,
    nextSibling,
    placeholders = runtime.p = {},
    replace = (id, container) => runtime.l[id].replaceWith(...container.childNodes);
  runtime.d.head.append(
    runtime.d.querySelector("style[" + runtime.i + "]") || ""
  );
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
})`
  : `(e=>{if(e.j)return;let i,l,r,t=e.p={},c=(i,l)=>e.l[i].replaceWith(...l.childNodes);e.d.head.append(e.d.querySelector("style["+e.i+"]")||""),e.j={},e.x=(n,a,d,o,g)=>{d==r&&i(),"#"==n?(t[a]=l).i++:"!"==n?e.l[a]&&t[a]&&(r=d.nextSibling,i=()=>t[a].c()):"T"==d.tagName&&(a=d.getAttribute(e.i))&&(r=d.nextSibling,i=()=>{d.remove(),o||c(a,d),l.c()},l=t[a]||(o=t[a]={i:e.l[a]?1:2,c(i=e.l["^"+a]){if(--o.i)return 1;for(;(r=e.l[a].previousSibling||i).remove(),i!=r;);c(a,d)}}),(n=e.j[a])&&(g=l.c,l.c=()=>g()||n(e.r)))}})`;
