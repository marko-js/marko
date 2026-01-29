import { rejectAfter, resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html("a");
  _._try($scope0_id, "#text/0", _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._scope_reason();
    _._html("b");
    _._await($scope1_id, "#text/0", rejectAfter(new Error("ERROR!"), 2), data => {
      const $scope3_id = _._scope_id();
      _._html(_._escape(data));
    }, 0);
    _._html("c");
  }, $scope0_id), {
    catch: _.attrTag({
      content: _._content_resume("__tests__/template.marko_2_content", error => {
        const $scope2_reason = _._scope_reason();
        const $scope2_id = _._scope_id();
        _._html(`${_._escape(error.message)}${_._el_resume($scope2_id, "#text/0", _._serialize_guard($scope2_reason, /* error.message */0))}`);
        _._serialize_if($scope2_reason, /* error.message */0) && _._scope($scope2_id, {}, "__tests__/template.marko", "8:4");
      }, $scope0_id)
    })
  });
  _._html("d");
  _._await($scope0_id, "#text/1", resolveAfter("e", 1), data => {
    const $scope4_id = _._scope_id();
    _._html(_._escape(data));
  }, 0);
  _._html("f");
});