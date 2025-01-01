import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const count = 0;
  _$.write("<div>");
  _$.fork(Promise.resolve("a"), value => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`Got: ${_$.escapeXML(value)} <!>${_$.escapeXML(count)}${_$.markResumeNode(_scope1_id, "#text/1")}`);
    _$.writeScope(_scope1_id, {
      "_": _$.ensureScopeWithId(_scope0_id)
    });
  });
  _$.fork(resolveAfter("b", 2), value => {
    const _scope2_id = _$.nextScopeId();
    _$.write(`Got: ${_$.escapeXML(value)} <!>${_$.escapeXML(count)}${_$.markResumeNode(_scope2_id, "#text/1")}`);
    _$.writeScope(_scope2_id, {
      "_": _$.ensureScopeWithId(_scope0_id)
    });
  });
  _$.fork(resolveAfter("c", 1), value => {
    const _scope3_id = _$.nextScopeId();
    _$.write(`Got: ${_$.escapeXML(value)} <!>${_$.escapeXML(count)}${_$.markResumeNode(_scope3_id, "#text/1")}`);
    _$.writeScope(_scope3_id, {
      "_": _$.ensureScopeWithId(_scope0_id)
    });
  });
  _$.write(`<button>Inc</button>${_$.markResumeNode(_scope0_id, "#button/0")}</div>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_count");
  _$.writeScope(_scope0_id, {
    "count": count
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);