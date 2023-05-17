import {
  markResumeNode,
  nextScopeId,
  register,
  write,
  writeEffect,
  writeScope,
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
      write(`${clickCount}${markResumeNode(bodyScopeId, "#text/0")}`);
      writeScope(bodyScopeId, { _: scope });
      writeEffect(bodyScopeId, "subscribe_clickCount$renderBody");
    },
    onClick: register(() => {}, "clickHandler", scopeId),
  });

  // eslint-disable-next-line no-sparse-arrays
  writeScope(scopeId, scope);
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

  write(`</button>${markResumeNode(scopeId, "#button/0")}`);

  writeScope(scopeId, { onClick });
  writeEffect(scopeId, "FancyButton$onclick_effect");
};
