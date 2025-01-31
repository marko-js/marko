function getStringBy() {
  return "id";
}
_$.register(getStringBy, "__tests__/template.marko_0/getStringBy");
function getFunctionBy() {
  return _$.register(item => item.id, "__tests__/template.marko_0/anonymous");
}
_$.register(getFunctionBy, "__tests__/template.marko_0/getFunctionBy");
function getMissingBy() {
  return undefined;
}
_$.register(getMissingBy, "__tests__/template.marko_0/getMissingBy");
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const items = [{
    id: 0,
    text: "first"
  }, {
    id: 1,
    text: "second"
  }, {
    id: 2,
    text: "third"
  }];
  _$.write("<div><div class=by-string>");
  const _scope1_ = new Map();
  _$.resumeSingleNodeForOf(items, (_list, _index) => {
    const _scope1_id = _$.nextScopeId();
    let {
      text
    } = _list;
    _scope1_.set(_list.id, _$.ensureScopeWithId(_scope1_id));
    _$.write(`${_$.escapeXML(text)}${_$.markResumeNode(_scope1_id, "#text/0")}`);
    _$.writeScope(_scope1_id, {});
  }, _scope0_id, "#div/0");
  _$.write(`</div>${_$.markResumeNode(_scope0_id, "#div/0")}<button>Rotate</button>${_$.markResumeNode(_scope0_id, "#button/1")}</div>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_items");
  _$.writeScope(_scope0_id, {
    "items": items,
    "#div/0(": _scope1_.size ? _scope1_ : undefined
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);