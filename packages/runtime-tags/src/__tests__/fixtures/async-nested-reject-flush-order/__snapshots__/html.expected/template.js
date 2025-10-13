import { rejectAfter, resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  _._html("<html><head></head><body>-- Start ");
  _._try($scope0_id, "#text/0", _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._await($scope1_id, "#text/0", resolveAfter("promise1 resolved", 2), promise1 => {
      const $scope3_id = _._scope_id();
      _._html(`<div>Promise 1: ${_._escape(promise1)}</div>`);
    }, 0);
    _._await($scope1_id, "#text/1", rejectAfter(new Error("promise2 rejected"), 1), promise2 => {
      const $scope4_id = _._scope_id();
      _._html(`<div>Promise 2: ${_._escape(promise2)}</div>`);
    }, 0);
  }, $scope0_id), {
    catch: _.attrTag({
      content: _._content_resume("__tests__/template.marko_2_content", err => {
        const $scope2_reason = _._scope_reason();
        const $scope2_id = _._scope_id();
        _._html(`<div>Caught: ${_._sep(_._serialize_guard($scope2_reason, /* err.message */0))}${_._escape(err.message)}${_._el_resume($scope2_id, "#text/0", _._serialize_guard($scope2_reason, /* err.message */0))}</div>`);
        _._serialize_if($scope2_reason, /* err.message */0) && _._scope($scope2_id, {}, "__tests__/template.marko", "14:6");
      }, $scope0_id)
    })
  });
  _._html(" -- End"), _._trailers("</body></html>");
});