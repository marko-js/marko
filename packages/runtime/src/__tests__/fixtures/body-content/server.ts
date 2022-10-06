import {
  write,
  markHydrateNode,
  nextScopeId,
  writeHydrateScope,
  writeHydrateCall,
  register,
} from "../../../html";

export default () => {
  write("<body>");
  counter();
  write("</body>");
};

/////////////////////////
// Main
/////////////////////////
// <let/clickCount = 0/>
// <FancyButton onclick() { clickCount++ }>${clickCount}</FancyButton>

const counter = () => {
  const count = 0;
  const scopeId = nextScopeId();
  const scope = { 1: count };

  FancyButton({
    renderBody() {
      const bodyScopeId = nextScopeId();
      write(`${markHydrateNode(bodyScopeId, 0)}${count}`);
      writeHydrateScope(bodyScopeId, { _: scope });
      writeHydrateCall(bodyScopeId, "subscribe_clickCount$renderBody");
    },
    onclick: register(() => {}, "clickHandler", scope),
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
  onclick,
}: {
  renderBody(): void;
  onclick(): void;
}) => {
  const scopeId = nextScopeId();

  write(`${markHydrateNode(scopeId, 0)}<button>`);

  renderBody();

  write(`</button>`);

  // eslint-disable-next-line no-sparse-arrays
  writeHydrateScope(scopeId, { 7: onclick });
  writeHydrateCall(scopeId, "FancyButton$onclick_hydrate");
};
