import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let show = 1;
  _._html("<div id=outside>Pass</div>");
  _._if(() => {
    if (show) {
      const $scope1_id = _._scope_id();
      _._try($scope1_id, "#text/0", _._content_resume("__tests__/template.marko_2_content", () => {
        const $scope2_id = _._scope_id();
        _._scope_reason();
        _._await($scope2_id, "#text/0", resolveAfter(0, 1), () => {
          const $scope4_id = _._scope_id();
          _._script($scope4_id, "__tests__/template.marko_4");
        }, 0);
      }, $scope1_id), {
        placeholder: _.attrTag({
          content: _._content_resume("__tests__/template.marko_3_content", () => {
            _._scope_reason();
            const $scope3_id = _._scope_id();
            _._html("loading...");
          }, $scope1_id)
        })
      });
      _._scope($scope1_id, {}, "__tests__/template.marko", "5:1");
      return 0;
    }
  }, $scope0_id, "#text/0");
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});