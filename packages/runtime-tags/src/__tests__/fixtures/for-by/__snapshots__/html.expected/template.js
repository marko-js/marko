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
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let items = [{
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
  _$.resumeSingleNodeForOf(items, ({
    text
  }) => {
    const _scope1_id = _$.nextScopeId();
    _$.write(`${_$.escapeXML(text)}${_$.markResumeNode(_scope1_id, "#text/0")}`);
  }, "id", _scope0_id, "#div/0", 1);
  _$.write("</div><div class=by-function>");
  _$.resumeSingleNodeForOf(items, ({
    text
  }) => {
    const _scope2_id = _$.nextScopeId();
    _$.write(`${_$.escapeXML(text)}${_$.markResumeNode(_scope2_id, "#text/0")}`);
  }, item => item.id, _scope0_id, "#div/1", 1);
  _$.write("</div><div class=by-unknown-string>");
  _$.resumeSingleNodeForOf(items, ({
    text
  }) => {
    const _scope3_id = _$.nextScopeId();
    _$.write(`${_$.escapeXML(text)}${_$.markResumeNode(_scope3_id, "#text/0")}`);
  }, getStringBy(), _scope0_id, "#div/2", 1);
  _$.write("</div><div class=by-unknown-function>");
  _$.resumeSingleNodeForOf(items, ({
    text
  }) => {
    const _scope4_id = _$.nextScopeId();
    _$.write(`${_$.escapeXML(text)}${_$.markResumeNode(_scope4_id, "#text/0")}`);
  }, getFunctionBy(), _scope0_id, "#div/3", 1);
  _$.write("</div><div class=by-unknown-missing>");
  _$.resumeSingleNodeForOf(items, ({
    text
  }) => {
    const _scope5_id = _$.nextScopeId();
    _$.write(`${_$.escapeXML(text)}${_$.markResumeNode(_scope5_id, "#text/0")}`);
  }, getMissingBy(), _scope0_id, "#div/4", 1);
  _$.write(`</div><button>Rotate</button>${_$.markResumeNode(_scope0_id, "#button/5")}</div>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_items");
  _$.writeScope(_scope0_id, {
    items
  }, "__tests__/template.marko", 0, {
    items: "14:8"
  });
  _$.resumeClosestBranch(_scope0_id);
});