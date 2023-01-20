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
  const clickCount = 0;
  const scopeId = nextScopeId();
  const scope = { clickCount };

  FancyButton({
    renderBody() {
      const bodyScopeId = nextScopeId();
      write(`${clickCount}${markHydrateNode(bodyScopeId, "#text/0")}`);
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

  write(`</button>${markHydrateNode(scopeId, "#button/0")}`);

  writeHydrateScope(scopeId, { onClick });
  writeHydrateCall(scopeId, "FancyButton$onclick_hydrate");
};
