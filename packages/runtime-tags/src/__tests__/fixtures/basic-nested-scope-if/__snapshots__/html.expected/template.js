import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let clickCount = 0;
  _._html("<div>");
  _._if(() => {
    if (clickCount < 3) {
      const $scope1_id = _._scope_id();
      _._html(`<button>${_._escape(clickCount)}${_._el_resume($scope1_id, "#text/1")}</button>${_._el_resume($scope1_id, "#button/0")}`);
      _._script($scope1_id, "__tests__/template.marko_1_clickCount");
      _._scope($scope1_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "3:4");
      return 0;
    } else {
      const $scope2_id = _._scope_id();
      _._html(`<span>The button was clicked <!>${_._escape(clickCount)}${_._el_resume($scope2_id, "#text/0")} times.</span>`);
      _._scope($scope2_id, {
        _: _._scope_with_id($scope0_id)
      }, "__tests__/template.marko", "8:4");
      return 1;
    }
  }, $scope0_id, "#text/0", 1, /* clickCount */1, /* clickCount */1, 0, 1);
  _._html("</div>");
  _._scope($scope0_id, {
    clickCount
  }, "__tests__/template.marko", 0, {
    clickCount: "2:8"
  });
  _._resume_branch($scope0_id);
});