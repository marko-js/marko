import { write as _write, SYMBOL_OWNER as _SYMBOL_OWNER, nextScopeId as _nextScopeId, writeHydrateScope as _writeHydrateScope, register as _register, markHydrateControlSingleNodeEnd as _markHydrateControlSingleNodeEnd, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _customTag from "./components/custom-tag/index.marko";
const _renderer = ({
  x
}, _tagVar) => {
  const _scope0_ = _nextScopeId();
  let _thing;
  const _scope1_ = _nextScopeId();
  let _ifScopeId;
  const _ifScope = {},
    _ifRenderer = () => {};
  if (x) {
    const _scope2_ = _nextScopeId();
    _thing = {
      x: 1,
      renderBody() {
        _write("Hello");
      }
    };
    _writeHydrateScope(_scope2_, Object.assign(_ifScope, {
      [_SYMBOL_OWNER]: _scope1_
    }));
    _register(_ifRenderer, "packages/translator/src/__tests__/fixtures/at-tag-inside-if-tag/template.marko_2_renderer");
    _ifScopeId = _scope2_;
  }
  _write(`${_markHydrateControlSingleNodeEnd(_scope1_, "#text/0", _ifScopeId)}`);
  _writeHydrateScope(_scope1_, {
    "#text/0!": _ifScope,
    "#text/0(": _ifRenderer
  });
  _customTag({
    thing: _thing
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);