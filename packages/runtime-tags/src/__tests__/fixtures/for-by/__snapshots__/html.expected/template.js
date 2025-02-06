function getStringBy() {
  return "id";
}
_$.register(getStringBy, "__tests__/template.marko_0/getStringBy");
function getFunctionBy() {
  return item => item.id;
}
_$.register(getFunctionBy, "__tests__/template.marko_0/getFunctionBy");
function getMissingBy() {
  return undefined;
}
_$.register(getMissingBy, "__tests__/template.marko_0/getMissingBy");
import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
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
    _$.debug(_$.writeScope(_scope1_id, {}), "__tests__/template.marko", "17:6", {
      "_pattern_": "17:10",
      "text": "17:12"
    });
  }, _scope0_id, "#div/0");
  _$.write(`</div>${_$.markResumeNode(_scope0_id, "#div/0")}<div class=by-function>`);
  const _by = item => item.id;
  const _scope2_ = new Map();
  _$.resumeSingleNodeForOf(items, (_list2, _index2) => {
    const _scope2_id = _$.nextScopeId();
    let {
      text
    } = _list2;
    _scope2_.set(_by(_list2, _index2), _$.ensureScopeWithId(_scope2_id));
    _$.write(`${_$.escapeXML(text)}${_$.markResumeNode(_scope2_id, "#text/0")}`);
    _$.debug(_$.writeScope(_scope2_id, {}), "__tests__/template.marko", "21:6", {
      "_pattern_2": "21:10",
      "text": "21:12"
    });
  }, _scope0_id, "#div/1");
  _$.write(`</div>${_$.markResumeNode(_scope0_id, "#div/1")}<div class=by-unknown-string>`);
  const _scope3_ = new Map();
  _$.resumeSingleNodeForOf(items, (_list3, _index3) => {
    const _scope3_id = _$.nextScopeId();
    let {
      text
    } = _list3;
    _scope3_.set(_$.forOfBy(getStringBy(), _list3, _index3), _$.ensureScopeWithId(_scope3_id));
    _$.write(`${_$.escapeXML(text)}${_$.markResumeNode(_scope3_id, "#text/0")}`);
    _$.debug(_$.writeScope(_scope3_id, {}), "__tests__/template.marko", "25:6", {
      "_pattern_3": "25:10",
      "text": "25:12"
    });
  }, _scope0_id, "#div/2");
  _$.write(`</div>${_$.markResumeNode(_scope0_id, "#div/2")}<div class=by-unknown-function>`);
  const _scope4_ = new Map();
  _$.resumeSingleNodeForOf(items, (_list4, _index4) => {
    const _scope4_id = _$.nextScopeId();
    let {
      text
    } = _list4;
    _scope4_.set(_$.forOfBy(getFunctionBy(), _list4, _index4), _$.ensureScopeWithId(_scope4_id));
    _$.write(`${_$.escapeXML(text)}${_$.markResumeNode(_scope4_id, "#text/0")}`);
    _$.debug(_$.writeScope(_scope4_id, {}), "__tests__/template.marko", "29:6", {
      "_pattern_4": "29:10",
      "text": "29:12"
    });
  }, _scope0_id, "#div/3");
  _$.write(`</div>${_$.markResumeNode(_scope0_id, "#div/3")}<div class=by-unknown-missing>`);
  const _scope5_ = new Map();
  _$.resumeSingleNodeForOf(items, (_list5, _index5) => {
    const _scope5_id = _$.nextScopeId();
    let {
      text
    } = _list5;
    _scope5_.set(_$.forOfBy(getMissingBy(), _list5, _index5), _$.ensureScopeWithId(_scope5_id));
    _$.write(`${_$.escapeXML(text)}${_$.markResumeNode(_scope5_id, "#text/0")}`);
    _$.debug(_$.writeScope(_scope5_id, {}), "__tests__/template.marko", "33:6", {
      "_pattern_5": "33:10",
      "text": "33:12"
    });
  }, _scope0_id, "#div/4");
  _$.write(`</div>${_$.markResumeNode(_scope0_id, "#div/4")}<button>Rotate</button>${_$.markResumeNode(_scope0_id, "#button/5")}</div>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_items");
  _$.debug(_$.writeScope(_scope0_id, {
    "items": items,
    "#div/0(": _scope1_.size ? _scope1_ : undefined,
    "#div/1(": _scope2_.size ? _scope2_ : undefined,
    "#div/2(": _scope3_.size ? _scope3_ : undefined,
    "#div/3(": _scope4_.size ? _scope4_ : undefined,
    "#div/4(": _scope5_.size ? _scope5_ : undefined
  }), "__tests__/template.marko", 0, {
    "items": "14:8"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);