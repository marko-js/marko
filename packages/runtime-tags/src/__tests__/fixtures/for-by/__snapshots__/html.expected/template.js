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
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
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
    const $scope1_id = _$.nextScopeId();
    _$.write(`${_$.escapeXML(text)}${_$.markResumeNode($scope1_id, "#text/0")}`);
    _$.writeScope($scope1_id, {}, "__tests__/template.marko", "17:6");
  }, "id", $scope0_id, "#div/0", /* state: items */1, /* state: items */1, "</div>");
  _$.write("<div class=by-function>");
  _$.resumeSingleNodeForOf(items, ({
    text
  }) => {
    const $scope2_id = _$.nextScopeId();
    _$.write(`${_$.escapeXML(text)}${_$.markResumeNode($scope2_id, "#text/0")}`);
    _$.writeScope($scope2_id, {}, "__tests__/template.marko", "21:6");
  }, item => item.id, $scope0_id, "#div/1", /* state: items */1, /* state: items */1, "</div>");
  _$.write("<div class=by-unknown-string>");
  _$.resumeSingleNodeForOf(items, ({
    text
  }) => {
    const $scope3_id = _$.nextScopeId();
    _$.write(`${_$.escapeXML(text)}${_$.markResumeNode($scope3_id, "#text/0")}`);
    _$.writeScope($scope3_id, {}, "__tests__/template.marko", "25:6");
  }, getStringBy(), $scope0_id, "#div/2", /* state: items */1, /* state: items */1, "</div>");
  _$.write("<div class=by-unknown-function>");
  _$.resumeSingleNodeForOf(items, ({
    text
  }) => {
    const $scope4_id = _$.nextScopeId();
    _$.write(`${_$.escapeXML(text)}${_$.markResumeNode($scope4_id, "#text/0")}`);
    _$.writeScope($scope4_id, {}, "__tests__/template.marko", "29:6");
  }, getFunctionBy(), $scope0_id, "#div/3", /* state: items */1, /* state: items */1, "</div>");
  _$.write("<div class=by-unknown-missing>");
  _$.resumeSingleNodeForOf(items, ({
    text
  }) => {
    const $scope5_id = _$.nextScopeId();
    _$.write(`${_$.escapeXML(text)}${_$.markResumeNode($scope5_id, "#text/0")}`);
    _$.writeScope($scope5_id, {}, "__tests__/template.marko", "33:6");
  }, getMissingBy(), $scope0_id, "#div/4", /* state: items */1, /* state: items */1, "</div>");
  _$.write(`<button>Rotate</button>${_$.markResumeNode($scope0_id, "#button/5")}</div>`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0_items");
  _$.writeScope($scope0_id, {
    items
  }, "__tests__/template.marko", 0, {
    items: "14:8"
  });
  _$.resumeClosestBranch($scope0_id);
});