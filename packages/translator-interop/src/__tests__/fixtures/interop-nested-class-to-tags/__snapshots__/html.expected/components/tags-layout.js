import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/components/tags-layout.marko", (input, $serialize) => {
  const $scope0_id = _._scope_id();
  let count = 0;
  _._html(`<button id=tags>${_._escape(count)}${_._el_resume($scope0_id, "#text/1")}</button>${_._el_resume($scope0_id, "#button/0")}<div>`);
  _._dynamic_tag($scope0_id, "#text/2", input.content, {}, 0, 0, _._serialize_guard($serialize, /* input.content */0));
  _._html("</div>");
  _._script($scope0_id, "__tests__/components/tags-layout.marko_0_count");
  _._scope($scope0_id, {
    count
  }, "__tests__/components/tags-layout.marko", 0, {
    count: "1:6"
  });
  _._resume_branch($scope0_id);
});