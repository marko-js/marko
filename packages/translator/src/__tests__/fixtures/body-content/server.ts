import {
  write,
  markHydrateNode,
  nextScopeId,
  writeHydrateScope,
  writeHydrateCall,
  register,
} from "@marko/runtime-fluurt/src/html";

export default () => {
  write("<body>");
  counter();
  write("</body>");
};

/////////////////////////
// Main
/////////////////////////
// <let/clickCount = 0/>
// <FancyButton onClick() { clickCount++ }>${clickCount}</FancyButton>

const counter = () => {
  const count = 0;
  const scopeId = nextScopeId();
  const scope = { 1: count };

  FancyButton({
    renderBody() {
      const bodyScopeId = nextScopeId();
      write(`${count}${markHydrateNode(bodyScopeId, 0)}`);
      writeHydrateScope(bodyScopeId, { _: scope });
      writeHydrateCall(bodyScopeId, "subscribe_clickCount$renderBody");
    },
    onClick: register(() => {}, "clickHandler", scopeId),
  });

  // eslint-disable-next-line no-sparse-arrays
  writeHydrateScope(scopeId, scope);
};

////////////////////////////////////////////////////
// FancyButton
////////////////////////////////////////////////////
// <attrs/{ renderBody, ...more }/>
// <button ...more><${renderBody}/></button>

const FancyButton = ({
  renderBody,
  onClick,
}: {
  renderBody(): void;
  onClick(): void;
}) => {
  const scopeId = nextScopeId();

  write(`<button>`);

  renderBody();

  write(`</button>${markHydrateNode(scopeId, 0)}`);

  // eslint-disable-next-line no-sparse-arrays
  writeHydrateScope(scopeId, { 7: onClick });
  writeHydrateCall(scopeId, "FancyButton$onclick_hydrate");
};
