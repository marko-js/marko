import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const $show__closures = new Set();
  let show = 1;
  _._html(`<button></button>${_._el_resume($scope0_id, "#button/0")}<div id=one>Fail</div><div id=two>Fail</div>`);
  _._if(() => {
    if (show) {
      const $scope1_id = _._scope_id();
      _._try($scope1_id, "#text/0", _._content_resume("__tests__/template.marko_2_content", () => {
        const $scope2_id = _._scope_id();
        _._scope_reason();
        _._await($scope2_id, "#text/0", resolveAfter(0, 1), () => {
          const $scope3_id = _._scope_id();
          _._script($scope3_id, "__tests__/template.marko_3_show");
          _._html(`${_._escape(show)}${_._el_resume($scope3_id, "#text/0")}`);
          _._script($scope3_id, "__tests__/template.marko_3");
          _._scope($scope3_id, {
            _: _._scope_with_id($scope2_id),
            "ClosureSignalIndex:show": 0
          }, "__tests__/template.marko", "9:5");
          _._resume_branch($scope3_id);
        });
        _._await($scope2_id, "#text/1", resolveAfter(0, 1), () => {
          const $scope5_id = _._scope_id();
          _._script($scope5_id, "__tests__/template.marko_5");
          _._resume_branch($scope5_id);
        }, 0);
        _._scope($scope2_id, {
          _: _._scope_with_id($scope1_id)
        }, "__tests__/template.marko", "7:3");
      }, $scope1_id), {
        placeholder: _.attrTag({
          content: _._content_resume("__tests__/template.marko_4_content", () => {
            _._scope_reason();
            const $scope4_id = _._scope_id();
            _._html("loading...");
          }, $scope1_id)
        })
      });
      _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "6:1");
      return 0;
    }
  }, $scope0_id, "#text/1");
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {
    show,
    "ClosureScopes:show": $show__closures
  }, "__tests__/template.marko", 0, {
    show: "2:5"
  });
  _._resume_branch($scope0_id);
});