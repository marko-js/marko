import {
  write,
  markHydrateNode,
  nextScopeId,
  writeHydrateScope,
  writeHydrateCall,
  register,
  SYMBOL_OWNER,
  markHydrateControlEnd,
  markHydrateScopeStart,
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
// <if=show>The count is ${count}</if>

const counter = () => {
  const show = true;
  const count = 0;
  const scopeId = nextScopeId();
  let childScope;
  let childRenderer;

  write(
    `<button class="inc"></button>${markHydrateNode(
      scopeId,
      "#button/0"
    )}<button class="toggle"></button>${markHydrateNode(scopeId, "#button/1")}`
  );

  if (show) {
    const childScopeId = nextScopeId();
    write(
      `${markHydrateScopeStart(
        childScopeId
      )}The count is <!>${count}${markHydrateNode(childScopeId, "#text/0")}`
    );
    childRenderer = register(() => {}, "ifBody");
    writeHydrateScope(childScopeId, (childScope = { [SYMBOL_OWNER]: scopeId }));
  }
  write(`${markHydrateControlEnd(scopeId, "#comment/2")}`);

  // eslint-disable-next-line no-sparse-arrays
  writeHydrateScope(scopeId, {
    ["#comment/2!"]: childScope,
    ["#comment/2("]: childRenderer,
    show: show,
    count: count,
  });
  writeHydrateCall(scopeId, "counter");
};
