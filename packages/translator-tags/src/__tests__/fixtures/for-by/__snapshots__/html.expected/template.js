function getStringBy() {
  return "id";
}
_$.register(getStringBy, "packages/translator-tags/src/__tests__/fixtures/for-by/template.marko_0/getStringBy");
function getFunctionBy() {
  return _$.register(item => item.id, "packages/translator-tags/src/__tests__/fixtures/for-by/template.marko_0/anonymous");
}
_$.register(getFunctionBy, "packages/translator-tags/src/__tests__/fixtures/for-by/template.marko_0/getFunctionBy");
function getMissingBy() {
  return undefined;
}
_$.register(getMissingBy, "packages/translator-tags/src/__tests__/fixtures/for-by/template.marko_0/getMissingBy");
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
  const _forScopeIds = [],
    _scope1_ = new Map();
  _$.forOf(items, (_list, _index) => {
    const _scope1_id = _$.nextScopeId();
    let {
      text
    } = _list;
    _forScopeIds.push(_scope1_id);
    _$.write(`${_$.escapeXML(text)}${_$.markResumeNode(_scope1_id, "#text/0")}`);
    _$.writeScope(_scope1_id, {});
    _scope1_.set(_list.id, _$.getScopeById(_scope1_id));
  });
  _$.write(`${_$.markResumeControlSingleNodeEnd(_scope0_id, "#div/0", _forScopeIds)}</div>${_$.markResumeNode(_scope0_id, "#div/0")}<div class=by-function>`);
  const _by = item => item.id;
  const _forScopeIds2 = [],
    _scope2_ = new Map();
  _$.forOf(items, (_list2, _index2) => {
    const _scope2_id = _$.nextScopeId();
    let {
      text
    } = _list2;
    _forScopeIds2.push(_scope2_id);
    _$.write(`${_$.escapeXML(text)}${_$.markResumeNode(_scope2_id, "#text/0")}`);
    _$.writeScope(_scope2_id, {});
    _scope2_.set(_by(_list2, _index2), _$.getScopeById(_scope2_id));
  });
  _$.write(`${_$.markResumeControlSingleNodeEnd(_scope0_id, "#div/1", _forScopeIds2)}</div>${_$.markResumeNode(_scope0_id, "#div/1")}<div class=by-unknown-string>`);
  const _forScopeIds3 = [],
    _scope3_ = new Map();
  _$.forOf(items, (_list3, _index3) => {
    const _scope3_id = _$.nextScopeId();
    let {
      text
    } = _list3;
    _forScopeIds3.push(_scope3_id);
    _$.write(`${_$.escapeXML(text)}${_$.markResumeNode(_scope3_id, "#text/0")}`);
    _$.writeScope(_scope3_id, {});
    _scope3_.set(_$.forOfBy(getStringBy(), _list3, _index3), _$.getScopeById(_scope3_id));
  });
  _$.write(`${_$.markResumeControlSingleNodeEnd(_scope0_id, "#div/2", _forScopeIds3)}</div>${_$.markResumeNode(_scope0_id, "#div/2")}<div class=by-unknown-function>`);
  const _forScopeIds4 = [],
    _scope4_ = new Map();
  _$.forOf(items, (_list4, _index4) => {
    const _scope4_id = _$.nextScopeId();
    let {
      text
    } = _list4;
    _forScopeIds4.push(_scope4_id);
    _$.write(`${_$.escapeXML(text)}${_$.markResumeNode(_scope4_id, "#text/0")}`);
    _$.writeScope(_scope4_id, {});
    _scope4_.set(_$.forOfBy(getFunctionBy(), _list4, _index4), _$.getScopeById(_scope4_id));
  });
  _$.write(`${_$.markResumeControlSingleNodeEnd(_scope0_id, "#div/3", _forScopeIds4)}</div>${_$.markResumeNode(_scope0_id, "#div/3")}<div class=by-unknown-missing>`);
  const _forScopeIds5 = [],
    _scope5_ = new Map();
  _$.forOf(items, (_list5, _index5) => {
    const _scope5_id = _$.nextScopeId();
    let {
      text
    } = _list5;
    _forScopeIds5.push(_scope5_id);
    _$.write(`${_$.escapeXML(text)}${_$.markResumeNode(_scope5_id, "#text/0")}`);
    _$.writeScope(_scope5_id, {});
    _scope5_.set(_$.forOfBy(getMissingBy(), _list5, _index5), _$.getScopeById(_scope5_id));
  });
  _$.write(`${_$.markResumeControlSingleNodeEnd(_scope0_id, "#div/4", _forScopeIds5)}</div>${_$.markResumeNode(_scope0_id, "#div/4")}<button>Rotate</button>${_$.markResumeNode(_scope0_id, "#button/5")}</div>`);
  _$.writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/for-by/template.marko_0_items");
  _$.writeScope(_scope0_id, {
    "items": items,
    "#div/0(": _scope1_.size ? _scope1_ : undefined,
    "#div/1(": _scope2_.size ? _scope2_ : undefined,
    "#div/2(": _scope3_.size ? _scope3_ : undefined,
    "#div/3(": _scope4_.size ? _scope4_ : undefined,
    "#div/4(": _scope5_.size ? _scope5_ : undefined
  });
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/for-by/template.marko", _renderer);