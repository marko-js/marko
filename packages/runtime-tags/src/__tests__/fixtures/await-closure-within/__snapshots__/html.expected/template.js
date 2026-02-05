import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._try($scope0_id, "#text/0", _._content_resume("__tests__/template.marko_1_content", () => {
    const $scope1_id = _._scope_id();
    _._scope_reason();
    _._await($scope1_id, "#text/0", resolveAfter(0, 1), () => {
      const $scope3_id = _._scope_id();
      let value = 1;
      _._html(`<button>${_._escape(value)}${_._el_resume($scope3_id, "#text/1")}</button>${_._el_resume($scope3_id, "#button/0")}`);
      _._if(() => {
        if ((value > 0)) {
          const $scope4_id = _._scope_id();
          _._html(`<span>${_._escape(value)}${_._el_resume($scope4_id, "#text/0")}</span>`);
          _._scope($scope4_id, {
            _: _._scope_with_id($scope3_id)
          }, "__tests__/template.marko", "7:5");
          return 0;
        }
      }, $scope3_id, "#text/2", 1, /* value */1, /* value */1, 0, 1);
      _._script($scope3_id, "__tests__/template.marko_3_value");
      _._scope($scope3_id, {
        value
      }, "__tests__/template.marko", "4:3", {
        value: "5:9"
      });
      _._resume_branch($scope3_id);
    });
  }, $scope0_id), {
    placeholder: _.attrTag({
      content: _._content_resume("__tests__/template.marko_2_content", () => {
        _._scope_reason();
        const $scope2_id = _._scope_id();
        _._html("loading...");
      }, $scope0_id)
    })
  });
});