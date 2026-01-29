import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $clickCount__closures = new Set();
  let clickCount = 0;
  _._html(`<div></div>${_._el_resume($scope0_id, "#div/0")}`);
  _._try($scope0_id, "#text/1", _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._scope_reason();
    _._html(`<button>inc</button>${_._el_resume($scope1_id, "#button/0")} -- <!>${_._escape((() => {
      if (clickCount > 1) throw new Error("ERROR!");
    })())}${_._el_resume($scope1_id, "#text/1")}`);
    _._script($scope1_id, "__tests__/template.marko_1_clickCount");
    _._subscribe($clickCount__closures, _._scope($scope1_id, {
      _: _._scope_with_id($scope0_id),
      "ClosureSignalIndex:clickCount": 0
    }, "__tests__/template.marko", "4:2"));
    _._resume_branch($scope1_id);
  }, $scope0_id), {
    catch: _.attrTag({
      content: _._content_resume("__tests__/template.marko_2_content", err => {
        const $scope2_reason = _._scope_reason();
        const $scope2_id = _._scope_id();
        _._html(`${_._escape(err)}${_._el_resume($scope2_id, "#text/0", _._serialize_guard($scope2_reason, /* err */0))}`);
        _._serialize_if($scope2_reason, /* err */0) && _._scope($scope2_id, {}, "__tests__/template.marko", "12:4");
      }, $scope0_id)
    })
  });
  _._scope($scope0_id, {
    clickCount,
    "ClosureScopes:clickCount": $clickCount__closures
  }, "__tests__/template.marko", 0, {
    clickCount: "1:6"
  });
  _._resume_branch($scope0_id);
});