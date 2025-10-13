import { rejectAfter, resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  const $scope0_id = _._scope_id();
  _._html("<html><head></head><body>");
  _._try($scope0_id, "#text/0", _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._await($scope1_id, "#text/0", resolveAfter("first", 1), data1 => {
      const $scope3_id = _._scope_id();
      _._html(`<div>First: ${_._escape(data1)}</div>`);
    }, 0);
    _._await($scope1_id, "#text/1", rejectAfter(new Error("Second failed"), 2), data2 => {
      const $scope4_id = _._scope_id();
      _._html(`<div>Second: ${_._escape(data2)}</div> `);
    }, 0);
  }, $scope0_id), {
    catch: _.attrTag({
      content: _._content_resume("__tests__/template.marko_2_content", err => {
        const $scope2_reason = _._scope_reason();
        const $scope2_id = _._scope_id();
        _._html(`<div>Error: ${_._sep(_._serialize_guard($scope2_reason, /* err.message */0))}${_._escape(err.message)}${_._el_resume($scope2_id, "#text/0", _._serialize_guard($scope2_reason, /* err.message */0))}</div>`);
        _._serialize_if($scope2_reason, /* err.message */0) && _._scope($scope2_id, {}, "__tests__/template.marko", "13:6");
      }, $scope0_id)
    })
  });
  _._trailers("</body></html>");
});