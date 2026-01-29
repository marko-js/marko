import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html(`<div></div>${_._el_resume($scope0_id, "#div/0")}`);
  _._try($scope0_id, "#text/1", _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._scope_reason();
    _._html(_._escape((() => {
      throw new Error("ERROR!");
    })()));
    _._script($scope1_id, "__tests__/template.marko_1");
    _._scope($scope1_id, {
      _: _._scope_with_id($scope0_id)
    }, "__tests__/template.marko", "2:2");
  }, $scope0_id), {
    catch: _.attrTag({
      content: _._content_resume("__tests__/template.marko_2_content", err => {
        const $scope2_reason = _._scope_reason();
        const $scope2_id = _._scope_id();
        _._html(`${_._escape(err.message)}${_._el_resume($scope2_id, "#text/0", _._serialize_guard($scope2_reason, /* err.message */0))}`);
        _._serialize_if($scope2_reason, /* err.message */0) && _._scope($scope2_id, {}, "__tests__/template.marko", "7:4");
      }, $scope0_id)
    })
  });
  _._html(`<div></div>${_._el_resume($scope0_id, "#div/2")}`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});