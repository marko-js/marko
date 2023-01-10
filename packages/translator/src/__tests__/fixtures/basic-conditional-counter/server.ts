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
    `${markHydrateNode(
      scopeId,
      0
    )}<button class="inc"></button>${markHydrateNode(
      scopeId,
      1
    )}<button class="toggle"></button>`
  );

  if (show) {
    childScopeId = nextScopeId();
    write(`<span>${markHydrateNode(childScopeId, 0)}${count}</span>`);
    childRenderer = register(() => {}, "ifBody");
    writeHydrateScope(childScopeId, (childScope = { [SYMBOL_OWNER]: scopeId }));
  }
  write(`${markHydrateControlSingleNodeEnd(scopeId, 2, childScopeId)}`);

  // eslint-disable-next-line no-sparse-arrays
  writeHydrateScope(scopeId, {
    [2 + 1]: childScope,
    [2 + 2]: childRenderer,
    8: show,
    9: count,
  });
  writeHydrateCall(scopeId, "counter");
};
