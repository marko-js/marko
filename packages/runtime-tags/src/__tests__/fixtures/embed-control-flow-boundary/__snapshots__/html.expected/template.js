import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let hide = undefined;
  _._html(`<button id=toggle>Toggle</button>${_._el_resume($scope0_id, "#button/0")}<button id=cleanup>Cleanup</button>${_._el_resume($scope0_id, "#button/1")}`);
  _._if(() => {
    if (!hide) {
      const $scope1_id = _._scope_id();
      _._html("<div>Hello</div>");
      _._scope($scope1_id, {}, "__tests__/template.marko", "20:2");
      return 0;
    }
  }, $scope0_id, "#text/2", 1, /* hide */1, /* hide */1, 0, 1);
  _._script($scope0_id, "__tests__/template.marko_0_hide");
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {
    hide
  }, "__tests__/template.marko", 0, {
    hide: "7:6"
  });
  _._resume_branch($scope0_id);
});