import {
  write,
  markHydrateNode,
  nextScopeId,
  writeHydrateScope,
  writeHydrateCall,
  markHydrateControlSingleNodeEnd,
  register,
  SYMBOL_OWNER,
} from "@marko/runtime-fluurt/src/html";

export default () => {
  write("<body>");
  counter();
  write("</body>");
};

// <let/show = true/>
// <let/count = 0/>
// <button.inc onClick() { count++; }/>
// <button.toggle onClick() { show = !show; }/>
// <if=show><span>${count}</span></if>

const counter = () => {
  const show = true;
  const count = 0;
  const scopeId = nextScopeId();
  let childScope;
  let childRenderer;
  let childScopeId!: number;

  write(
    `<button class="inc"></button>${markHydrateNode(
      scopeId,
      "#button/0"
    )}<button class="toggle"></button>${markHydrateNode(scopeId, "#button/1")}`
  );

  if (show) {
    childScopeId = nextScopeId();
    write(`<span>${count}${markHydrateNode(childScopeId, "#text/0")}</span>`);
    childRenderer = register(() => {}, "ifBody");
    writeHydrateScope(childScopeId, (childScope = { [SYMBOL_OWNER]: scopeId }));
  }
  write(
    `${markHydrateControlSingleNodeEnd(scopeId, "#comment/2", childScopeId)}`
  );

  // eslint-disable-next-line no-sparse-arrays
  writeHydrateScope(scopeId, {
    ["#comment/2!"]: childScope,
    ["#comment/2("]: childRenderer,
    show: show,
    count: count,
  });
  writeHydrateCall(scopeId, "counter");
};
