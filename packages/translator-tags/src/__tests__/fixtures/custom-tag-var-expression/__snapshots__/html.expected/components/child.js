import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const x = 1;
  _$.write("<span>child</span>");
  const _return = x + 3;
  _$.writeScope(_scope0_id, {
    "/": _tagVar
  });
  return _return;
});
export default /* @__PURE__ */_$.createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/custom-tag-var-expression/components/child.marko");