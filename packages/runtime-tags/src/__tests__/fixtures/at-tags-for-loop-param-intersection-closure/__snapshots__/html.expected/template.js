import * as _ from "@marko/runtime-tags/debug/html";
import _list from "./tags/list/index.marko";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $mult__closures = new Set();
  let mult = 2;
  let $item;
  _.forOf([1, 2, 3], item => {
    $item = _.attrTags($item, {
      content: _._content("__tests__/template.marko_1_content", () => {
        _._scope_reason();
        const $scope1_id = _._scope_id();
        _._html(`${_._escape(item * mult)}${_._el_resume($scope1_id, "#text/0")}`);
        _._subscribe($mult__closures, _._scope($scope1_id, {
          item,
          _: _._scope_with_id($scope0_id),
          "ClosureSignalIndex:mult": 0
        }, "__tests__/template.marko", "4:5", {
          item: "3:7"
        }));
        _._resume_branch($scope1_id);
      })
    });
  });
  _list({
    item: $item
  });
  _._html(`<button>Multiplier: <!>${_._escape(mult)}${_._el_resume($scope0_id, "#text/2")}</button>${_._el_resume($scope0_id, "#button/1")}`);
  _._script($scope0_id, "__tests__/template.marko_0_mult");
  _._scope($scope0_id, {
    mult,
    "ClosureScopes:mult": $mult__closures
  }, "__tests__/template.marko", 0, {
    mult: "1:5"
  });
  _._resume_branch($scope0_id);
});