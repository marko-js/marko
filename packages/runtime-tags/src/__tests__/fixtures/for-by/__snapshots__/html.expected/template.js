function getStringBy() {
  return "id";
}
function getFunctionBy() {
  return item => item.id;
}
function getMissingBy() {
  return undefined;
}
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
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
  _._html("<div><div class=by-string>");
  _._for_of(items, ({
    text
  }) => {
    const $scope1_id = _._scope_id();
    _._html(`${_._escape(text)}${_._el_resume($scope1_id, "#text/0")}`);
    _._scope($scope1_id, {}, "__tests__/template.marko", "17:6");
  }, "id", $scope0_id, "#div/0", /* items */1, /* items */1, /* items */1, "</div>", 1);
  _._html("<div class=by-function>");
  _._for_of(items, ({
    text
  }) => {
    const $scope2_id = _._scope_id();
    _._html(`${_._escape(text)}${_._el_resume($scope2_id, "#text/0")}`);
    _._scope($scope2_id, {}, "__tests__/template.marko", "21:6");
  }, item => item.id, $scope0_id, "#div/1", /* items */1, /* items */1, /* items */1, "</div>", 1);
  _._html("<div class=by-unknown-string>");
  _._for_of(items, ({
    text
  }) => {
    const $scope3_id = _._scope_id();
    _._html(`${_._escape(text)}${_._el_resume($scope3_id, "#text/0")}`);
    _._scope($scope3_id, {}, "__tests__/template.marko", "25:6");
  }, getStringBy(), $scope0_id, "#div/2", /* items */1, /* items */1, /* items */1, "</div>", 1);
  _._html("<div class=by-unknown-function>");
  _._for_of(items, ({
    text
  }) => {
    const $scope4_id = _._scope_id();
    _._html(`${_._escape(text)}${_._el_resume($scope4_id, "#text/0")}`);
    _._scope($scope4_id, {}, "__tests__/template.marko", "29:6");
  }, getFunctionBy(), $scope0_id, "#div/3", /* items */1, /* items */1, /* items */1, "</div>", 1);
  _._html("<div class=by-unknown-missing>");
  _._for_of(items, ({
    text
  }) => {
    const $scope5_id = _._scope_id();
    _._html(`${_._escape(text)}${_._el_resume($scope5_id, "#text/0")}`);
    _._scope($scope5_id, {}, "__tests__/template.marko", "33:6");
  }, getMissingBy(), $scope0_id, "#div/4", /* items */1, /* items */1, /* items */1, "</div>", 1);
  _._html(`<button>Rotate</button>${_._el_resume($scope0_id, "#button/5")}</div>`);
  _._script($scope0_id, "__tests__/template.marko_0_items");
  _._scope($scope0_id, {
    items
  }, "__tests__/template.marko", 0, {
    items: "14:8"
  });
  _._resume_branch($scope0_id);
});