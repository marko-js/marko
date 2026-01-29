import { resolveAfter, rejectAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._try($scope0_id, "#text/0", _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._scope_reason();
    _._await($scope1_id, "#text/0", resolveAfter("A Value", 2), v => {
      const $scope3_id = _._scope_id();
      _._html(`<div>Resolved A: ${_._escape(v)}</div>`);
    }, 0);
  }, $scope0_id), {
    catch: _.attrTag({
      content: _._content_resume("__tests__/template.marko_2_content", () => {
        _._scope_reason();
        const $scope2_id = _._scope_id();
        _._html("Rejected A");
      }, $scope0_id)
    })
  });
  _._try($scope0_id, "#text/1", _._content_resume("__tests__/template.marko_4_content", () => {
    const $scope4_id = _._scope_id();
    _._scope_reason();
    _._await($scope4_id, "#text/0", rejectAfter(new Error("rejected b"), 1), v => {
      const $scope6_id = _._scope_id();
      _._html(`<div>Resolved B: ${_._escape(v)}</div>`);
    }, 0);
  }, $scope0_id), {
    catch: _.attrTag({
      content: _._content_resume("__tests__/template.marko_5_content", () => {
        _._scope_reason();
        const $scope5_id = _._scope_id();
        _._html("Rejected B");
      }, $scope0_id)
    })
  });
});